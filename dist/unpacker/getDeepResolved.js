"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepResolveContent = void 0;
require("promise-resolve-deep")(Promise);
const deepResolveContent = async (objectWithPromiseChain) => Promise.resolveDeep(objectWithPromiseChain);
exports.deepResolveContent = deepResolveContent;
