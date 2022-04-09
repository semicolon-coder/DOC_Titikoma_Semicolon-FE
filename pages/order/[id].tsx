import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { getOrderByIdAPI } from '../../services/api';

function OrderId() {
  const router = useRouter();
  const { query, isReady } = router;
  const [dataItem, setDataItem] = useState({
    _id: '',
    orderId: '',
  });

  const getOrderDetails = async (orderId: string | string[] | undefined) => {
    await getOrderByIdAPI(orderId)
      .then((data) => {
        if (data.data.status === 'Proses' || data.data.status === 'Selesai') {
          router.push('/order/success');
        }
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

  return (
    <>
      <title>{dataItem.orderId} - TITIKOMA</title>
      <div className="grid grid-cols-12 gap-6 mx-8 mt-32 font-poppins lg:px-16 my-10">
        <div className="col-span-12">
          <div className="rounded-lg bg-white shadow-md overflow-hidden p-5 hover:shadow-xl transition duration-300">
            <div className="flex flex-col text-center">
              <h1 className="mb-2 text-xl font-bold">
                Silahkan tunjukkan QR Code ini ke kasir!
              </h1>
              <hr className="mb-3" />
              <div className="flex justify-center">
                <QRCode
                  value={`${process.env.NEXT_PUBLIC_API}/history-order/${dataItem._id}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderId;
