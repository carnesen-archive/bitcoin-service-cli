import { spawnBitcoind } from '@carnesen/bitcoin-service';
import { leaf, option } from '@carnesen/cli';

export const spawn = leaf({
  commandName: 'spawn',
  options: {
    bitcoinHome: option({
      typeName: 'string',
      nullable: true,
      description: 'Path to a bitcoin software installation',
    }),
    configFilePath: option({
      typeName: 'string',
      nullable: true,
      description: 'Path to a bitcoin configuration file',
    }),
  },
  async action({ bitcoinHome, configFilePath }) {
    await spawnBitcoind({
      bitcoinHome: bitcoinHome === null ? undefined : bitcoinHome,
      configFilePath: configFilePath === null ? undefined : configFilePath,
    });
  },
});
