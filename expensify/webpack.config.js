const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProduction = env === "production";
  console.log(`isProduction: `, isProduction);

  return {
    mode: "development",
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "/public"),
      filename: "bundle.js",
    },
    plugins: [new MiniCssExtractPlugin({ filename: "main-style.css" })],
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "/public"),
      historyApiFallback: true,
    },
  };
};

// devtool - source map option allows the console to map errors and log to the original code instead of the webpack generated code
