// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/rbfull.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './database/seeds/dev'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'user',
      user: 'cmoore',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
