const path = require("path");
const html_webpack_plugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    bundler: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "[name][ext]",
    filename: "[name][contenthash].js",
  },
  // devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3011,
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new html_webpack_plugin({
      title: "Weather App",
      chunks: ["bundler"],
      template: "src/template.html",
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(gif|jpg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  performance: {
    hints: false,
  },
};
