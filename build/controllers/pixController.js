"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const console_1 = require("console");
const axios_1 = __importDefault(require("axios"));
const Users_1 = __importDefault(require("../models/Users"));
const paymentsControllers_1 = require("./paymentsControllers");
const URL_1 = require("../configs/constants/URL");
const PlanAndPrice_1 = __importDefault(require("../functions/PlanAndPrice"));
const resourceX = (id) => `${URL_1.URL_MERCADO_PAGO}/v1/payments/${id}`;
const api = axios_1.default.create({
    baseURL: URL_1.URL_MERCADO_PAGO
});
api.interceptors.request.use(async (config) => {
    config.headers.Authorization = `Bearer ${process.env.PIX_AUTH_KEY}`;
    return config;
});
const pixController = {
    async fake(req, res) {
        //@ts-ignore
        const uid = req.uid;
        const { plan } = req.params;
        const PLAN = (0, PlanAndPrice_1.default)(plan);
        if (!PLAN)
            return res
                .status(400)
                .json({ message: 'payment pro error - not a valid plan' })
                .end();
        //@ts-ignore
        const user = await Users_1.default.findOne({
            where: { uid },
            attributes: ['email', 'name']
        })
            .catch((err) => (0, console_1.error)(err));
        //@ts-ignore
        if (!(user && user.email && user.name))
            return res
                .status(400)
                .json({ message: 'payment pro error - cant get payer customer data' })
                .end();
        //@ts-ignore
        const { email } = user;
        await (0, paymentsControllers_1.makePro)(res, uid, {
            email,
            id: 'id',
            date_approved: new Date(),
            amount: PLAN.price,
            name: 'User Name'
        });
    }
};
exports.default = pixController;
