const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Base URL do seu servidor
    baseUrl: "http://localhost:3000",

    // Define o shell que o Cypress vai usar (Windows)
    shell: "cmd.exe",

    // Setup de eventos do Node (pode ficar vazio se não precisar)
    setupNodeEvents(on, config) {
      // Aqui você pode adicionar eventos se quiser, por exemplo relatórios
    },
  },
});

