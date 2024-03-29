const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const sdkRoot = path.resolve(__dirname, '..');

// Execute shell command, piping the stdout/stderr to the screen
const exec = (command, { cwd }) => {
  console.log(`$ cd ./${path.relative(sdkRoot, cwd)}`);
  console.log('$', command);
  const subprocess = spawn(command, [], {
    cwd,
    stdio: 'inherit',
    shell: true,
  });
  return new Promise((resolve, reject) => {
    subprocess.on('close', (code) => {
      if (code === 0) {
        resolve(code);
      } else {
        reject(code);
      }
    });
  });
};

// Returns a list of all the packages with name and project root
const findPackages = () => {
  const packagesHome = path.resolve(sdkRoot, 'packages');
  return fs
    .readdirSync(packagesHome)
    .map((packageName) => {
      const packageRootDir = path.resolve(packagesHome, packageName);
      return { packageRootDir, packageName };
    })
    .filter(({ packageRootDir, packageName }) => {
      return !/^sdk$/.test(packageName) && fs.lstatSync(packageRootDir).isDirectory();
    });
};

const run = async (command, root = true) => {
  let failed = false;

  if (root) {
    try {
      console.log('Starting', sdkRoot);
      await exec(command, { cwd: sdkRoot });
      console.log('done.');
    } catch (code) {
      failed = true;
      console.error(code);
    }
  }

  for (let package of findPackages()) {
    const { packageName, packageRootDir } = package;
    try {
      console.log('Starting', packageName);
      await exec(command, { cwd: packageRootDir });
      console.log('done.');
    } catch (code) {
      failed = true;
      console.error(code);
    }
  }

  return failed;
};

module.exports = {
  exec,
  findPackages,
  run,
};
