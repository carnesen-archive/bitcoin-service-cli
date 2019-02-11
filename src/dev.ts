#!/usr/bin/env node
import { installSoftware, getBitcoinHome } from '@carnesen/bitcoin-software';
import { runAndExit } from '@carnesen/run-and-exit';
import { resolve, join } from 'path';
import { writeConfigFile } from '@carnesen/bitcoin-config';

export const datadir = resolve(__dirname, '..', 'tmp');
export const target = {
  datadir,
};
export const bitcoinHome = getBitcoinHome(target);
export const configFilePath = join(datadir, 'bitcoin.conf');

if (module === require.main) {
  runAndExit(async () => {
    writeConfigFile(configFilePath, {
      regtest: true,
      sections: {
        regtest: {
          port: 54932,
          rpcport: 29302,
        },
      },
    });
    await installSoftware(target);
    return `Wrote config file and installed software to ${datadir}`;
  });
}
