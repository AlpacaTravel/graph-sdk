const { isObjectType } = require("graphql");

// Builds a type policies output containing the relay style pagination
// configuration to make InMemoryCache more capable of dealing with pagination

module.exports = {
  plugin(schema, documents, config) {
    const typesMap = schema.getTypeMap();

    const typePolicies = {};

    Object.keys(typesMap).forEach((type) => {
      const obj = typesMap[type];
      if (isObjectType(obj)) {
        const fields = obj.getFields();
        Object.keys(fields).forEach((fieldKey) => {
          const field = fields[fieldKey];

          if (
            field.type.ofType != null &&
            /connection/i.test(field.type.ofType.name)
          ) {
            typePolicies[type] = typePolicies[type] || { fields: {} };
            typePolicies[type].fields[field.name] = field.args
              .filter((arg) => ["first", "after"].indexOf(arg.name) == -1)
              .map((arg) => arg.name);
          }
        });
      }
    });

    return `
import { relayStylePagination } from "@apollo/client/utilities";

export const typePolicies: StrictTypedTypePolicies = {
  ${Object.keys(typePolicies).map(
    (type) => `${type}: {
    fields: {
      ${Object.keys(typePolicies[type].fields).map(
        (field) =>
          `${field}: relayStylePagination(${JSON.stringify(
            typePolicies[type].fields[field].concat(["@connection", ["key"]])
          )})`
      )}
    }
  }`
  )}
}
`;
  },
};
