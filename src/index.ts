export { createMiddleware } from "@Middleware/Middleware";
export { createBuilder } from "@Builder/Builder";
export { createActionBuffer } from "@ActionBuffer/ActionBuffer";
export { createAction, createParametarizedAction } from "@Action/createAction";

import * as Factory from "./factory/factory";

export { FC } from "@Types/global";
const R1IO = {
  createElement: Factory.createElement,
  Fragment: ({ children }: { children: Factory.R1Node[] }) =>
    Factory.createElement("functional", null, ...children),
};

export default R1IO;
