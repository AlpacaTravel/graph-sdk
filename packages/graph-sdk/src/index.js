import Container from './container';
import DefaultClient from './client';

const container = new Container();

export class Client extends DefaultClient {
  constructor(...args) {
    super(...args);
    this.setParent(container);
  }
}

export default container;
