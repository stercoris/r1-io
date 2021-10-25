export { createMiddleware } from "./middleware/Middleware";
export { createBuilder } from "./builder/Builder";
export { createActionBuffer } from "./actionBuffer/ActionBuffer";
export { createAction, createParametarizedAction } from "./action/createAction";
import * as Factory from "./factory/factory";
export { FC } from "./types/global";
declare const R1IO: {
    createElement: (name: Function | Factory.ComponentType, props: JSX.ButtonProps | null, ...children: string[] | Factory.R1Node[]) => Promise<Factory.R1Node | {
        type: Factory.ComponentType;
        content: any[];
    }>;
    Fragment: ({ children }: {
        children: Factory.R1Node[];
    }) => Promise<Factory.R1Node | {
        type: Factory.ComponentType;
        content: any[];
    }>;
};
export default R1IO;
//# sourceMappingURL=index.d.ts.map