import { testCliThrows } from '@carnesen/cli';
import { start } from '../start';

const cliThrows = testCliThrows(start);

describe(start.commandName, () => {
  it('gives usage if --help is given', async () => {
    expect(await cliThrows('--help')).toMatch('Usage');
  });
});
