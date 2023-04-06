module.exports = {
  // mode: "development",
  mode: "production",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/src",
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", //loader名
          options: {
            //Babelの設定
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};