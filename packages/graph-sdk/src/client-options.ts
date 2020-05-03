import Network from './network';
import Resolver from './resolver';

export default interface ClientOptions {
  apiKey: string;
  endpoint: string;
  resolver: Resolver;
  network: Network;
}
