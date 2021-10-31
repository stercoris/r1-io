"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepResolveContent = void 0;
const promise_props_recursive_1 = require("promise-props-recursive");
const deepResolveContent = async (objectWithPromiseChain) => (0, promise_props_recursive_1.promisePropsRecursive)(objectWithPromiseChain)[0];
exports.deepResolveContent = deepResolveContent;
//# sourceMappingURL=getDeepResolved.js.map