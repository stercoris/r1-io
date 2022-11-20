import type {InternalActionType} from '@Action/ActionType';
import type {ContextBundle} from '@Middleware/IContextBundle';

type ActionResponse = 'ActionNotFound' | 'ActionExecuted' | 'PayloadNotFound';

export class ActionsBuffer<InternalContext extends {}> {
  constructor(
    private actions: InternalActionType<InternalContext, any>[] = []
  ) {}

  find(
    actionName: string
  ): undefined | InternalActionType<InternalContext, any> {
    return this.actions.find(a => a.actionName === actionName);
  }

  async findAndCall(
    payload: JSX.ActionPayload,
    contextBundle: ContextBundle<InternalContext>
  ): Promise<ActionResponse> {
    if (!payload) return 'PayloadNotFound';

    const {builderContext, context} = contextBundle;
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

  add(action: InternalActionType<any, any>): void {
    if (this.isAlreadyExists(action.actionName)) {
      throw new Error(`Action with name "${action.actionName}" already exist`);
    }
    this.actions.push(action);
  }

  isAlreadyExists(name: string): boolean {
    return this.actions.some(a => a.actionName === name);
  }

  getAll(): InternalActionType<InternalContext, any>[] {
    return this.actions;
  }
}
