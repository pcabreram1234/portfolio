const CopyWebpackPlugin = require("copy-webpack-plugin");
const dotEnv = require("dotenv-webpack");
const path = require("path");

module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets/static",
          to: "./assets/static",
        },
        {
          from: path.resolve(__dirname, "public", "_redirects"),
          force: true,
        },
        {
          from: "./src/util/*.json",
          to: "./assets/json/[name][ext]",
        },
      ],
    }),
    new dotEnv()
  );
  return config;
};
