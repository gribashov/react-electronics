import React from "react";

import Card from "./../components/Card";
import Info from "./../components/Info";
import {AppContext} from "../App";

import favEmptyPng from "../assets/favEmptyPng.png";

function Favorites({handleAddToFavorite}) {
  const {favoriteProducts} = React.useContext(AppContext);

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
        <div className="font-bold text-3xl pr-2 truncate">Мои закладки</div>
      </div>
      {/* cards arr */}
      {favoriteProducts.length ? (
        <div className="flex items-center flex-wrap py-10">
          {favoriteProducts.map((item, index) => (
            <Card
              key={index}
              onFav={(obj) => handleAddToFavorite(obj)}
              {...item}
              favorited={true}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full py-10">
          <Info
            title="Закладок нет"
            image={favEmptyPng}
            description="Выберите товар и нажмите на сердечко, чтобы увидеть его здесь"
          />
        </div>
      )}
    </div>
  );
}

export default Favorites;
