const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => ({
  output: {
    filename: "[chunkhash].js"
  },
  module: {
    rules: [{ test: /\.css/, use: [MiniCssExtractPlugin.loader, "css-loader"] }]
  },
  plugins: [new MiniCssExtractPlugin()]
});
