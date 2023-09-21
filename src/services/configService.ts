export const API_BASE_URL = 'https://3.26.178.176/api';
export const WS_BASE_URL = 'ws://3.26.178.176/ws';
let token = '';

export const getToken = () => token
export const setToken = (dataToken: string) => token = dataToken
