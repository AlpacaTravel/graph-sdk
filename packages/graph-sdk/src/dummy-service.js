export default class DummyService {
  constructor() {
    this.setContainer = this.setContainer.bind(this);
  }

  setContainer(container) {
    this.container = container;
  }
}
