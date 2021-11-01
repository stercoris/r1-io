export { createMiddleware } from "@Middleware/Middleware";
export { createBuilder } from "@Builder/Builder";
export { createActionBuffer } from "@ActionBuffer/ActionBuffer";
export { createAction, createParametarizedAction } from "@Action/createAction";

export {
  ParameterizedActionPayload,
  SimpleActionPayload,
} from "@Action/iAction";

export * from "@Types/global";

import * as Factory from "./factory/factory";

const R1IO = {
  createElement: Factory.createElement,
  Fragment: ({ children }: { children: Factory.R1Node[] }) =>
    Factory.createElement("functional", null, ...children),
};

export default R1IO;
