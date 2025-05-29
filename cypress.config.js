const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Você pode adicionar eventos aqui se quiser
    },
    baseUrl: "http://localhost:3000/",
    shell: 'cmd.exe'  // <- Esta é a linha importante
  },
});

