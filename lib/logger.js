'use strict'

const Chalk = require('chalk')

module.exports = {
    info(str) {
        console.log(`[${Chalk.blue('info')}] ${str}`)
    },
    warn(str) {
        console.log(`[${Chalk.yellow('warn')}] ${str}`)
    },
    error(str) {
        console.log(`[${Chalk.red('error')}] ${str}`)
    },
    success(str) {
        console.log(`[${Chalk.green('success')}] ${str}`)
    },
    debug(str) {
        if (['test', 'development'].includes(process.env.NODE_ENV)) {
            console.log(`[${Chalk.gray('debug')}] ${str}`)
        }
    },
    test(str) {
        if (process.env.NODE_ENV === 'test') {
            console.log(`[${Chalk.white('test')}] ${str}`)
        }
    },
}
