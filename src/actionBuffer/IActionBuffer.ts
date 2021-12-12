import {IAction} from '@Action/iAction';
import {ContextBundle} from '@Middleware/IContextBundle';

type ActionResponse = 'ActionNotFound' | 'ActionExecuted' | 'PayloadNotFound';

export type FindAndCall<InternalContext> = (
  payload: JSX.ActionPayload,
  params: ContextBundle<InternalContext>
) => Promise<ActionResponse>;

export type Find<InternalContext> = (
  actionName: string
) => undefined | IAction<InternalContext, any>;

export type AddAction = (action: IAction<any, any>) => void;

export type IsActionAlreadyExists = (name: string) => boolean;

export type GetAllAction<InternalContext> = () => IAction<
  InternalContext,
  any
>[];

export interface IActionBuffer<InternalContext> {
  findAndCall: FindAndCall<InternalContext>;
  find: Find<InternalContext>;
  add: AddAction;
  isAlreadyExists: IsActionAlreadyExists;
  getAll: GetAllAction<InternalContext>;
}
