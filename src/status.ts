import { isServiceRunning } from '@carnesen/bitcoin-service';
import { leaf } from '@carnesen/cli';
import { serviceOptions } from './service-options';

const { conf } = serviceOptions;

export const status = leaf({
  commandName: 'status',
  options: { conf },
  async action({ conf }) {
    const running = await isServiceRunning({ conf: conf || undefined });
    return {
      running,
    };
  },
});
