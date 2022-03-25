import axios, { AxiosRequestConfig } from 'axios';

async function callAPI({ url, method, data }: AxiosRequestConfig) {
  const response = await axios({
    url,
    method,
    data,
  }).catch((err) => err.response.message);

  if (response.data.message.error) {
    return response.data.message;
  }
  return response.data.data;
}

export default callAPI;
