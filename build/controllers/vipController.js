"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const viptController = {
    async confirmation(req, res) {
        //@ts-ignore
        const vip = req.vip;
        console.log('in', vip);
        return res.status(200).json({ vip });
    }
};
exports.default = viptController;
