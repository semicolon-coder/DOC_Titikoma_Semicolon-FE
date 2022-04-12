import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import ProductCard from '../Product';
import {
  getAllCategoryAPI,
  getAllProduct,
  getProductByCategoryAPI,
} from '../../services/api';
import { CartTypes, ProductTypes } from '../../services/data-types';
import CategoryItem from './CategoryItem';
import AddItem from '../../config/cart/AddItem';

function MenuSection() {
  const router = useRouter();
  const [cart, setCart] = useState<ProductTypes[]>([]);
  const [menuItem, setMenuItem] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  let localCart: string | null;
  if (typeof window !== 'undefined') {
    localCart = localStorage.getItem('cart');
  }

  const getAllProductFromAPI = async () => {
    await getAllProduct()
      .then((r) => {
        setMenuItem(r.data);
      })
      .catch(() => {
        router.push('/');
        toast.error('Gagal mendapatkan data menu!');
      });
  };

  const getDataCategory = async () => {
    const data = await getAllCategoryAPI();
    setDataCategory(data.data);
  };

  const onAddItemCart = (item: ProductTypes, name: string) => {
    const cartCopy = AddItem(cart, item, name);

    setCart(cartCopy);

    const stringCart = JSON.stringify(cartCopy);
    localStorage.setItem('cart', stringCart);
  };

  const getProductByCategory = useCallback(
    async (categoryId) => {
      await getProductByCategoryAPI(categoryId).then((r) => {
        setMenuItem(r.data);
      });
    },
    [dataCategory]
  );

  useEffect(() => {
    getDataCategory();
    getAllProductFromAPI();
    const localCartJSON = JSON.parse(localCart!);
    if (localCartJSON) {
      setCart(localCartJSON);
    }
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap gap-4 justify-center mt-20 text-secondary">
        <CategoryItem
          name="Semua"
          categoryId="all-product"
          key="all-product"
          onButtonClick={() => getProductByCategory('all-product')}
        />
        {dataCategory.map((item: ProductTypes) => (
          <CategoryItem
            key={item._id}
            name={item.name}
            categoryId={item._id}
            onButtonClick={() => getProductByCategory(item._id)}
          />
        ))}
      </div>
      <div className="grid grid-cols-12 gap-6 mx-8 font-poppins lg:px-16 lg:mx-8 mt-10">
        {menuItem.map((item: CartTypes) => (
          <ProductCard
            key={item._id}
            _id={item._id}
            title={item.name}
            image={item.image}
            price={item.price}
            qty={1}
            onAddClick={() => onAddItemCart(item, item.name)}
          />
        ))}
      </div>
    </>
  );
}

export default MenuSection;
