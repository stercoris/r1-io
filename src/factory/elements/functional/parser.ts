export type FunctionalParser = (
  func: Function | string,
  props: Object,
  ...children: unknown[]
) => any;

export const parseFunctional: FunctionalParser = (func, props, ...children) => {
  const normChildren =
    typeof children[0] === 'string' ? children.join('') : children;

  const content =
    func instanceof Function
      ? func({children: normChildren, ...props})
      : children;

  const flattedContent = content instanceof Array ? content.flat() : [content];

  return {type: 'functional', content: flattedContent};
};
