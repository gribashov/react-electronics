import banner from "./assets/banner.jpg";
import product1 from "./assets/images/product-1.jpg";
import product2 from "./assets/images/product-2.jpg";
import product3 from "./assets/images/product-3.jpg";
import product4 from "./assets/images/product-4.jpg";
// import product5 from "./assets/images/product-5.jpg";
import product6 from "./assets/images/product-6.jpg";

function App() {
  return (
    <div className="App">
      <div className="wrapper mx-auto relative">
        {/* drawer */}
        <div className="overlay absolute left-0 top-0">
          {/* basket */}
          <div className="drawer absolute right-0 flex flex-col">
            <div className="p-10 text-2xl font-bold">Корзина</div>
            {/* basket cards arr */}
            <div className="flex-1 overflow-y-scroll md:no-scrollbar mb-10">
              {/* card in basket */}
              <div className="mx-10 mb-10">
                <div className="flex items-center justify-between w-80 px-4 h-28 bg-custom-gray rounded-lg">
                  <img
                    src={product1}
                    alt="product1"
                    className="w-20 flex-shrink-0"
                  />
                  <div>
                    <div className="text-sm w-36">
                      Умные часы Huawei 12 Pro Max
                    </div>
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
                    src={product6}
                    alt="product6"
                    className="w-20 flex-shrink-0"
                  />
                  <div>
                    <div className="text-sm w-36">
                      Смартфон Samsung A20 Plus
                    </div>
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
              {/* card in basket */}
              <div className="mx-10 mb-10">
                <div className="flex items-center justify-between w-80 px-4 h-28 bg-custom-gray rounded-lg">
                  <img
                    src={product6}
                    alt="product6"
                    className="w-20 flex-shrink-0"
                  />
                  <div>
                    <div className="text-sm w-36">
                      Смартфон Samsung A20 Plus
                    </div>
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
              {/* card in basket */}
              <div className="mx-10 mb-10">
                <div className="flex items-center justify-between w-80 px-4 h-28 bg-custom-gray rounded-lg">
                  <img
                    src={product6}
                    alt="product6"
                    className="w-20 flex-shrink-0"
                  />
                  <div>
                    <div className="text-sm w-36">
                      Смартфон Samsung A20 Plus
                    </div>
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
              {/* card in basket */}
              <div className="mx-10 mb-10">
                <div className="flex items-center justify-between w-80 px-4 h-28 bg-custom-gray rounded-lg">
                  <img
                    src={product6}
                    alt="product6"
                    className="w-20 flex-shrink-0"
                  />
                  <div>
                    <div className="text-sm w-36">
                      Смартфон Samsung A20 Plus
                    </div>
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
              <div className="mt-10 mx-10 px-20 py-4 flex items-center justify-between rounded-2xl bg-custom-green">
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.31897 1L15.2267 7L9.31897 13"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* header */}
        <div className="flex items-center justify-between p-10">
          {/* left side */}
          <div className="flex items-center">
            <svg
              className="cursor-pointer"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17.5" cy="17.5" r="17.5" fill="#FF8585" />
              <path
                d="M9.20739 11.5455H5.51705V29H9.20739V11.5455ZM12.2436 29H23.4169V25.9574H15.9339V11.5455H12.2436V29Z"
                fill="white"
              />
              <path
                d="M25.7926 23.4545H29.483L29.483 6H25.7926L25.7926 23.4545ZM22.7564 6L11.5831 6V9.04261L19.0661 9.04261V23.4545H22.7564L22.7564 6Z"
                fill="white"
              />
            </svg>
            <div className="ml-6">
              <div className="font-bold select-none">REACT ELECTRONICS</div>
              <div className="text-xs text-gray-400 select-none">
                Магазин электронной техники
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <svg
                className="cursor-pointer"
                width="18"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3637C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3637C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z"
                  stroke="#9B9B9B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3637C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3637C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z"
                  stroke="#9B9B9B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091"
                  stroke="#9B9B9B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="ml-2 text-gray-500 font-semibold cursor-pointer">
                11000 руб.
              </div>
            </div>

            <svg
              className="ml-6 cursor-pointer"
              width="20"
              height="19"
              viewBox="0 0 22 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1003 0C16.7293 0 18.0976 0.54932 19.2052 1.64796C20.3129 2.7466 20.8668 4.08759 20.8668 5.67092C20.8668 6.44643 20.7039 7.23002 20.3781 8.02169C20.0523 8.81335 19.6939 9.51616 19.303 10.1301C18.912 10.7441 18.2523 11.5357 17.3238 12.5051C16.3953 13.4745 15.6134 14.2581 14.9781 14.8559C14.3428 15.4537 13.3248 16.3665 11.9239 17.5944L10.4089 18.9515L8.89403 17.6429C7.52572 16.3827 6.51577 15.4537 5.8642 14.8559C5.21262 14.2581 4.42258 13.4745 3.49408 12.5051C2.56559 11.5357 1.90586 10.7441 1.51492 10.1301C1.12397 9.51616 0.773748 8.81335 0.464249 8.02169C0.15475 7.23002 0 6.44643 0 5.67092C0 4.08759 0.553841 2.7466 1.66152 1.64796C2.7692 0.54932 4.12123 0 5.71759 0C7.60717 0 9.17095 0.727041 10.4089 2.18112C11.6469 0.727041 13.2107 0 15.1003 0ZM10.5067 16.0918C12.1031 14.6701 13.2677 13.6118 14.0008 12.9171C14.7338 12.2224 15.5401 11.3903 16.4198 10.4209C17.2994 9.45153 17.9102 8.60332 18.2523 7.87628C18.5944 7.14924 18.7654 6.41412 18.7654 5.67092C18.7654 4.63691 18.4152 3.78061 17.7148 3.10204C17.0143 2.42347 16.1428 2.08418 15.1003 2.08418C14.3184 2.08418 13.5772 2.31037 12.8768 2.76276C12.1764 3.21514 11.6795 3.79677 11.3863 4.50765H9.43158C9.17095 3.79677 8.69041 3.21514 7.98997 2.76276C7.28952 2.31037 6.53206 2.08418 5.71759 2.08418C4.67507 2.08418 3.81173 2.42347 3.12757 3.10204C2.44342 3.78061 2.10134 4.63691 2.10134 5.67092C2.10134 6.41412 2.26423 7.14924 2.59002 7.87628C2.91581 8.60332 3.52666 9.45153 4.42258 10.4209C5.3185 11.3903 6.13297 12.2224 6.866 12.9171C7.59902 13.6118 8.74743 14.6701 10.3112 16.0918L10.4089 16.1888L10.5067 16.0918Z"
                fill="#9B9B9B"
              />
            </svg>
            <svg
              className="ml-6 cursor-pointer"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z"
                fill="#9B9B9B"
              />
            </svg>
          </div>
        </div>
        {/* br */}
        <div className="w-full border-b"></div>
        {/* banner */}
        <div className="block items-center p-10">
          <div className="relative h-80">
            <img
              src={banner}
              alt="banner"
              className="h-full w-full absolute select-none"
            />
            <div className="absolute left-20 top-20">
              <div className="text-4xl font-bold">Macbook M1</div>
              <div className="text-4xl font-bold text-custom-green">
                - будущее
              </div>
              <div className="mt-10">
                <a
                  href="/#"
                  className="px-14 py-4 rounded-full bg-custom-green text-white font-bold"
                >
                  КУПИТЬ
                </a>
              </div>
            </div>
            <div className="absolute -right-4 top-36">
              <div className="rounded-full w-8 h-8 bg-white items-center flex justify-center shadow-lg cursor-pointer">
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0.999999L6 6L1 11"
                    stroke="#C8C8C8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* search field */}
        <div className="flex items-center justify-between px-10">
          {/* left side */}
          <div className="font-bold text-3xl">Вся техника</div>
          {/* right side */}
          <div className="relative flex items-center">
            <div className="absolute pl-4">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                  stroke="#E4E4E4"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Поиск..."
              className="outline-none border-2 border-custom-gray py-2 rounded-lg pl-10 pr-4"
            />
          </div>
        </div>
        {/* cards arr */}
        <div className="flex items-center justify-between flex-wrap pt-10 pr-10">
          {/* card */}
          <div className="mb-10 ml-10">
            <div className="bg-card-gray px-8 py-4 rounded-2xl w-52 h-64 relative hover:shadow-md transform hover:-translate-y-2 transition duration-200">
              <div className="absolute">
                <div className="bg-white p-2 cursor-pointer rounded-md">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1734 3.45916C13.9639 2.97793 13.6619 2.54185 13.2842 2.17532C12.9063 1.80769 12.4606 1.51555 11.9716 1.31477C11.4644 1.10575 10.9205 0.998757 10.3714 1.00001C9.60099 1.00001 8.84934 1.20933 8.19614 1.60472C8.03987 1.6993 7.89141 1.80319 7.75077 1.91638C7.61013 1.80319 7.46168 1.6993 7.30541 1.60472C6.65221 1.20933 5.90056 1.00001 5.13016 1.00001C4.57541 1.00001 4.03785 1.10545 3.52998 1.31477C3.0393 1.51634 2.59706 1.80629 2.21733 2.17532C1.83915 2.54143 1.53706 2.97762 1.32816 3.45916C1.11095 3.95998 1 4.49182 1 5.03916C1 5.55549 1.10626 6.09352 1.31722 6.64086C1.49381 7.09827 1.74696 7.57273 2.07044 8.05185C2.58299 8.81006 3.28776 9.60084 4.16286 10.4025C5.61303 11.7313 7.04913 12.6492 7.11007 12.6864L7.48043 12.9221C7.64451 13.026 7.85547 13.026 8.01955 12.9221L8.38991 12.6864C8.45085 12.6476 9.88539 11.7313 11.3371 10.4025C12.2122 9.60084 12.917 8.81006 13.4295 8.05185C13.753 7.57273 14.0077 7.09827 14.1828 6.64086C14.3937 6.09352 14.5 5.55549 14.5 5.03916C14.5015 4.49182 14.3906 3.95998 14.1734 3.45916V3.45916Z"
                      stroke="#5C5C5C"
                    />
                  </svg>
                </div>
              </div>
              <img
                src={product1}
                alt="product1"
                className="w-32 h-28 mx-2 flex-shrink-0"
              />
              <div className="text-sm w-36 mt-2">
                Умные часы Huawei 12 Pro Max
              </div>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <small className="text-gray-400">ЦЕНА:</small>
                  <div className="font-bold text-base">12 800 руб.</div>
                </div>
                <div className="bg-white p-2 cursor-pointer rounded-md">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6653 5.13124H7.20212V1.66823C7.20212 0.332869 5.13112 0.332869 5.13112 1.66823V5.13124H1.66799C0.33292 5.13124 0.33292 7.20218 1.66799 7.20218H5.13112V10.6652C5.13112 12.0006 7.20212 12.0006 7.20212 10.6652V7.20218H10.6653C12.0005 7.20218 12.0005 5.13124 10.6653 5.13124Z"
                      fill="#5C5C5C"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="mb-10 ml-10">
            <div className="bg-card-gray px-8 py-4 rounded-2xl w-52 h-64 relative hover:shadow-md transform hover:-translate-y-2 transition duration-200">
              <div className="absolute">
                <div className="bg-white p-2 cursor-pointer rounded-md">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1734 3.45916C13.9639 2.97793 13.6619 2.54185 13.2842 2.17532C12.9063 1.80769 12.4606 1.51555 11.9716 1.31477C11.4644 1.10575 10.9205 0.998757 10.3714 1.00001C9.60099 1.00001 8.84934 1.20933 8.19614 1.60472C8.03987 1.6993 7.89141 1.80319 7.75077 1.91638C7.61013 1.80319 7.46168 1.6993 7.30541 1.60472C6.65221 1.20933 5.90056 1.00001 5.13016 1.00001C4.57541 1.00001 4.03785 1.10545 3.52998 1.31477C3.0393 1.51634 2.59706 1.80629 2.21733 2.17532C1.83915 2.54143 1.53706 2.97762 1.32816 3.45916C1.11095 3.95998 1 4.49182 1 5.03916C1 5.55549 1.10626 6.09352 1.31722 6.64086C1.49381 7.09827 1.74696 7.57273 2.07044 8.05185C2.58299 8.81006 3.28776 9.60084 4.16286 10.4025C5.61303 11.7313 7.04913 12.6492 7.11007 12.6864L7.48043 12.9221C7.64451 13.026 7.85547 13.026 8.01955 12.9221L8.38991 12.6864C8.45085 12.6476 9.88539 11.7313 11.3371 10.4025C12.2122 9.60084 12.917 8.81006 13.4295 8.05185C13.753 7.57273 14.0077 7.09827 14.1828 6.64086C14.3937 6.09352 14.5 5.55549 14.5 5.03916C14.5015 4.49182 14.3906 3.95998 14.1734 3.45916V3.45916Z"
                      stroke="#5C5C5C"
                    />
                  </svg>
                </div>
              </div>
              <img
                src={product2}
                alt="product2"
                className="w-32 h-28 mx-2 flex-shrink-0"
              />
              <div className="text-sm w-36 mt-2">
                Bluetooth наушники Beats Solo Blue
              </div>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <small className="text-gray-400">ЦЕНА:</small>
                  <div className="font-bold text-base">12 800 руб.</div>
                </div>
                <div className="bg-white p-2 cursor-pointer rounded-md">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6653 5.13124H7.20212V1.66823C7.20212 0.332869 5.13112 0.332869 5.13112 1.66823V5.13124H1.66799C0.33292 5.13124 0.33292 7.20218 1.66799 7.20218H5.13112V10.6652C5.13112 12.0006 7.20212 12.0006 7.20212 10.6652V7.20218H10.6653C12.0005 7.20218 12.0005 5.13124 10.6653 5.13124Z"
                      fill="#5C5C5C"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="mb-10 ml-10">
            <div className="bg-card-gray px-8 py-4 rounded-2xl w-52 h-64 relative hover:shadow-md transform hover:-translate-y-2 transition duration-200">
              <div className="absolute">
                <div className="bg-white p-2 cursor-pointer rounded-md">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1734 3.45916C13.9639 2.97793 13.6619 2.54185 13.2842 2.17532C12.9063 1.80769 12.4606 1.51555 11.9716 1.31477C11.4644 1.10575 10.9205 0.998757 10.3714 1.00001C9.60099 1.00001 8.84934 1.20933 8.19614 1.60472C8.03987 1.6993 7.89141 1.80319 7.75077 1.91638C7.61013 1.80319 7.46168 1.6993 7.30541 1.60472C6.65221 1.20933 5.90056 1.00001 5.13016 1.00001C4.57541 1.00001 4.03785 1.10545 3.52998 1.31477C3.0393 1.51634 2.59706 1.80629 2.21733 2.17532C1.83915 2.54143 1.53706 2.97762 1.32816 3.45916C1.11095 3.95998 1 4.49182 1 5.03916C1 5.55549 1.10626 6.09352 1.31722 6.64086C1.49381 7.09827 1.74696 7.57273 2.07044 8.05185C2.58299 8.81006 3.28776 9.60084 4.16286 10.4025C5.61303 11.7313 7.04913 12.6492 7.11007 12.6864L7.48043 12.9221C7.64451 13.026 7.85547 13.026 8.01955 12.9221L8.38991 12.6864C8.45085 12.6476 9.88539 11.7313 11.3371 10.4025C12.2122 9.60084 12.917 8.81006 13.4295 8.05185C13.753 7.57273 14.0077 7.09827 14.1828 6.64086C14.3937 6.09352 14.5 5.55549 14.5 5.03916C14.5015 4.49182 14.3906 3.95998 14.1734 3.45916V3.45916Z"
                      stroke="#5C5C5C"
                    />
                  </svg>
                </div>
              </div>
              <img
                src={product3}
                alt="product3"
                className="w-32 h-28 mx-2 flex-shrink-0"
              />
              <div className="text-sm w-36 mt-2">
                Игровые наушники Blazer Gaming Plus
              </div>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <small className="text-gray-400">ЦЕНА:</small>
                  <div className="font-bold text-base">12 800 руб.</div>
                </div>
                <div className="bg-white p-2 cursor-pointer rounded-md">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6653 5.13124H7.20212V1.66823C7.20212 0.332869 5.13112 0.332869 5.13112 1.66823V5.13124H1.66799C0.33292 5.13124 0.33292 7.20218 1.66799 7.20218H5.13112V10.6652C5.13112 12.0006 7.20212 12.0006 7.20212 10.6652V7.20218H10.6653C12.0005 7.20218 12.0005 5.13124 10.6653 5.13124Z"
                      fill="#5C5C5C"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="mb-10 ml-10">
            <div className="bg-card-gray px-8 py-4 rounded-2xl w-52 h-64 relative hover:shadow-md transform hover:-translate-y-2 transition duration-200">
              <div className="absolute">
                <div className="bg-white p-2 cursor-pointer rounded-md">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1734 3.45916C13.9639 2.97793 13.6619 2.54185 13.2842 2.17532C12.9063 1.80769 12.4606 1.51555 11.9716 1.31477C11.4644 1.10575 10.9205 0.998757 10.3714 1.00001C9.60099 1.00001 8.84934 1.20933 8.19614 1.60472C8.03987 1.6993 7.89141 1.80319 7.75077 1.91638C7.61013 1.80319 7.46168 1.6993 7.30541 1.60472C6.65221 1.20933 5.90056 1.00001 5.13016 1.00001C4.57541 1.00001 4.03785 1.10545 3.52998 1.31477C3.0393 1.51634 2.59706 1.80629 2.21733 2.17532C1.83915 2.54143 1.53706 2.97762 1.32816 3.45916C1.11095 3.95998 1 4.49182 1 5.03916C1 5.55549 1.10626 6.09352 1.31722 6.64086C1.49381 7.09827 1.74696 7.57273 2.07044 8.05185C2.58299 8.81006 3.28776 9.60084 4.16286 10.4025C5.61303 11.7313 7.04913 12.6492 7.11007 12.6864L7.48043 12.9221C7.64451 13.026 7.85547 13.026 8.01955 12.9221L8.38991 12.6864C8.45085 12.6476 9.88539 11.7313 11.3371 10.4025C12.2122 9.60084 12.917 8.81006 13.4295 8.05185C13.753 7.57273 14.0077 7.09827 14.1828 6.64086C14.3937 6.09352 14.5 5.55549 14.5 5.03916C14.5015 4.49182 14.3906 3.95998 14.1734 3.45916V3.45916Z"
                      stroke="#5C5C5C"
                    />
                  </svg>
                </div>
              </div>
              <img
                src={product4}
                alt="product4"
                className="w-32 h-28 mx-2 flex-shrink-0"
              />
              <div className="text-sm w-36 mt-2">
                Офисный ноутбук Matepad Lumix 3000
              </div>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <small className="text-gray-400">ЦЕНА:</small>
                  <div className="font-bold text-base">12 800 руб.</div>
                </div>
                <div className="bg-white p-2 cursor-pointer rounded-md">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6653 5.13124H7.20212V1.66823C7.20212 0.332869 5.13112 0.332869 5.13112 1.66823V5.13124H1.66799C0.33292 5.13124 0.33292 7.20218 1.66799 7.20218H5.13112V10.6652C5.13112 12.0006 7.20212 12.0006 7.20212 10.6652V7.20218H10.6653C12.0005 7.20218 12.0005 5.13124 10.6653 5.13124Z"
                      fill="#5C5C5C"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
