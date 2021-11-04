module.exports = {
  apps: [
    {
      name: "todos-api",
      script: "./dist/start.js",
      instances: 2,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
