import { isServiceRunning } from '@carnesen/bitcoin-service';
import { leaf } from '@carnesen/cli';
import { configFilePath } from './options';
import { DEFAULT_CONFIG_FILE_PATH } from '@carnesen/bitcoin-config';

export const status = leaf({
  commandName: 'status',
  options: { configFilePath },
  async action({ configFilePath }) {
    const running = await isServiceRunning(configFilePath || DEFAULT_CONFIG_FILE_PATH);
    return {
      running,
    };
  },
});
