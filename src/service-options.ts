import { option } from '@carnesen/cli';

export const serviceOptions = {
  bitcoinHome: option({
    typeName: 'string',
    nullable: true,
    description: 'Path to a bitcoin software installation',
  }),
  conf: option({
    typeName: 'string',
    nullable: true,
    description: 'Absolute or datadir-relative path to a config file',
  }),
};
