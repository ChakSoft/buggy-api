'use strict'

module.exports = {
    properties : {
        port : {
            description : 'Port to use',
            default : 17811,
            required : true,
            type : 'number',
            conform : (value) => value > 1024 && value < 65536,
            message : 'Port must be between 1025 and 65535',
        },
        prefix : {
            description : 'HTTP Prefix',
            default : '/api',
            required : true,
            type : 'string',
            conform : (value) => value.charAt(0) === '/',
        },
    },
}
