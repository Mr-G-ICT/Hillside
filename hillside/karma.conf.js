// karma.conf.ts
module.exports = (config) => {
  config.set({
    basePath: "../..",
    frameworks: ["jasmine"],
    plugins: [
      require("karma-jasmine"),
      require("karma-firefox-launcher"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    browsers: ["Chrome", "Firefox"],
  });
};
