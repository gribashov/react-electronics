import React from "react";

import addicon from "./../assets/icons/addicon.svg";
import success from "./../assets/icons/success.svg";
import grayFavicon from "./../assets/icons/gray-favicon.svg";
import redFavicon from "./../assets/icons/red-favicon.svg";

function Card({id, title, img, price, onClickAdd}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFav, setIsFav] = React.useState(false);

  const handleAdd = () => {
    onClickAdd({id, title, img, price});
    setIsAdded(!isAdded);
  };

  const handleFav = () => {
    setIsFav(!isFav);
  };

  return (
    <div className="mb-10 ml-10">
      <div className="bg-card-gray px-8 py-4 rounded-2xl w-52 h-64 relative hover:shadow-md transform hover:-translate-y-2 transition duration-200">
        <div className="absolute">
          <div
            onClick={handleFav}
            className="bg-white w-8 h-8 cursor-pointer rounded-md flex items-center justify-center"
          >
            <img
              src={isFav ? redFavicon : grayFavicon}
              alt="icon"
              className="select-none"
            />
          </div>
        </div>
        <img
          className="w-32 h-28 mx-2 flex-shrink-0 select-none"
          src={img}
          alt={title}
        />
        <div className="text-sm w-36 mt-2">{title}</div>
        <div className="flex items-center justify-between mt-2">
          <div>
            <small className="text-gray-400">ЦЕНА:</small>
            <div className="font-bold text-base">{price} руб.</div>
          </div>
          <div
            onClick={handleAdd}
            className={
              isAdded
                ? "bg-custom-green w-8 h-8 cursor-pointer rounded-md flex items-center justify-center"
                : "bg-white w-8 h-8 cursor-pointer rounded-md flex items-center justify-center"
            }
          >
            <img
              src={isAdded ? success : addicon}
              alt="icon"
              className="select-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
