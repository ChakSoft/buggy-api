'use strict'

module.exports = {
    properties : {
        username : {
            description : 'Administrator username',
            default : 'admin',
            required : true,
            type : 'string',
        },
        password : {
            description : 'Administrator password',
            hidden : true,
            replace : '•',
            type : 'string',
            required : true,
            conform : (value) => value.length > 6,
            message : 'Administrator password must be at least 6 characters long',
        },
    },
}
