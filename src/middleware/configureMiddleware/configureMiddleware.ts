import {ActionsBuffer} from '@ActionBuffer/actionsBuffer';
import {asyncAttachToContext} from '@Middleware/contextExtensions/paramsMiddleware';
import {customSend} from '@Middleware/contextExtensions/send/send';
import {IMiddleware} from '@Middleware/IMiddleware';
import {BaseRouter, IRouter} from '@Router/IRouter';

interface MiddlewareConfiguratorProps<
  JSXComponentProps,
  OutputContext extends JSXComponentProps = JSXComponentProps
> {
  getCurrentMenu: IRouter<JSXComponentProps>;
  applyUserMiddleware: IMiddleware<OutputContext>;
  actions: ActionsBuffer<any>;
}

type MiddlewareConfigurator = <
  JSXComponentProps,
  OutputContext extends JSXComponentProps = JSXComponentProps
>(
  p: MiddlewareConfiguratorProps<JSXComponentProps, OutputContext>
) => IMiddleware<OutputContext>;

export const createMiddlewareConfigurator: MiddlewareConfigurator =
  ({getCurrentMenu, applyUserMiddleware, actions}) =>
  async (context, next) => {
    const builderContext = await applyUserMiddleware(context, next);

    if (!builderContext) return;

    const findAndCallAction = (payload: JSX.ActionPayload) =>
      actions.findAndCall(payload, {builderContext, context});

    const findAndCallAllActions = (payload: JSX.ActionPayload[]) =>
      actions.findAndCallBundle(payload, {builderContext, context});

    const customSendBuilded = customSend({
      buildKeyboard: () => getCurrentMenu(builderContext).build(builderContext)
    });

    asyncAttachToContext('send', customSendBuilded, context);

    const currentMenu = getCurrentMenu(builderContext);
    const actionStatus = await findAndCallAction(context.messagePayload);
    const afterActionMenu = getCurrentMenu(builderContext);

    const callMenuTransitionActions = async (
      oldMenu: BaseRouter,
      newMenu: BaseRouter
    ): Promise<BaseRouter> => {
      if (oldMenu === newMenu) {
        return oldMenu;
      }
      if (currentMenu.onMenuExit?.length) {
        await findAndCallAllActions(currentMenu.onMenuExit);
      }
      if (afterActionMenu.onMenuEntering?.length) {
        await findAndCallAllActions(afterActionMenu.onMenuEntering);
      }
      return getCurrentMenu(builderContext);
    };

    const menuAfterNavigationActions = await callMenuTransitionActions(
      currentMenu,
      afterActionMenu
    );

    if (actionStatus === 'PayloadNotFound') {
      if (menuAfterNavigationActions.fallbackActions?.length) {
        await findAndCallAllActions(menuAfterNavigationActions.fallbackActions);
      }
    }

    return builderContext;
  };
