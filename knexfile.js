module.exports = {

  development: {
    client: "mysql",
    connection: {
      database: "todo_app",
      user: "root",
      password: "root",
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  staging: {
    client: "mysql",
    connection: {
      database: "todo_app",
      user: "root",
      password: "root",
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client: "mysql",
    connection: {
      database: "todo_app",
      user: "root",
      password: "root",
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};