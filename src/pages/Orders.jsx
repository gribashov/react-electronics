import React from "react";

import {Order} from "./../components/Order";
import Info from "./../components/Info";
import axios from "axios";

import ordersEmptyPng from "../assets/ordersEmptyPng.png";

function Orders() {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const {data} = await axios.get(
        "https://60f1ba8c38ecdf0017b0fda4.mockapi.io/orders"
      );

      setOrders(data);
    })();
  }, []);

  return (
    <div className="my-10">
      <div className="flex items-center mx-10">
        <div className="w-8 h-8 flex justify-center items-center bg-black rounded-lg mr-4 cursor-pointer">
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 11L1 6L6 1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="font-bold text-3xl pr-2 truncate">Мои покупки</div>
      </div>
      {/* orders arr */}
      {orders.length ? (
        orders.map(({id, products}) => (
          <>
            <div className="mx-10 mt-10 mb-5 font-bold text-2xl">
              Заказ #{id}
            </div>
            <div class="border-b mx-10"></div>
            <div className="flex items-center flex-wrap py-10">
              <Order key={id} products={products} />
            </div>
          </>
        ))
      ) : (
        <div className="flex items-center justify-center h-full py-10">
          <Info
            title="Заказов нет"
            image={ordersEmptyPng}
            description="Чтобы оформить заказ, в корзине нажмите на кнопку оформить заказ"
          />
        </div>
      )}
    </div>
  );
}

export default Orders;
