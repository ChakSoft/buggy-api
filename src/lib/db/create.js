'use strict'

const Knex = require('knex')

module.exports = (knex) => {
    knex.schema.createTableIfNotExists('bu_user', (table) => {
        table.increments('id').primary()
        table
            .string('username', 100)
            .unique()
            .notNullable()
        table.string('password', 1057).notNullable()
        table
            .string('email', 100)
            .unique()
            .notNullable()
        table.string('avatar', 255).nullable()
        table.boolean('enabled').defaultTo(false)
        table.timestamp('created_at').defaultTo(Knex.fn.now())
        table
            .bigInteger('permissions')
            .unsigned()
            .notNullable()
    })

    knex.schema.createTableIfNotExists('bu_right', (table) => {
        table
            .integer('id')
            .unsigned()
            .notNullable()
            .primary()
        table.string('name', 50).notNullable()
    })

    knex.schema.createTableIfNotExists('bu_project', (table) => {
        table.increments('id').primary()
        table
            .string('name', 60)
            .unique()
            .notNullable()
        table.timestamp('due_date').defaultTo(Knex.fn.now())
        table.string('image', 255).nullable()
        table.enum('status', [0, 1, 2])
        table
            .integer('creator_id')
            .unsigned()
            .notNullable()
        table
            .foreign('creator_id')
            .references('bu_user.id')
            .onDelete('SET NULL')
        table.string('description', 1000).nullable()

        table
            .integer('parent_id')
            .unsigned()
            .nullable()
        table
            .foreign('parent_id')
            .references('bu_project.id')
            .onDelete('SET NULL')
    })

    knex.schema.createTableIfNotExists('bu_project_member', (table) => {
        table
            .integer('user_id')
            .unsigned()
            .notNullable()
        table
            .integer('project_id')
            .unsigned()
            .notNullable()
        table
            .foreign('user_id')
            .references('bu_user.id')
            .onDelete('CASCADE')
        table
            .foreign('project_id')
            .references('bu_project.id')
            .onDelete('CASCADE')
        table.primary(['user_id', 'project_id'])

        table
            .bigInteger('permissions')
            .unsigned()
            .notNullable()
    })

    knex.schema.createTableIfNotExists('bu_project_version', (table) => {
        table.increments('id').primary()
        table
            .integer('project_id')
            .unsigned()
            .notNullable()
        table
            .foreign('project_id')
            .references('bu_project.id')
            .onDelete('CASCADE')
        table.string('name', 15).notNullable()
        table.timestamp('due_date').defaultTo(Knex.fn.now())
        table.string('description', 1000).nullable()
        table.enum('status', [0, 1, 2])
    })

    knex.schema.createTableIfNotExists('bu_issue', (table) => {
        table.increments('id').primary()
        table
            .integer('project_id')
            .unsigned()
            .notNullable()
        table
            .integer('project_version_id')
            .unsigned()
            .notNullable()
        table
            .foreign('project_id')
            .references('bu_project.id')
            .onDelete('CASCADE')
        table
            .foreign('project_version_id')
            .references('bu_project_version.id')
            .onDelete('SET NULL')

        table
            .integer('creator_id')
            .unsigned()
            .notNullable()
        table
            .foreign('creator_id')
            .references('bu_user.id')
            .onDelete('SET NULL')

        table
            .integer('assigned_to')
            .unsigned()
            .nullable()
        table
            .foreign('assigned_to')
            .references('bu_user.id')
            .onDelete('SET NULL')

        table.enum('priority', [0, 1, 2, 3, 4, 5])
        table.enum('impact', [0, 1, 2, 3, 4, 5])
        table.enum('status', [10, 20, 30, 40, 50, 60, 70, 80, 100])
    })
}
