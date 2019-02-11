# @carnesen/bitcoin-service-cli [![Build Status](https://travis-ci.com/carnesen/bitcoin-service-cli.svg?branch=master)](https://travis-ci.com/carnesen/bitcoin-service-cli)
A command-line interface for managing the bitcoin service `bitcoind`

## Install
```
npm install --global @carnesen/bitcoin-service-cli
```

Alternatively, if you don't want to install the package you can run it as a one-off command using `npx`:
```
$ npx @carnesen/bitcoin-service-cli
```

## Usage
```
$ bitcoin-service
Usage: bitcoin-service <subcommand> <options>

   Manage the bitcoin service `bitcoind`

Subcommands:

   restart, start, stop, status
```
Use the `--help` flag to get usage for a command:
```
$ bitcoin-service start --help
Usage: bitcoin-service start <options>

Options:

   [--configFilePath <str>] : Absolute path to a configuration file
   [--bitcoinHome <str>] : Path to a bitcoin software installation

```
The options `bitcoinHome` and `configFilePath` are described in more detail in [`@carnesen/bitcoin-service`](https://github.com/carnesen/bitcoin-service#readme).

```
$ bitcoin-service start --bitcoinHome /usr/local/bitcoin-0.17.0
Bitcoin server starting
```

## Related
- [@carnesen/bitcoin-service](https://github.com/carnesen/bitcoin-service): A Node.js library for managing the bitcoin service `bitcoind`

- [@carnesen/cli](https://github.com/carnesen/cli): A Node.js library for building command-line interfaces

## License

MIT © [Chris Arnesen](https://www.carnesen.com)
