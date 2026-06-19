import { Request, Response } from 'express';

const viptController = {
    async confirmation(req: Request, res: Response) {

       
        //@ts-ignore
        const vip = req.vip;
        return res.status(200).json({ vip });
    }
};

export default viptController;