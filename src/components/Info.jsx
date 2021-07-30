// libraries
import React from "react";

import {AppContext} from "../context";

const Info = ({title, image, description}) => {
  const {handleCloseCart} = React.useContext(AppContext);
  return (
    <div className="mx-10 w-64">
      {/* empty field */}
      <div className="flex justify-center">
        <img src={image} alt="empty" className="w-36 custom-bounce" />
      </div>
      <div className="text-base flex justify-center font-semibold">{title}</div>
      <div className="text-xs flex justify-center opacity-50 text-center">
        {description}
      </div>
      <div
        onClick={handleCloseCart}
        className="cursor-pointer mt-10 w-full py-4 flex items-center justify-center rounded-2xl bg-black hover:bg-gray-900"
      >
        <svg
          className="mr-2"
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6619 7L1.26337 7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.00024 13L1.2634 7L8.00025 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
