export const API_BASE_URL = 'https://13.238.218.35:5000/api';
export const WS_BASE_URL = 'ws://13.238.218.35:5000/ws';
let token = '';

export const getToken = () => token
export const setToken = (dataToken: string) => token = dataToken
