"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isVip;
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const console_1 = require("console");
const Users_1 = __importDefault(require("../models/Users"));
async function isVip(req, res, next) {
    const auth = req.headers.authorization;
    const token = auth && auth.split(' ')[1];
    if (token === null ||
        token === undefined) {
        return next();
    }
    ;
    try {
        jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN);
    }
    catch (err) {
        return next();
    }
    const { uid } = jsonwebtoken_1.default.decode(token);
    if (uid === null) {
        return next();
    }
    ;
    //@ts-ignore
    const user = await Users_1.default.findOne({
        attributes: ['vip'],
        where: { uid }
    }).catch(err => (0, console_1.error)(err));
    try {
        //@ts-ignore
        const vip = new Date(user?.vip);
        //@ts-ignore
        req.vip = (vip > new Date());
        next();
    }
    catch {
        next();
    }
}
