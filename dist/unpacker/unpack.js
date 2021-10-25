"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unpackContent = void 0;
const deleteFunctionalComponents_1 = require("unpacker/deleteFunctionalComponents");
const getDeepResolved_1 = require("unpacker/getDeepResolved");
const unpackContent = async (menu) => (0, deleteFunctionalComponents_1.deleteFunctionalComponents)(await (0, getDeepResolved_1.deepResolveContent)(menu));
exports.unpackContent = unpackContent;
