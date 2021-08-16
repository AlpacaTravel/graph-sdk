const glob = require('glob');
const fs = require('fs');
const path = require('path');

glob('*/*.graphql', (er, files) => {
  const structures = files.map(info).reduce((c, t) => {
    return Object.assign({}, c, { [t.dir]: (c[t.dir] || []).concat(t) });
  }, {});

  const title = `
# Alpaca GraphQL SDK Capabilities

> The Alpaca GraphQL SDK is driven by a number of GraphQL queries and mutations.

This location contains a number of example GraphQL documents to provide the
Alpaca JavaScript SDK with a basic set of capabilities.

## Documentation for GraphQL

We provide extensive GraphQL documentation, including covering topics,
tutorials and example applications in order to assist developers leverage the
GraphQL for their needs.

- [Read the Alpaca GraphQL Documentation](https://github.com/AlpacaTravel/graphql-docs)
  `;
  const footer = `
## Contributing

If you would like to share an operation that is useful to others, please send us
a pull request with the operation created in the appropriate sub-folder. If you
need to correct a comment, please update the operations directly, and not the 
generated markdown
  `;
  const sections = Object.keys(structures).map((key) => section(key, structures));

  // Table of contents
  const doc = [
    title,
    sections
      .filter((sect) => sect.parent[0] === null)
      .map((s) => {
        const sectionStart = `### ${s.title}\n\n${s.toc}`;
        const sectionMiddle = sections.reduce((c, sect) => {
          if (sect.parent[0] === s.key) {
            return c.concat(`\n\n#### ${sect.title}\n\n${sect.toc}`);
          }
          return c;
        }, []);
        const sectionDoc = [sectionStart, ...sectionMiddle].join('');
        return sectionDoc;
      })
      .join('\n\n'),
    footer,
  ].join('\n\n');
  fs.writeFileSync(path.resolve(__dirname, './README.md'), doc);

  sections.forEach((s) => {
    const sectionStart = `# ${s.title}\n\n${s.toc}\n\n`;
    const sectionMiddle = sections.reduce((c, sect) => {
      if (sect.parent[0] === s.key) {
        return c.concat(`## ${sect.title}\n\n${sect.toc}\n\n`);
      }
      return c;
    }, []);
    const sectionEnd = `[${s.parent[1]}](${s.parent[2]})`;
    const sectionDoc = [sectionStart, ...sectionMiddle, sectionEnd].join('');
    fs.writeFileSync(path.resolve(__dirname, `./${s.key}/README.md`), sectionDoc);
  });
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
  // Split out title
  const [dir, file] = rsplit(input);

  // Create a title
  const title = file.replace(/.graphql/, '').replace(/([a-z](?=[A-Z]))/g, '$1 ');

  // Target the comments at the start of the graphql query
  const contents = fs.readFileSync(path.resolve(__dirname, input), 'utf-8');
  const [pre] = contents.split(/(query|mutation) (\w+) ?{/);
  const comment = pre
    .replace(/#import.+\n/g, '')
    .replace(/\n/g, '')
    .replace(/# /g, ' ')
    .replace(/\..+/, '');

  const link = `/graphql/${input}`;

  return {
    dirParent: dir[0],
    dir: dir.join('/'),
    title,
    path: input,
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
