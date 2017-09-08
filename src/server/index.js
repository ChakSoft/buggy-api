'use strict'
/**
 * Buggy API v0.0.1
 * Licensed under GPL v3. See License file for further information.
 * 
 * Created by: Michael Chacaton <chako256@gmail.com>
 * Released on: 2017-10-31
 */

const Express = require('express')
const app = Express()

const Compression = require('compression')
const BodyParser = require('body-parser')
const CookieParser = require('cookie-parser')

const Logger = require('../lib/logger')
const { api } = require('../lib/config')

const start = () => {
    app.listen(api.port, () => {
        Logger.info(`Listening on port ${api.port}`)
    })
}

app
    .use(Compression())
    .use(BodyParser.json({ extended : true }))
    .use(CookieParser())

/**
 * Exports the app to allow tests with Chai and Mocha
 */
module.exports = {
    app,
    start,
}
