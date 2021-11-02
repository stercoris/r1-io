import { IRouter } from "@Router/IRouter";
import { IMiddleware } from "@Middleware/IMiddleware";
import { createActionBuffer } from "@ActionBuffer/ActionBuffer";
import { createMiddlewareConfigurator } from "./configureMiddleware/configureMiddleware";
import { Actions } from "@Action/actions";

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
) => {
  return createMiddlewareConfigurator({
    actions: Actions,
    applyUserMiddleware: contextWorker,
    getCurrentMenu: getCurrentMenu,
  });
};
