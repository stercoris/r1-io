import { ContextBundle } from "../middleware/IContextBundle";
declare type ActionResponse = "ActionNotFound" | "ActionExecuted" | "PayloadNotFound";
export declare type FindAndCall<C> = (payload: JSX.ActionPayload, params: ContextBundle<C>) => Promise<ActionResponse>;
export interface IActionBuffer<C> {
    findAndCall: FindAndCall<C>;
}
export {};
//# sourceMappingURL=IActionBuffer.d.ts.map