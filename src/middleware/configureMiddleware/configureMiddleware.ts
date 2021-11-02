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

    const actionStatus = await findAndCallAction(context.messagePayload);

    if (actionStatus === "PayloadNotFound") {
      const { fallbackAction } = getCurrentMenu(builderContext);
      if (fallbackAction) findAndCallAction(fallbackAction);
    }

    return builderContext;
  };
