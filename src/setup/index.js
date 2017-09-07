'use strict'

const Prompt = require('prompt')
const Colors = require('colors/safe')
const Logger = require('../lib/logger')
const { promisify } = require('bluebird')

const { Database, Api, Administrator } = require('./schemas')

const Setup = {
    database : {},
    api : {},
    administrator : {},
}

const writeConfig = require('./writer')

Logger.raw('..:: Buggy API Setup ::..', 'green')

Prompt.message = ''
Prompt.delimiter = Colors.blue(' >')
Prompt.start()

const getAsync = promisify(Prompt.get)

Logger.nl()

async function start() {
    try {
        // 1. Database configuration
        Logger.raw('1. Database configuration', 'cyan')
        Setup.database = await getAsync(Database)
        //TODO: Call the database wrapper to create the structure with the inner script passing the Setup.database properties.
        Logger.nl()
        // 2. API Configuration
        Logger.raw('2. API Configuration', 'cyan')
        Setup.api = await getAsync(Api)
        Logger.nl()
        // 3. Administrator
        Logger.raw('3. Administrator', 'cyan')
        Setup.administrator = await getAsync(Administrator)

        //TODO: Register the administrator in the newly created database

        await writeConfig(Setup)
        Logger.raw('The Buggy API is ready. You can run `npm start` or `yarn start`.', 'green')
        Logger.raw('Thank you !', 'blue')
    } catch (err) {
        Logger.error(`Interrupted : ${err.message}`)
    }
}

module.exports = { start }
