const {
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfePagamentos",
  exposes: {
    "./PagamentosModule": "./src/app/pagamentos/pagamentos.module.ts",
  },

  remotes: {
    mfeExtrato: "mfeExtrato@http://localhost:4201/remoteEntry.js",
  },
});
