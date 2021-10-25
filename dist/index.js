"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createParametarizedAction = exports.createAction = exports.createActionBuffer = exports.createBuilder = exports.createMiddleware = void 0;
var Middleware_1 = require("./middleware/Middleware");
Object.defineProperty(exports, "createMiddleware", { enumerable: true, get: function () { return Middleware_1.createMiddleware; } });
var Builder_1 = require("./builder/Builder");
Object.defineProperty(exports, "createBuilder", { enumerable: true, get: function () { return Builder_1.createBuilder; } });
var ActionBuffer_1 = require("./actionBuffer/ActionBuffer");
Object.defineProperty(exports, "createActionBuffer", { enumerable: true, get: function () { return ActionBuffer_1.createActionBuffer; } });
var createAction_1 = require("./action/createAction");
Object.defineProperty(exports, "createAction", { enumerable: true, get: function () { return createAction_1.createAction; } });
Object.defineProperty(exports, "createParametarizedAction", { enumerable: true, get: function () { return createAction_1.createParametarizedAction; } });
const Factory = __importStar(require("./factory/factory"));
const R1IO = {
    createElement: Factory.createElement,
    Fragment: ({ children }) => Factory.createElement("functional", null, ...children),
};
exports.default = R1IO;
//# sourceMappingURL=index.js.map