import { IAction, ParameterizedAction, ParameterizedPayloadCreateFunc, SimpleAction, SimpleActionPayload } from "action/iAction";
export declare const actions: IAction<any, any>[];
export declare const createParametarizedAction: <KeyboardBuilderContext, T = {}>(name: string, action: ParameterizedAction<T, KeyboardBuilderContext>) => ParameterizedPayloadCreateFunc<T>;
export declare const createAction: <KeyboardBuilderContext>(name: string, action: SimpleAction<KeyboardBuilderContext>) => (() => SimpleActionPayload);
//# sourceMappingURL=createAction.d.ts.map