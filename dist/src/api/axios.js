"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosFn = void 0;
const axios_1 = __importDefault(require("axios"));
exports.axiosFn = axios_1.default.create({
    headers: {
        'Content-Type': 'application/json',
    },
});
