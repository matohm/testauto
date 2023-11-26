import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    "experimentalStudio" : true,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
