'use strict'

const Knex = require('knex')
const { Model } = require('objection')
const Config = require('../config')

const { host, user, password, name : database, port } = Config.database

const db = Knex({
    client : Config.database.engine,
    useNullAsDefault : true,
    connection : {
        host,
        port,
        user,
        password,
        database,
    },
})

Model.knex(db)
