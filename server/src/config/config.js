module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'geoeventfilter',
    user: process.env.DB_USER || 'geoeventfilter',
    password: process.env.DB_PASSWORD || 'geoeventfilter',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './geoeventfilter.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
