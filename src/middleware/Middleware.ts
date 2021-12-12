import {IRouter} from '@Router/IRouter';
import {IMiddleware} from '@Middleware/IMiddleware';
import {Actions} from '@Action/action/actions';
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
    actions: Actions,
    applyUserMiddleware: contextWorker,
    getCurrentMenu,
  });
