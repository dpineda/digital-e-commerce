const  apikey = process.env.NEXT_PUBLIC_REST_API_KEY
const apiUrl = 'http://localhost:1337/api';
//const axiosClien

const requestHeaders: HeadersInit = new Headers();
requestHeaders.set('Content-Type', 'application/json');
requestHeaders.set('Authorization', 'Bearer ' + apikey);

const get = (url: string) => {
  return fetch(apiUrl + url, {
    method: 'GET',
    headers: requestHeaders
  });
}

const api = {
  get
}

export default api;