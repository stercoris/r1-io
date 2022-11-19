import type {IAction} from '@Action/iAction';
import type {ContextBundle} from '@Middleware/IContextBundle';

type ActionResponse = 'ActionNotFound' | 'ActionExecuted' | 'PayloadNotFound';

export class ActionsBuffer<InternalContext extends {}> {
  constructor(private actions: IAction<InternalContext, any>[] = []) {}

  find(actionName: string): undefined | IAction<InternalContext, any> {
    return this.actions.find(a => a.actionName === actionName);
  }

  async findAndCall(
    payload: JSX.ActionPayload,
    {context, builderContext}: ContextBundle<InternalContext>
  ): Promise<ActionResponse> {
    if (!payload) return 'PayloadNotFound';

    const {actionName, params} = payload;

    const action = this.actions.find(a => a.actionName === actionName);
    if (!action) return 'ActionNotFound';

    if (action.type === 'ParameterizedAction') {
      await action.do(params, context, builderContext);
    } else {
      await action.do(context, builderContext);
    }

    return 'ActionExecuted';
  }

  async findAndCallBundle(
    actions: JSX.ActionPayload[],
    contextBundle: ContextBundle<InternalContext>
  ): Promise<void> {
    await Promise.all(actions.map(a => this.findAndCall(a, contextBundle)));
  }

  add(action: IAction<any, any>): void {
    this.actions.push(action);
  }

  isAlreadyExists(name: string): boolean {
    return !!this.actions.find(a => a.actionName === name);
  }

  getAll(): IAction<InternalContext, any>[] {
    return this.actions;
  }
}
