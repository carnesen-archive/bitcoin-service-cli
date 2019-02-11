import { testCliThrows, testCli } from '@carnesen/cli';
import { bitcoinService as subject } from '../index';
import { bitcoinHome, configFilePath } from '../dev';

const cli = testCli(subject);
const cliThrows = testCliThrows(subject);

describe(subject.commandName, () => {
  it('does the right thing', async () => {
    await cli(`stop --configFilePath ${configFilePath}`);
    expect(await cli(`status --configFilePath ${configFilePath}`)).toEqual({
      running: false,
    });
    await cli(`start --configFilePath ${configFilePath} --bitcoinHome ${bitcoinHome}`);
    expect(await cli(`status --configFilePath ${configFilePath}`)).toEqual({
      running: true,
    });
    await cli(`restart --configFilePath ${configFilePath} --bitcoinHome ${bitcoinHome}`);
    expect(await cli(`status --configFilePath ${configFilePath}`)).toEqual({
      running: true,
    });
    await cli(`stop --configFilePath ${configFilePath}`);
    expect(await cli(`status --configFilePath ${configFilePath}`)).toEqual({
      running: false,
    });
  });

  it('gives usage if --help is given', async () => {
    expect(await cliThrows('--help')).toMatch('Usage');
  });
});
