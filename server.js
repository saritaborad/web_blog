module.exports = ({ env }) => ({
 url: ("PUBLIC_URL", "http://piks.in/"),
 host: env("HOST", "127.0.0.1"),
 port: env.int("PORT", 1337),
 app: {
  keys: env.array("APP_KEYS"),
 },
 webhooks: {
  populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
 },
});
