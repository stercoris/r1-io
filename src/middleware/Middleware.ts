import { actions } from "@Action/createAction";
import { IBuilder } from "@Builder/IBuilder";
import { applyCustomSend } from "@Middleware/contextExtensions/send/send";
import { ContextBundle } from "@Middleware/IContextBundle";
import { IMiddleware } from "@Middleware/IMiddleware";
import { createActionBuffer } from "@ActionBuffer/ActionBuffer";

export const createMiddleware = <
  JSXComponentProps,
  OutputContext extends JSXComponentProps = JSXComponentProps
>(
  getCurrentMenu: IBuilder<JSXComponentProps>,
  contextWorker: IMiddleware<OutputContext>
): IMiddleware<OutputContext> => {
  const actionsBuffer = createActionBuffer(...actions);
  const middleware: IMiddleware<OutputContext> = async (context, next) => {
    const builderContext = await contextWorker(context, next);
    const contextBundle: ContextBundle<OutputContext> = {
      context,
      builderContext,
    };

    const getCurrentMenuAndBuildKeyboard = (context: OutputContext) =>
      getCurrentMenu(context).build(context);

    applyCustomSend(getCurrentMenuAndBuildKeyboard, contextBundle);
    console.log(context.messagePayload);

    const actionStatus = await actionsBuffer.findAndCall(
      context.messagePayload,
      contextBundle
    );

    const { fallbackAction } = getCurrentMenu(builderContext);

    if (actionStatus === "PayloadNotFound") {
      if (fallbackAction)
        await actionsBuffer.findAndCall(fallbackAction, contextBundle);
    }

    return builderContext;
  };

  return middleware;
};
