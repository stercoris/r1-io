import type {IRouter} from '@Router/IRouter';
import {ACTIONS} from '@Action/action/actions';
import {createMiddlewareConfigurator} from './configureMiddleware/configureMiddleware';
import type {NextMiddleware} from 'middleware-io';
import type {MessageContext} from 'vk-io';

export type Middleware<OutputContext> = (
  context: MessageContext,
  next: NextMiddleware
) => Promise<OutputContext | void>;

type MiddlewareCreator = <
  JSXComponentProps,
  OutputContext extends JSXComponentProps = JSXComponentProps
>(
  getCurrentMenu: IRouter<JSXComponentProps>,
  contextWorker: Middleware<OutputContext>
) => Middleware<OutputContext>;

export const createMiddleware: MiddlewareCreator = (
  getCurrentMenu,
  contextWorker
) =>
  createMiddlewareConfigurator({
    actions: ACTIONS,
    applyUserMiddleware: contextWorker,
    getCurrentMenu,
  });
