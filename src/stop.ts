import { leaf } from '@carnesen/cli';
import { configFilePath } from './options';
import { stopService } from '@carnesen/bitcoin-service';
import { DEFAULT_CONFIG_FILE_PATH } from '@carnesen/bitcoin-config';

export const stop = leaf({
  commandName: 'stop',
  options: { configFilePath },
  async action({ configFilePath }) {
    const { changed } = await stopService(configFilePath || DEFAULT_CONFIG_FILE_PATH);
    return changed ? 'Bitcoin server stopping' : 'Bitcoin server is not running';
  },
});
