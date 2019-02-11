import { leaf } from '@carnesen/cli';
import { restartService } from '@carnesen/bitcoin-service';
import { DEFAULT_CONFIG_FILE_PATH } from '@carnesen/bitcoin-config';
import { configFilePath, bitcoinHome } from './options';

export const restart = leaf({
  commandName: 'restart',
  options: { configFilePath, bitcoinHome },
  async action({ bitcoinHome, configFilePath }) {
    await restartService(
      configFilePath || DEFAULT_CONFIG_FILE_PATH,
      bitcoinHome || undefined,
    );
  },
});
