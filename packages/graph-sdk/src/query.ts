export default interface Query {
  query: string;
  variables: { [key: string]: any };
}
