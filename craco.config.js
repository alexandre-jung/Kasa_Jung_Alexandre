const { CracoAliasPlugin } = require("react-app-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        baseUrl: ".",
        tsconfig: "./tsconfig.paths.json",
      },
    },
  ],
};
