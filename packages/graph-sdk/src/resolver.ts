export default interface Resolver {
  resolve(key: string): Promise<any>;
}
