import Axios from "axios";

const apiAddress = 'https://api.punkapi.com'

const instance = Axios.create({
  baseURL: apiAddress,
});

instance
  .interceptors
  .request
  .use(null, function (error) {
    return Promise.reject(error);
  });

export default instance