import emptyPng from "./../assets/emptyPng.png";
// import deliveryPng from "./../assets/deliveryPng.png";

function Cart({handleCloseCart, cartProducts = [], onRemove}) {
  return (
    <div className="overlay fixed left-0 top-0 mx-auto">
      {/* cart */}
      <div className="cart fixed right-0 flex flex-col">
        <div className="flex items-center justify-between p-10">
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
          <div>
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
                <li className="font-bold">36 120 руб.</li>
              </ul>
              <ul className="dashedDiv flex items-end justify-between mx-10 mb-4">
                <li>Налог 5%:</li>
                <div></div>
                <li className="font-bold">1 806 руб.</li>
              </ul>
              <div className="cursor-pointer mt-10 mx-10 px-20 py-4 flex items-center justify-between rounded-2xl bg-custom-green">
                <a href="/#" className="text-white">
                  Оформить заказ
                </a>
                <svg
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
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full py-20">
            {/* empty field */}
            <div className="flex justify-center">
              <img src={emptyPng} alt="empty" className="w-36 custom-bounce" />
            </div>
            <div className="text-base flex justify-center font-semibold">
              Корзина пустая
            </div>
            <div className="text-xs flex justify-center px-10 opacity-50 text-center">
              Выберите товар и нажмите на кнопку
              <br />
              добавить, чтобы увидеть его здесь
            </div>
            <div
              onClick={handleCloseCart}
              className="cursor-pointer mt-10 mx-10 px-20 py-4 flex items-center justify-between rounded-2xl bg-black hover:bg-gray-900"
            >
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6619 7L1.26337 7"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.00024 13L1.2634 7L8.00025 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a href="/#" className="text-white">
                Вернуться назад
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
