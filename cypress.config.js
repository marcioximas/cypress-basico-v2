const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      // implement node event listeners here
      
    },
        

  },
  component:{
    "pluginsFile": false,
    "viewportHeight": 880,
    "viewportWidth": 1280,
  }
});
