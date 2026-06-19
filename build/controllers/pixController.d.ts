import 'dotenv/config';
import { Request, Response } from 'express';
declare const pixController: {
    fake(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
};
export default pixController;
