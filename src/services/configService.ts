export const API_BASE_URL = 'https://absence-backend.vercel.app/api';
export const WS_BASE_URL = 'ws://absence-backend.vercel.app//ws';
let token = '';

export const getToken = () => token
export const setToken = (dataToken: string) => token = dataToken
