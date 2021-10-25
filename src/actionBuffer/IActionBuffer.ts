import { ContextBundle } from "@Middleware/IContextBundle";

type ActionResponse = "ActionNotFound" | "ActionExecuted" | "PayloadNotFound";

export type FindAndCall<C> = (
  payload: JSX.ActionPayload,
  params: ContextBundle<C>
) => Promise<ActionResponse>;

export interface IActionBuffer<C> {
  findAndCall: FindAndCall<C>;
}
