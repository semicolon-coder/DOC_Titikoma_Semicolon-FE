import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const PATH_API = 'api';

export async function getPopularProduct() {
  const url = `${ROOT_API}/${PATH_API}/product?view=popular`;

  return callAPI({ url, method: 'GET' });
}

export async function getPromoByCode(code: string) {
  const url = `${ROOT_API}/${PATH_API}/promo/code/${code}`;

  return callAPI({ url, method: 'GET' });
}

export async function addOrder(data: any) {
  const url = `${ROOT_API}/${PATH_API}/order/add`;

  return callAPI({ url, method: 'POST', data });
}

export async function getOrderByIdAPI(orderId: string | string[] | undefined) {
  const url = `${ROOT_API}/${PATH_API}/order/${orderId}`;

  return callAPI({ url, method: 'GET' });
}

export async function getAllProduct() {
  const url = `${ROOT_API}/${PATH_API}/product`;

  return callAPI({ url, method: 'GET' });
}

export async function getAllCategoryAPI() {
  const url = `${ROOT_API}/${PATH_API}/category`;

  return callAPI({ url, method: 'GET' });
}

export async function getProductByCategoryAPI(key: string) {
  const url = `${ROOT_API}/${PATH_API}/product?view=${key}`;

  return callAPI({ url, method: 'GET' });
}

export async function getAllTestimonial() {
  const url = `${ROOT_API}/${PATH_API}/testimonial`;

  return callAPI({ url, method: 'GET' });
}

export async function addTestimonial(data: {
  name: string;
  description: string;
  email: string;
}) {
  const url = `${ROOT_API}/${PATH_API}/testimonial/add`;

  return callAPI({ url, method: 'POST', data });
}
