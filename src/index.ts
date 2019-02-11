#!/usr/bin/env node

import { branch, cli } from '@carnesen/cli';
import { status } from './status';
import { start } from './start';
import { restart } from './restart';
import { stop } from './stop';
const pkg = require('../package.json');

export const bitcoinService = branch({
  commandName: 'bitcoin-service',
  description: 'Manage the bitcoin service `bitcoind`',
  subcommands: [restart, start, stop, status],
  version: pkg.version,
});

if (module === require.main) {
  cli(bitcoinService)();
}
