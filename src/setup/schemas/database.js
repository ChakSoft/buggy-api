'use strict'

module.exports = {
    properties : {
        host : {
            description : 'Host',
            default : '127.0.0.1',
            required : true,
            type : 'string',
        },
        port : {
            description : 'Port',
            default : 3306,
            required : true,
            type : 'number',
            conform : (value) => value > 1024 && value < 65536,
            message : 'Port must be between 1025 and 65535',
        },
        user : {
            description : 'User',
            default : 'buggy',
            required : true,
            type : 'string',
        },
        password : {
            description : 'Password',
            required : true,
            type : 'string',
            hidden : true,
            replace : '•',
            message : 'Password is required',
        },
        name : {
            description : 'Name',
            default : 'buggy',
            required : true,
            type : 'string',
        },
    },
}
