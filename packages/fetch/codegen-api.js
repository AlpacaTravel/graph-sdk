module.exports = {
  plugin(schema, documents, config) {
    return `
export function getClientSdk(options: ClientOptions) {
  const client = createClient(options);
  return getSdk(client);
}   
`;
  },
};
