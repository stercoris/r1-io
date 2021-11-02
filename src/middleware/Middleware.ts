import { actions } from "@Action/createAction";
import { IRouter } from "@Router/IRouter";
import { IMiddleware } from "@Middleware/IMiddleware";
import { createActionBuffer } from "@ActionBuffer/ActionBuffer";
import { createMiddlewareConfigurator } from "./configureMiddleware/configureMiddleware";

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
  const actionsBuffer = createActionBuffer(...actions);

  return createMiddlewareConfigurator({
    actions: actionsBuffer,
    applyUserMiddleware: contextWorker,
    getCurrentMenu: getCurrentMenu,
  });
};
