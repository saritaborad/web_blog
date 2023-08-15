module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "blogdata"),
      user: env("DATABASE_USERNAME", "test12"),
      password: env("DATABASE_PASSWORD", "Test@123"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
