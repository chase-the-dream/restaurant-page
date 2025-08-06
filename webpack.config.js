// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // Our Entry Point
  output: {
    filename: "main.js", // Name of output bundle
    path: path.resolve(__dirname, "dist"), // path to dist (autocreated)
    clean: true, // empty out dist when bundled for cleanliness
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/home.html",
    }),
  ],
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
    ],
  },
  {
    test: /\.html$/i,
    loader: "html-loader",
  },
};