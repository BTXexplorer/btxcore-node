btxcore Node
============

A bitcore full node for building applications and services with Node.js. A node is extensible and can be configured to run additional services. At the minimum a node has an interface to [bitcore with additional indexing](https://github.com/BTXexplorer/bitcore/tree/0.15.0-btxcore) for more advanced address queries. Additional services can be enabled to make a node more useful such as exposing new APIs, running a block explorer and wallet service.

## Install

```bash
npm install -g btxcore-node
btxcore-node start
```

Note: For your convenience, we distribute bitcored binaries for x86_64 Linux and x86_64 Mac OS X. Upon npm install, the binaries for your platform will be downloaded. For more detailed installation instructions, or if you want to compile the project yourself, then please see the btxcore branch of [bitcore with additional indexing](https://github.com/BTXexplorer/bitcore/tree/0.15.0-btxcore).

## Prerequisites

- GNU/Linux x86_32/x86_64, or OSX 64bit *(for bitcored distributed binaries)*
- Node.js v0.10, v0.12 or v4
- ZeroMQ *(libzmq3-dev for Ubuntu/Debian or zeromq on OSX)*
- ~200GB of disk storage
- ~8GB of RAM

## Configuration

btxcore includes a Command Line Interface (CLI) for managing, configuring and interfacing with your btxcore Node.

```bash
btxcore-node create -d <bitcore-data-dir> mynode
cd mynode
btxcore-node install <service>
btxcore-node install https://github.com/yourname/helloworld
```

This will create a directory with configuration files for your node and install the necessary dependencies. For more information about (and developing) services, please see the [Service Documentation](docs/services.md).

## Add-on Services

There are several add-on services available to extend the functionality of btxcore:

- [Insight API](https://github.com/BTXexplorer/insight-api)
- [Insight UI](https://github.com/BTXexplorer/insight-ui)
- [btxcore Wallet Service](https://github.com/BTXexplorer/btxcore-wallet-service)

## Documentation

- [Upgrade Notes](docs/upgrade.md)
- [Services](docs/services.md)
  - [bitcored](docs/services/bitcored.md) - Interface to bitcore Core
  - [Web](docs/services/web.md) - Creates an express application over which services can expose their web/API content
- [Development Environment](docs/development.md) - Guide for setting up a development environment
- [Node](docs/node.md) - Details on the node constructor
- [Bus](docs/bus.md) - Overview of the event bus constructor
- [Release Process](docs/release.md) - Information about verifying a release and the release process.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/BTXexplorer/btxcore/blob/master/CONTRIBUTING.md) file.

## License

Code released under [the MIT license](https://github.com/BTXexplorer/btxcore-node/blob/master/LICENSE).
