import React from "react";
import {AppContext} from "../App";

const Info = ({title, image, description}) => {
  const {handleCloseCart} = React.useContext(AppContext);
  return (
    <div className="h-full py-20">
      {/* empty field */}
      <div className="flex justify-center">
        <img src={image} alt="empty" className="w-36 custom-bounce" />
      </div>
      <div className="text-base flex justify-center font-semibold">{title}</div>
      <div className="text-xs flex justify-center px-10 opacity-50 text-center">
        {description}
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
  );
};

export default Info;
