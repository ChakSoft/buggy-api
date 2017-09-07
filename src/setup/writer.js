'use strict'

const Fs = require('fs')
const { promisify } = require('bluebird')

const writeFileAsync = promisify(Fs.writeFile)

module.exports = (setup) => {
    const configStr = `'use strict'

module.exports = {
    api : ${JSON.stringify(setup.api)},
    database : ${JSON.stringify(setup.database)}
}`

    return writeFileAsync('config/config.js', configStr)
}
