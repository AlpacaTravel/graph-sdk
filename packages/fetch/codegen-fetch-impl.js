const fs = require("fs");
const path = require("path");

module.exports = {
  plugin(schema, documents, config) {
    const source = fs.readFileSync(
      path.resolve(__dirname, "./fetch-impl.ts"),
      "utf-8"
    );

    return source
      .split("\n")
      .filter((r) => /\/\/ exclude/.test(r) === false)
      .join("\n");
  },
};
