module.exports = {
  apps: [
    {
      name: "u5-todoapi",
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
