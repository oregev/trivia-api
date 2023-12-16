"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRedis = exports.client = void 0;
const redis_1 = require("redis");
const REDIS_CONFIG = {
    url: process.env.REDIS_URL,
    socket: {
        tls: process.env.NODE_ENV === 'prod', //false, //! Need to set to true in prod for vercel KV.
    },
};
exports.client = (0, redis_1.createClient)(REDIS_CONFIG);
const initRedis = () => __awaiter(void 0, void 0, void 0, function* () {
    exports.client.on('connect', () => console.log('redis is up and running on port: 6379'));
    exports.client.on('error', (error) => console.error(`Error : ${error}`));
    yield exports.client.connect();
});
exports.initRedis = initRedis;
//# sourceMappingURL=redis.js.map