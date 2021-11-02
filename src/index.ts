export { createActionBuffer } from "@ActionBuffer/ActionBuffer";
export { createMiddleware } from "@Middleware/Middleware";
export { createRouter } from "@Router/Router";
export * from "@Action/index";

export * from "@Types/global";

import * as Factory from "./factory/factory";

const R1IO = {
  createElement: Factory.createElement,
  Fragment: ({ children }: { children: Factory.R1Node[] }) =>
    Factory.createElement("functional", null, ...children),
};

export default R1IO;
