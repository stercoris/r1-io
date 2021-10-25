export { createMiddleware } from "middleware/Middleware";
export { createBuilder } from "builder/Builder";
export { createActionBuffer } from "actionBuffer/ActionBuffer";
export { createAction, createParametarizedAction } from "action/createAction";

import * as Factory from "./factory/factory";

const R1IO = {
  createElement: Factory.createElement,
  Fragment: ({ children }: { children: Factory.R1Node[] }) =>
    Factory.createElement("functional", null, ...children),
};

export default R1IO;
