import { R1Node } from "@Factory/factory";

export type FunctionalParser = (
  func: Function | string,
  props: Object,
  ...children: R1Node[]
) => R1Node;

export const parseFunctional: FunctionalParser = (func, props, ...children) => {
  const content =
    func instanceof Function ? func({ children, ...props }) : children;

  const flattedContent = content instanceof Array ? content.flat() : [content];

  return { type: "functional", content: flattedContent };
};
