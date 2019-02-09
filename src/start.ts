import { leaf } from '@carnesen/cli';
import { serviceOptions } from './service-options';
import { startService } from '@carnesen/bitcoin-service';

export const start = leaf({
  commandName: 'start',
  options: { ...serviceOptions },
  async action({ bitcoinHome, conf }) {
    const { changed } = await startService({
      bitcoinHome: bitcoinHome || undefined,
      conf: conf || undefined,
    });
    return changed ? undefined : 'Bitcoin server is running';
    // ^^ bitcoind outputs "Bitcoin server starting"
  },
});
