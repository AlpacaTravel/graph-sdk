const glob = require('glob');
const fs = require('fs');
const path = require('path');

const graphqlRoot = path.resolve(__dirname, '../../graphql');

glob('../../graphql/**/*.graphql', (er, files) => {
  const structures = files
    .filter((f) => !/fragment/.test(f))
    .map(info)
    .reduce((c, t) => {
      return Object.assign({}, c, { [t.dir]: (c[t.dir] || []).concat(t) });
    }, {});

  const title = `# Apollo Hooks`;
  const footer = ``;
  const sections = Object.keys(structures).map((key) => section(key, structures));

  // Table of contents
  const doc = [
    title,
    sections
      .filter((sect) => sect.parent[0] === null)
      .map((s) => {
        const sectionStart = `## ${s.title}\n\n${s.toc}`;
        const sectionMiddle = sections.reduce((c, sect) => {
          if (sect.parent[0] === s.key) {
            return c.concat(`\n\n### ${sect.title}\n\n${sect.toc}`);
          }
          return c;
        }, []);
        const sectionDoc = [sectionStart, ...sectionMiddle].join('');
        return sectionDoc;
      })
      .join('\n\n'),
    footer,
  ].join('\n\n');

  fs.writeFileSync(path.resolve(__dirname, './api.md'), doc);
});

function section(key, structures) {
  const [parent, parentText, parentLink] = (() => {
    const first = structures[key][0];
    const isParentDifferent = first.dirParent !== first.dir;
    if (!isParentDifferent) {
      return [null, 'View other SDK Capabilities', '/graphql'];
    }
    return [
      first.dirParent,
      `View other ${first.dirParent} SDK capabilities`,
      `/graphql/${first.dirParent}`,
    ];
  })();

  // Links
  return {
    key: key,
    title: formatString(key),
    toc: structures[key]
      .map((p) => `- **[${p.title}](${p.link})**\n  ${p.comment.trim()}`)
      .join('\n'),
    parent: [parent, parentText, parentLink],
  };
}

function info(input) {
  const minimal = input.replace('../../graphql/', '');

  // Split out title
  const [dir, file] = rsplit(minimal);

  // Create a title

  // Target the comments at the start of the graphql query
  const contents = fs.readFileSync(path.resolve(__dirname, input), 'utf-8');
  const [pre] = contents.split(/(query|mutation) (\w+) ?{/);
  const isQuery = /query (\w+) {/.test(contents);
  const comment = pre
    .replace(/#import.+\n/g, '')
    .replace(/\n/g, '')
    .replace(/# /g, ' ')
    .replace(/\..+/, '');

  const title = `use${camelize(file.replace(/.graphql/, ''))}${isQuery ? 'Query' : 'Mutation'}`;

  const link = `https://alpacatravel.github.io/graph-sdk/packages/react-apollo/docs/modules.html#${title}`;

  return {
    dirParent: dir[0],
    dir: dir.join('/'),
    title,
    path: minimal,
    comment,
    link,
  };
}

function formatString(string) {
  switch (string.toLowerCase()) {
    case 'place/atdw':
      return 'Place Provider: Australian Tourism Data Warehouse';
    default:
      break;
  }
  return string.split('/').map(upperCaseFirst).join(' ');
}

function upperCaseFirst(input) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

function rsplit(input) {
  const split = input.split('/');
  return [split.slice(0, -1), split.slice(-1)[0]];
}

const camelize = (s) => {
  const string = s.replace(/-./g, (x) => x.toUpperCase()[1]);
  return string.charAt(0).toUpperCase() + string.slice(1);
};
