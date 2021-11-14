// eslint-disable-next-line valid-jsdoc
/**
 * if someone will pass chilren or label like this:
 * @example```
 * const MyComponent = R1IO.FC = ({children}) =>
 *  <button>{children}</button>
 * ```
 * or
 * @example```
 * const MyComponent = R1IO.FC = ({children}) =>
 *  <button label={children}/>
 * ```
 * there will [ [{chilren}] ] state of label in button
 * so we need to flat it and take first element
 */
export const getFlatChilren = (children: string | string[]): string =>
  children instanceof Array ? children.flat()[0] : children;
