#!/usr/bin/env node

import minimist from 'minimist';
import chalk from 'chalk';
import fs from 'fs-extra';

const args = minimist(process.argv.slice(2));
console.log(args);

if (args.version || args.V) {
  const pkg = fs.readJsonSync('./package.json');
  console.log();
  console.log(chalk.green(`@Matrix/cli version: ${pkg.version} 🎉🎉🎉`));
  process.exit(0);
}

console.log(`
Welcome to Matrix! 🎉

Usage: matrix <command> [options]

Options:
  -V, --version             output the version number
  -h, --help                output usage information

Commands:
  init                      generate a new project from a template

Run matrix <command> --help for detailed usage of given command.
`);
