import {MessageContext} from 'vk-io';
import {
  AsyncParamsMiddlewareFunc,
  SuncParamsMiddlewareFunc,
} from './IParamsMiddleware';

export const asyncAttachToContext = (
  fieldName: string,
  field: AsyncParamsMiddlewareFunc,
  context: MessageContext
) => {
  const oldFunc = context[fieldName];
  context[fieldName] = async (...args: unknown[]) => {
    const newArgs = await field(...args);
    return await oldFunc.bind(context)(...newArgs);
  };
};

export const syncAttachToContext = (
  fieldName: string,
  field: SuncParamsMiddlewareFunc,
  context: MessageContext
) => {
  const oldFunc = context[fieldName];
  context[fieldName] = (...args: unknown[]) => {
    const newArgs = field(...args);
    return oldFunc.bind(context)(...newArgs);
  };
};
