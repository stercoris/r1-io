export type AsyncParamsMiddlewareFunc = Function;

export type SuncParamsMiddlewareFunc = Function;

export type ParamsMiddleware<T> = (
  args: T
) => AsyncParamsMiddlewareFunc | SuncParamsMiddlewareFunc;
