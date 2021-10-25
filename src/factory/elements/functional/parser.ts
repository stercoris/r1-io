import { R1Node } from "factory/factory";

export type FunctionalParser = (
  func: Function | string,
  props: Object,
  ...children: R1Node[]
) => R1Node;

export const parseFunctional: FunctionalParser = (func, props, ...children) => {
  const content =
    func instanceof Function ? func({ children, ...props }) : children;

  return { type: "functional", content };
};
