'use strict'

/* eslint-disable global-require */

const Dist = require('../../config.dist')
let Local = {}
try {
    Local = require('../../config')
} catch (err) {
    Local = {}
}

module.exports = Object.assign({}, Dist, Local)
