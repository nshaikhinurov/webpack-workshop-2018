const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = (
  { mode, presets } = {
    mode: "production",
    presets: []
  }
) =>
  webpackMerge(
    {
      mode,
      output: {
        filename: "bundle.js"
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
    },
    modeConfig(mode)
  );
