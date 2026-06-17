
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { error } from 'console';
import { Request, Response, NextFunction } from 'express';

import Users from "../models/Users";

export default async function isVip(req: Request, res: Response, next: NextFunction) {

    const auth = req.headers.authorization;
    const token = auth && auth.split(' ')[1];

    if (
        token === null ||
        token === undefined
    ) {
        return next();
    };
    
    try {
        jwt.verify(token, process.env.ACCESS_TOKEN as string);
    } catch (err) {
        return next();
    }
    

    const { uid }: any = jwt.decode(token);

    

    if (uid === null) {
        return next()
    };
    
    //@ts-ignore
    const user = await Users.findOne({
        attributes: ['vip'],
        where: { uid }
    }).catch(err => error(err));

    try {
        //@ts-ignore
        const vip = new Date(user?.vip);

        //@ts-ignore
        req.vip = (vip > new Date());

        next();
    } catch {
        next();
    }
}