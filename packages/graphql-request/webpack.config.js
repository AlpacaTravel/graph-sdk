const path = require("path");

module.exports = {
  entry: "./dist/cjs/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "umd/graph-sdk.min.js",
    globalObject: "this",
    library: {
      name: "alpacaGraphSdk",
      type: "umd",
    },
  },
  mode: "production",
};
