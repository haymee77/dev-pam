const env = {
    development: {
        mysql: {
            username: 'api_dev',
            password: 'clxhtm&5298',
            database: 'PAM_DEV'
        }
    },

    test: {
        mysql: {
            username: 'api_test',
            password: 'clxhtm&5298',
            database: 'PAM_TEST'
        }
    },

    production: {
        mysql: {
            username: 'api',
            password: 'clxhtm&5298',
            database: 'PAM'
        }
    }
}

const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = env[nodeEnv];