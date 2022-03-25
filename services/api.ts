import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const PATH_API = 'api';

export async function getPopularProduct() {
  const url = `${ROOT_API}/${PATH_API}/product?view=popular`;

  return callAPI({ url, method: 'GET' });
}

export async function getAllProduct() {
  const url = `${ROOT_API}/${PATH_API}/product`;

  return callAPI({ url, method: 'GET' });
}