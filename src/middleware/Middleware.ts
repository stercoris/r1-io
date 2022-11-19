import type {IRouter} from '@Router/IRouter';
import type {IMiddleware} from '@Middleware/IMiddleware';
import {ACTIONS} from '@Action/action/actions';
import {createMiddlewareConfigurator} from './configureMiddleware/configureMiddleware';

type MiddlewareCreator = <
  JSXComponentProps,
  OutputContext extends JSXComponentProps = JSXComponentProps
>(
  getCurrentMenu: IRouter<JSXComponentProps>,
  contextWorker: IMiddleware<OutputContext>
) => IMiddleware<OutputContext>;

export const createMiddleware: MiddlewareCreator = (
  getCurrentMenu,
  contextWorker
) =>
  createMiddlewareConfigurator({
    actions: ACTIONS,
    applyUserMiddleware: contextWorker,
    getCurrentMenu,
  });
