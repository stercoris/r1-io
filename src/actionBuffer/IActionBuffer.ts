import { IAction } from "@Action/iAction";
import { ContextBundle } from "@Middleware/IContextBundle";

type ActionResponse = "ActionNotFound" | "ActionExecuted" | "PayloadNotFound";

export type FindAndCall<InternalContext> = (
  payload: JSX.ActionPayload,
  params: ContextBundle<InternalContext>
) => Promise<ActionResponse>;

export type AddAction = (action: IAction<any, any>) => void;

export type IsActionAlreadyExists = (name: string) => boolean;

export interface IActionBuffer<InternalContext> {
  findAndCall: FindAndCall<InternalContext>;
  addAction: AddAction;
  isActionAlreadyExists: IsActionAlreadyExists;
}
