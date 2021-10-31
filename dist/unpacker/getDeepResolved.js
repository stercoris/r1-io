"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepResolveContent = void 0;
const promise_resolve_deep_1 = require("./promise-resolve-deep");
const deepResolveContent = (objectWithPromiseChain) => (0, promise_resolve_deep_1.resolveNestedPromises)(objectWithPromiseChain, undefined, -1);
exports.deepResolveContent = deepResolveContent;
//# sourceMappingURL=getDeepResolved.js.map