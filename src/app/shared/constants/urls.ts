const BASE_URL = 'http://localhost:3000';

export const PRODUCT_URL = BASE_URL + '/api/wedding';
export const PRODUCT_URL_BY_ID = PRODUCT_URL + '/'

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';
export const ADD_ITEM_URL = PRODUCT_URL + '/addItem';


export const ITEM_URL = BASE_URL + '/api/items';
export const ITEM_BY_ID_URL = ITEM_URL + '/';

export const ITEM_UPDATE_URL = ITEM_URL + '/updateProduct';


