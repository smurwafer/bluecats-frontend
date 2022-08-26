const production = false;

const url = production ? 'https://flarium.herokuapp.com/' : 'http://localhost:2000/';

export const baseUrl = url + 'api/';
export const apiLessBaseUrl = url;