const env = {
    development: {
        mysql: {
            username: 'api_dev',
            password: 'clxhtm&5298',
            database: 'PAM_DEV',
            host: '13.125.246.193',
            dialect: 'mysql'
        }
    },

    test: {
        mysql: {
            username: 'api_test',
            password: 'clxhtm&5298',
            database: 'PAM_TEST',
            host: '13.125.246.193',
            dialect: 'mysql'
        }
    },

    production: {
        mysql: {
            username: 'api',
            password: 'clxhtm&5298',
            database: 'PAM',
            host: '13.125.246.193',
            dialect: 'mysql'
        }
    }
}

const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = env[nodeEnv];