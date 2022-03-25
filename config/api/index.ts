import axios, { AxiosRequestConfig } from 'axios';

async function callAPI({ url, method, data }: AxiosRequestConfig) {
  const response = await axios({
    url,
    method,
    data,
  });

  if (response.data.error) {
    return response.data.message;
  }

  return response.data;
}

export default callAPI;
