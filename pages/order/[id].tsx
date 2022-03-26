import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { getOrderByIdAPI } from '../../services/api';

function OrderId() {
  const router = useRouter();
  const { query, isReady } = router;
  const [dataItem, setDataItem] = useState({});

  const getOrderDetails = async (orderId: string | string[] | undefined) => {
    await getOrderByIdAPI(orderId)
      .then((data) => {
        setDataItem(data.data);
      })
      .catch(() => {
        router.push('/');
        toast.error('Gagal mendapatkan data pesanan!');
      });
  };

  useEffect(() => {
    if (isReady) {
      getOrderDetails(query.id);
    }
  }, [isReady]);

  console.log(dataItem);
  return <div />;
}

export default OrderId;
