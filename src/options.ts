import { option } from '@carnesen/cli';
import { isAbsolute } from 'path';

export const configFilePath = option({
  typeName: 'string',
  nullable: true,
  description: 'Absolute path to a configuration file',
  validate(value) {
    if (!value) {
      return;
    }
    return isAbsolute(value) ? '' : 'Path must be absolute';
  },
});

export const bitcoinHome = option({
  typeName: 'string',
  nullable: true,
  description: 'Path to a bitcoin software installation',
});
