import { Request, Response } from 'express';
declare const viptController: {
    confirmation(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
};
export default viptController;
