export const API_BASE_URL = 'http://3.27.88.233:5000/api';
export const WS_BASE_URL = 'ws://3.27.88.233:5000/ws';
let token = '';

export const getToken = () => token
export const setToken = (dataToken: string) => token = dataToken
