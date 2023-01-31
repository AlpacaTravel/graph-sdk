const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "umd/graph-sdk.min.js",
    globalObject: "this",
    library: {
      name: "alpacaGraphSdk",
      type: "umd",
    },
    sourceMapFilename: "[file].map[query]",
  },
  devtool: "source-map",
  mode: "production",
};
