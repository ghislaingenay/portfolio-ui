export interface Routing {
  key: string;
  name: string;
  component: JSX.Element;
  mockUpImg?: string;
}

export type KeyRoute = Routing['key'];
