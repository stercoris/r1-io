export type FunctionalParser = (
  func: Function | string,
  props: Object,
  ...children: unknown[]
) => any;

export const parseFunctional: FunctionalParser = (func, props, ...children) => {
  const normChildren = children.length === 1 ? children[0] : children;

  const content =
    typeof func === 'function'
      ? func({children: normChildren, ...props})
      : children;

  const flattedContent = content instanceof Array ? content.flat() : [content];

  return {type: 'functional', content: flattedContent};
};
