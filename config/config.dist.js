'use strict'

module.exports = {
    api : {
        /**
         * Port
         * 
         * This value represents the TCP port where the API will wait for incoming HTTP requests.
         * You can type whatever value you want according to your architecture (between 1024 and 65535).
         */
        port : 17811,
        /**
         * Prefix
         * 
         * The prefix identifies what will be the prefix in the URL directing to the API
         */
        prefix : '/api',
    },
}
