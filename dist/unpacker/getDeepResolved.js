"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepResolveContent = void 0;
const promise_props_recursive_1 = __importDefault(require("promise-props-recursive"));
const deepResolveContent = async (objectWithPromiseChain) => (0, promise_props_recursive_1.default)(objectWithPromiseChain)[0];
exports.deepResolveContent = deepResolveContent;
//# sourceMappingURL=getDeepResolved.js.map