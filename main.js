'use strict'

/* eslint-disable global-require */

const Commander = require('commander')
const { version } = require('./package')

Commander.version(version)
    .option('--setup', 'Launch with setup flag')
    .parse(process.argv)

if (Commander.setup) {
    const Setup = require('./src/setup')
    Setup.start()
} else {
    const Server = require('./src/server')
    Server.start()
}
