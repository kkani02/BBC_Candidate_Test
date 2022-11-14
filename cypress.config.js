const { defineConfig } = require('cypress');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const createESbuildPlugin=require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
    const bundler = createBundler({
      plugins:[createESbuildPlugin(config)],
    });
    on("file:preprocessor", bundler);
    await addCucumberPreprocessorPlugin(on,config);
    return config;  
    },
    specPattern:"cypress/e2e/features/*.feature",
    chromeWebSecurity:false,
  },
});