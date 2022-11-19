import type {NextMiddleware} from 'middleware-io';
import type {MessageContext} from 'vk-io';

export type IMiddleware<OutputContext> = (
  context: MessageContext,
  next: NextMiddleware
) => Promise<OutputContext | void>;
