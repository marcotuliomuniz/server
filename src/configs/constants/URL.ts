import isLocalEnv from "../../functions/isLocalEnv";
import {log} from 'console';

export const URL_WEB_SITE = "marcotuliomuniz.netlify.app"

export const URL_SERVER = '';

export const URL_MERCADO_PAGO = "https://api.mercadopago.com";

export const URL_REACT_CLIENT = !isLocalEnv()
    ? `http://${URL_WEB_SITE}`
    : 'http://localhost:3000';


export const URL_PAYPAL_BASE = !isLocalEnv()
    ? 'https://api-m.paypal.com'
    : 'https://api-m.sandbox.paypal.com';



log('2)', URL_REACT_CLIENT, URL_PAYPAL_BASE);