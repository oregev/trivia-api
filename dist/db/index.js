"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kv = exports.initRedis = exports.client = void 0;
var redis_1 = require("./redis");
Object.defineProperty(exports, "client", { enumerable: true, get: function () { return redis_1.client; } });
Object.defineProperty(exports, "initRedis", { enumerable: true, get: function () { return redis_1.initRedis; } });
var vercelKv_1 = require("./vercelKv");
Object.defineProperty(exports, "kv", { enumerable: true, get: function () { return vercelKv_1.kv; } });
//# sourceMappingURL=index.js.map