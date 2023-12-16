"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.kv = void 0;
const kv_1 = require("@vercel/kv");
const url = (_a = process.env.KV_REST_API_URL) !== null && _a !== void 0 ? _a : '';
const token = (_b = process.env.KV_REST_API_TOKEN) !== null && _b !== void 0 ? _b : '';
exports.kv = (0, kv_1.createClient)({
    url,
    token,
});
//# sourceMappingURL=vercelKv.js.map