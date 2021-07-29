import React from "react";
import {AppContext} from "../../App";
import axios from "axios";

import Info from "../Info";
import deliveryPng from "../../assets/deliveryPng.png";
import emptyPng from "../../assets/emptyPng.png";
import {useCart} from "../../hooks/useCart";

import styles from "./Cart.module.scss";

function Cart({onRemove, opened}) {
  const {handleCloseCart} = React.useContext(AppContext);
  const [isOrderSend, setIsOrderSend] = React.useState(false);
  const [orderID, setOrderID] = React.useState(null);
  const [isLoadingOrder, setIsLoadingOrder] = React.useState(false);

  const {cartProducts, setCartProducts, totalPrice} = useCart();

  const sendOrder = async () => {
    try {
      setIsLoadingOrder(true);
      const {data} = await axios.post(
        `https://60f1ba8c38ecdf0017b0fda4.mockapi.io/orders/`,
        {products: cartProducts}
      );
      setIsOrderSend(true);
      setOrderID(data.id);
      setCartProducts([]);
      for (let i = 0; i < cartProducts.length; i++) {
        const product = cartProducts[i];
        await setTimeout(function () {
          axios.delete(
            `https://60f1ba8c38ecdf0017b0fda4.mockapi.io/cart/${product.id}`
          );
        }, 1000);
      }
    } catch (error) {
      alert("Ошибка при запросе заказов");
      console.error(error);
    }
    setIsLoadingOrder(false);
  };
  return (
    <div
      className={`${styles.overlay} ${
        opened ? styles.visibleOverlay : ""
      } fixed left-0 top-0 mx-auto`}
    >
      {/* cart */}
      <div className={`${styles.cart} fixed right-0 flex flex-col`}>
        <div className="flex items-center justify-between mx-10 my-10">
          <div className="text-2xl font-bold">Корзина</div>
          <svg
            className="cursor-pointer"
            onClick={handleCloseCart}
            width="12"
            height="12"
            viewBox="0 0 9 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5706 7.61551L6.15947 5.1667L8.57052 2.71798C9.50024 1.77374 8.05834 0.309319 7.12863 1.25356L4.71758 3.70228L2.30645 1.25348C1.37694 0.309443 -0.0649022 1.77381 0.86461 2.71785L3.27574 5.16665L0.864694 7.61537C-0.0650248 8.55962 1.37687 10.024 2.30658 9.07979L4.71763 6.63107L7.12876 9.07988C8.05839 10.024 9.50023 8.55966 8.5706 7.61551Z"
              fill="#B5B5B5"
            />
          </svg>
        </div>
        {cartProducts.length ? (
          <>
            {/* cart arr */}
            <div className="flex-1 overflow-y-scroll md:no-scrollbar mb-10">
              {/* cart card */}
              {cartProducts.map((obj) => (
                <div key={obj.id} className="mx-10 mb-10">
                  <div className="flex items-center justify-between w-80 px-4 h-28 bg-custom-gray rounded-lg">
                    <img
                      src={obj.img}
                      alt="product6"
                      className="w-20 flex-shrink-0"
                    />
                    <div>
                      <div className="text-sm w-36">{obj.title}</div>
                      <div className="font-bold text-sm mt-1">
                        {obj.price} руб.
                      </div>
                    </div>
                    <div
                      className="bg-white p-3 cursor-pointer rounded-md"
                      onClick={() => onRemove(obj.id)}
                    >
                      <svg
                        width="9"
                        height="10"
                        viewBox="0 0 9 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.5706 7.61551L6.15947 5.1667L8.57052 2.71798C9.50024 1.77374 8.05834 0.309319 7.12863 1.25356L4.71758 3.70228L2.30645 1.25348C1.37694 0.309443 -0.0649022 1.77381 0.86461 2.71785L3.27574 5.16665L0.864694 7.61537C-0.0650248 8.55962 1.37687 10.024 2.30658 9.07979L4.71763 6.63107L7.12876 9.07988C8.05839 10.024 9.50023 8.55966 8.5706 7.61551Z"
                          fill="#B5B5B5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* pay field */}
            <div className="mb-10">
              <ul className="dashedDiv flex items-end justify-between mx-10 mb-4">
                <li>Итого:</li>
                <div></div>
                <li className="font-bold">{totalPrice} руб.</li>
              </ul>
              <ul className="dashedDiv flex items-end justify-between mx-10 mb-4">
                <li>Налог 5%:</li>
                <div></div>
                <li className="font-bold">
                  {Math.round((totalPrice / 100) * 5)} руб.
                </li>
              </ul>
              <button
                disabled={isLoadingOrder}
                onClick={sendOrder}
                className="custom-disabled cursor-pointer mt-10 mx-10 w-80 py-4 flex items-center justify-center rounded-2xl bg-custom-green text-white"
              >
                Оформить заказ
                <svg
                  className="ml-2"
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.7229 7H15.2262"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.31897 1L15.2267 7L9.31897 13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <Info
              title={isOrderSend ? "Заказ оформлен!" : "Корзина пустая"}
              image={isOrderSend ? deliveryPng : emptyPng}
              description={
                isOrderSend
                  ? `Ваш заказ #${orderID} скоро будет передан курьерской доставке`
                  : "Выберите товар и нажмите на кнопку добавить, чтобы увидеть его здесь"
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
