module.exports = {
  routes: [
    {
      method: "POST",
      path: "/api/api/email",
      handler: "email.send",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
