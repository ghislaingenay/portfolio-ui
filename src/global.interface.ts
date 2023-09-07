import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface Routing {
  key: string;
  name: string;
  component: JSX.Element;
  mockUpImg?: string;
}

export type KeyRoute = Routing['key'];

type BaseHTMLProps<T extends HTMLElement> = DetailedHTMLProps<
  HTMLAttributes<T>,
  T
>;

export type ButtonProps = BaseHTMLProps<HTMLButtonElement>;
export type DivProps = BaseHTMLProps<HTMLDivElement>;
