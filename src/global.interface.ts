export interface Routing {
  key: string;
  name: string;
  component: JSX.Element;
}

export type KeyRoute = Routing['key'];
