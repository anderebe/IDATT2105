const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  fixturesFolder: "tests/e2e/fixtures",
  screenshotsFolder: "tests/e2e/screenshots",
  videosFolder: "tests/e2e/videos",

  e2e: {
    baseUrl: "http://localhost:8080", // Replace with your application's URL
  },

  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
