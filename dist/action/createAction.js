"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAction = exports.createParametarizedAction = exports.actions = void 0;
exports.actions = [];
const checkIfActionAlreadyExist = (name) => {
    const isActionExists = exports.actions.find((a) => a.name === name) !== undefined;
    return isActionExists;
};
const createParametarizedAction = (name, action) => {
    if (checkIfActionAlreadyExist(name)) {
        throw new Error(`Simple or parameterized action with name "${name}" already exist`);
    }
    exports.actions.push({ do: action, name });
    const setup = (params) => ({
        name,
        params,
        type: "parameterizedAction",
    });
    return setup;
};
exports.createParametarizedAction = createParametarizedAction;
const createAction = (name, action) => {
    if (checkIfActionAlreadyExist(name)) {
        throw new Error(`Simple or parameterized action with name "${name}" already exist`);
    }
    exports.actions.push({ do: action, name });
    const setup = () => ({ name, type: "action" });
    return setup;
};
exports.createAction = createAction;
