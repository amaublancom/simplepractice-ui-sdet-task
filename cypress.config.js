require('dotenv').config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    baseUrl: 'https://secure.simplepractice.com',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    video: false,
    screenshotOnRunFailure: true,
      setupNodeEvents(on, config) {
        config.env = {
          ...config.env,
          LOGIN_EMAIL: process.env.LOGIN_EMAIL,
          LOGIN_PASSWORD: process.env.LOGIN_PASSWORD,
        };
        return config;
      },
  },
});
