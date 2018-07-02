'use strict';

var path = require('path');
var should = require('chai').should();
var sinon = require('sinon');
var proxyquire = require('proxyquire');

describe('#defaultConfig', function() {
  var expectedExecPath = path.resolve(__dirname, '../../bin/bitcored');

  it('will return expected configuration', function() {
    var config = JSON.stringify({
      network: 'livenet',
      port: 3001,
      services: [
        'bitcored',
        'web'
      ],
      servicesConfig: {
        bitcored: {
          spawn: {
            datadir: process.env.HOME + '/.btxcore/data',
            exec: expectedExecPath
          }
        }
      }
    }, null, 2);
    var defaultConfig = proxyquire('../../lib/scaffold/default-config', {
      fs: {
        existsSync: sinon.stub().returns(false),
        writeFileSync: function(path, data) {
          path.should.equal(process.env.HOME + '/.btxcore/btxcore-node.json');
          data.should.equal(config);
        },
        readFileSync: function() {
          return config;
        }
      },
      mkdirp: {
        sync: sinon.stub()
      }
    });
    var home = process.env.HOME;
    var info = defaultConfig();
    info.path.should.equal(home + '/.btxcore');
    info.config.network.should.equal('livenet');
    info.config.port.should.equal(3001);
    info.config.services.should.deep.equal(['bitcored', 'web']);
    var bitcored = info.config.servicesConfig.bitcored;
    should.exist(bitcored);
    bitcored.spawn.datadir.should.equal(home + '/.btxcore/data');
    bitcored.spawn.exec.should.equal(expectedExecPath);
  });
  it('will include additional services', function() {
    var config = JSON.stringify({
      network: 'livenet',
      port: 3001,
      services: [
        'bitcored',
        'web',
        'insight-api',
        'insight-ui'
      ],
      servicesConfig: {
        bitcored: {
          spawn: {
            datadir: process.env.HOME + '/.btxcore/data',
            exec: expectedExecPath
          }
        }
      }
    }, null, 2);
    var defaultConfig = proxyquire('../../lib/scaffold/default-config', {
      fs: {
        existsSync: sinon.stub().returns(false),
        writeFileSync: function(path, data) {
          path.should.equal(process.env.HOME + '/.btxcore/btxcore-node.json');
          data.should.equal(config);
        },
        readFileSync: function() {
          return config;
        }
      },
      mkdirp: {
        sync: sinon.stub()
      }
    });
    var home = process.env.HOME;
    var info = defaultConfig({
      additionalServices: ['insight-api', 'insight-ui']
    });
    info.path.should.equal(home + '/.btxcore');
    info.config.network.should.equal('livenet');
    info.config.port.should.equal(3001);
    info.config.services.should.deep.equal([
      'bitcored',
      'web',
      'insight-api',
      'insight-ui'
    ]);
    var bitcored = info.config.servicesConfig.bitcored;
    should.exist(bitcored);
    bitcored.spawn.datadir.should.equal(home + '/.btxcore/data');
    bitcored.spawn.exec.should.equal(expectedExecPath);
  });
});
