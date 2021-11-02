import { IActionBuffer } from "@ActionBuffer/IActionBuffer";
import { asyncAttachToContext } from "@Middleware/contextExtensions/paramsMiddleware";
import { customSend } from "@Middleware/contextExtensions/send/send";
import { IMiddleware } from "@Middleware/IMiddleware";
import { IRouter } from "@Router/IRouter";

interface MiddlewareConfiguratorProps<
  JSXComponentProps,
  OutputContext extends JSXComponentProps = JSXComponentProps
> {
  getCurrentMenu: IRouter<JSXComponentProps>;
  applyUserMiddleware: IMiddleware<OutputContext>;
  actions: IActionBuffer<any>;
}

type MiddlewareConfigurator = <
  JSXComponentProps,
  OutputContext extends JSXComponentProps = JSXComponentProps
>(
  p: MiddlewareConfiguratorProps<JSXComponentProps, OutputContext>
) => IMiddleware<OutputContext>;

export const createMiddlewareConfigurator: MiddlewareConfigurator =
  ({ getCurrentMenu, applyUserMiddleware, actions }) =>
  async (context, next) => {
    const builderContext = await applyUserMiddleware(context, next);

    const findAndCallAction = (payload: JSX.ActionPayload) =>
      actions.findAndCall(payload, { builderContext, context });

    if (!builderContext) return;

    const getCurrentMenuAndBuildKeyboard = () =>
      getCurrentMenu(builderContext).build(builderContext);

    const customSendBuilded = customSend({
      buildKeyboard: getCurrentMenuAndBuildKeyboard,
    });

    asyncAttachToContext("send", customSendBuilded, context);

    const beforeMenu = getCurrentMenu(builderContext);

    const actionStatus = await findAndCallAction(context.messagePayload);

    const afterMenu = getCurrentMenu(builderContext);

    if (beforeMenu !== afterMenu) {
      if (beforeMenu.onMenuExit?.length)
        await Promise.all(beforeMenu.onMenuExit.map(findAndCallAction));

      if (afterMenu.onMenuEntering?.length)
        await Promise.all(afterMenu.onMenuEntering.map(findAndCallAction));
    }

    if (actionStatus === "PayloadNotFound") {
      const { fallbackActions } = getCurrentMenu(builderContext);
      if (fallbackActions?.length)
        await Promise.all(fallbackActions.map(findAndCallAction));
    }

    return builderContext;
  };
