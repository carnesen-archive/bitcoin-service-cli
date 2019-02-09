#!/usr/bin/env node

import { branch, cli } from '@carnesen/cli';
import { status } from './status';
import { start } from './start';
import { stop } from './stop';
const pkg = require('../package.json');

export const root = branch({
  commandName: 'bitcoind',
  description:
    'A command-line interface for managing the bitcoin server process `bitcoind`',
  subcommands: [start, stop, status],
  version: pkg.version,
});

if (module === require.main) {
  cli(root)();
}
