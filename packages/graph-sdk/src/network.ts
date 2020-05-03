import Query from './query';
import Container from './container';

export default interface Network {
  query(options: Query): Promise<any[]>;
  setContainer(container: Container): void;
}
