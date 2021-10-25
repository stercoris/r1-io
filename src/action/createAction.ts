import {
  ParameterizedActionPayload,
  IAction,
  ParameterizedAction,
  ParameterizedPayloadCreateFunc,
  SimpleAction,
  SimpleActionPayload,
} from "action/iAction";

export const actions: IAction<any, any>[] = [];

const checkIfActionAlreadyExist = (name: string) => {
  const isActionExists = actions.find((a) => a.name === name) !== undefined;
  return isActionExists;
};

export const createParametarizedAction = <KeyboardBuilderContext, T = {}>(
  name: string,
  action: ParameterizedAction<T, KeyboardBuilderContext>
): ParameterizedPayloadCreateFunc<T> => {
  if (checkIfActionAlreadyExist(name)) {
    throw new Error(
      `Simple or parameterized action with name "${name}" already exist`
    );
  }

  actions.push({ do: action, name });

  const setup = (params: T): ParameterizedActionPayload<T> => ({
    name,
    params,
    type: "parameterizedAction",
  });

  return setup;
};

export const createAction = <KeyboardBuilderContext>(
  name: string,
  action: SimpleAction<KeyboardBuilderContext>
): (() => SimpleActionPayload) => {
  if (checkIfActionAlreadyExist(name)) {
    throw new Error(
      `Simple or parameterized action with name "${name}" already exist`
    );
  }

  actions.push({ do: action, name });

  const setup = (): SimpleActionPayload => ({ name, type: "action" });

  return setup;
};
