import 'dotenv/config';

import { error } from 'console';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Users from '../models/Users';
import { Request, Response } from 'express';

/*
    * Models
*/
import isJson from '../functions/isJson';
import transporter from '../email/transporter';
import voucherOptions from '../email/options/voucherOptions';
import cpf from '../functions/cpf';

import { makePro } from './paymentsControllers';
import { URL_MERCADO_PAGO, URL_SERVER } from '../configs/constants/URL';

import { getCache, setCache } from '../configs/cache/redisConfig';
import PlanAndPrice from '../functions/PlanAndPrice';

const resourceX = (id: any) => `${URL_MERCADO_PAGO}/v1/payments/${id}`;

const api = axios.create({
    baseURL: URL_MERCADO_PAGO
});

api.interceptors.request.use(async (config) => {
    config.headers.Authorization = `Bearer ${process.env.PIX_AUTH_KEY}`;
    return config;
});


const pixController = {
    async fake (req:Request, res:Response) {
                //@ts-ignore
        const uid = req.uid;

        const { plan } = req.params;

        const PLAN = PlanAndPrice(plan);

        if (!PLAN) return res
            .status(400)
            .json({ message: 'payment pro error - not a valid plan' })
            .end();

        //@ts-ignore
        const user = await Users.findOne({
            where: { uid },
            attributes: ['email', 'name']
        })
            .catch((err: Error) => error(err));

        //@ts-ignore
        if (!(user && user.email && user.name)) return res
            .status(400)
            .json({ message: 'payment pro error - cant get payer customer data' })
            .end();

        //@ts-ignore
        const { email } = user;

        await makePro(
            res,
            uid,
            {
                email,
                id: 'id',
                date_approved: new Date(),
                amount: PLAN.price,
                name: 'User Name'
            }
        );
    }

};

export default pixController;