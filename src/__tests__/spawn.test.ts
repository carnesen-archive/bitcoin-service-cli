import { testCliThrows } from '@carnesen/cli';
import { spawn } from '../spawn';

const spawnCliThrows = testCliThrows(spawn);

describe(spawn.commandName, () => {
  it('gives usage if --help is given', async () => {
    expect(await spawnCliThrows('--help')).toMatch('Usage');
  });
});
