const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: "./src/index.js",
  output: { path: path.resolve(__dirname, "dist") },
  devServer: {
    static: './dist',
    port: 3000,
    },
    mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options:{
            presets: ["@babel/preset-env", "@babel/preset-react"],
          }
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.html",
    }),
  ],
};