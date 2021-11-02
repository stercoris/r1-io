import { SimpleAction } from "@Action/iAction";
import { Actions } from "./actions";

export interface SimpleActionPayload {
  name: string;
  type: "action";
}

export type SimpleActionPayloadCreateFunc = () => SimpleActionPayload;

type ActionCreator = <KeyboardBuilderContext>(
  name: string,
  action: SimpleAction<KeyboardBuilderContext>
) => SimpleActionPayloadCreateFunc;

export const createAction: ActionCreator = (name, action) => {
  if (Actions.isActionAlreadyExists(name))
    throw new Error(`Action with name "${name}" already exist`);

  Actions.addAction({ do: action, name });

  return () => ({ name, type: "action" });
};
