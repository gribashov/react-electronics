function Basket() {
  return (
    <div className="overlay fixed left-0 top-0 mx-auto">
      {/* basket */}
      <div className="basket fixed right-0 flex flex-col">
        <div className="flex items-center justify-between p-10">
          <div className="text-2xl font-bold">Корзина</div>
          <div className="bg-custom-red px-5 py-2 cursor-pointer rounded-lg">
            <div className="text-white text-sm">Закрыть</div>
          </div>
        </div>
        {/* basket cards arr */}
        <div className="flex-1 overflow-y-scroll md:no-scrollbar mb-10">
          {/* card in basket */}
          <div className="mx-10 mb-10">
            <div className="flex items-center justify-between w-80 px-4 h-28 bg-custom-gray rounded-lg">
              <img
                src="/img/product-1.jpg"
                alt="product1"
                className="w-20 flex-shrink-0"
              />
              <div>
                <div className="text-sm w-36">Умные часы Huawei 12 Pro Max</div>
                <div className="font-bold text-sm mt-1">14 320 руб.</div>
              </div>
              <div className="bg-white p-3 cursor-pointer rounded-md">
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
          {/* card in basket */}
          <div className="mx-10 mb-10">
            <div className="flex items-center justify-between w-80 px-4 h-28 bg-custom-gray rounded-lg">
              <img
                src="/img/product-6.jpg"
                alt="product6"
                className="w-20 flex-shrink-0"
              />
              <div>
                <div className="text-sm w-36">Смартфон Samsung A20 Plus</div>
                <div className="font-bold text-sm mt-1">21 800 руб.</div>
              </div>
              <div className="bg-white p-3 cursor-pointer rounded-md">
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
    </div>
  );
}

export default Basket;
