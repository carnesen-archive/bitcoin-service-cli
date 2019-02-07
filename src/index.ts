#!/usr/bin/env node

import { branch, cli } from '@carnesen/cli';
import { spawn } from './spawn';
const pkg = require('../package.json');

export const root = branch({
  commandName: 'bitcoind',
  description:
    'A command-line interface for managing the bitcoin server process `bitcoind`',
  subcommands: [spawn],
  version: pkg.version,
});

if (module === require.main) {
  cli(root)();
}
