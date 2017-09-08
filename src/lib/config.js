'use strict'

/* eslint-disable global-require */

const Dist = require('../../config/config.dist')
let Local = {}
try {
    Local = require('../../config/config')
} catch (err) {
    Local = {}
}

module.exports = Object.assign({}, Dist, Local)
