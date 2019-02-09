import { leaf } from '@carnesen/cli';
import { serviceOptions } from './service-options';
import { stopService } from '@carnesen/bitcoin-service';

const { conf } = serviceOptions;

export const stop = leaf({
  commandName: 'stop',
  options: { conf },
  async action({ conf }) {
    const { changed } = await stopService({
      conf: conf || undefined,
    });
    return changed ? 'Bitcoin server stopping' : 'Bitcoin server is not running';
  },
});
