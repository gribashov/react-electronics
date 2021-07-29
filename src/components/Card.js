import React from "react";
import ContentLoader from "react-content-loader";

import addicon from "./../assets/icons/addicon.svg";
import success from "./../assets/icons/success.svg";
import grayFavicon from "./../assets/icons/gray-favicon.svg";
import redFavicon from "./../assets/icons/red-favicon.svg";

import {AppContext} from "../App";

function Card({
  id,
  title,
  img,
  price,
  onFav,
  onAdd,
  favorited = false,
  loading = false,
}) {
  const [isFav, setIsFav] = React.useState(favorited);

  const {productHasBeenAdded} = React.useContext(AppContext);

  const obj = {id, parentId: id, title, img, price};

  const onClickAdd = () => {
    onAdd(obj);
    console.log(obj);
  };

  const onClickFavorite = () => {
    onFav(obj);
    setIsFav(!isFav);
  };

  return (
    <div className="mb-10 ml-10">
      <div className="bg-card-gray px-8 py-4 rounded-2xl w-52 h-64 relative hover:shadow-md transform hover:-translate-y-2 transition duration-200">
        {loading ? (
          <ContentLoader
            speed={2}
            width={150}
            height={187}
            viewBox="0 0 150 187"
            backgroundColor="#c4c4c4"
            foregroundColor="#9b9b9b"
          >
            <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
            <rect x="0" y="105" rx="3" ry="3" width="150" height="15" />
            <rect x="0" y="125" rx="3" ry="3" width="93" height="15" />
            <rect x="0" y="155" rx="8" ry="8" width="80" height="24" />
            <rect x="118" y="148" rx="8" ry="8" width="32" height="32" />
          </ContentLoader>
        ) : (
          <>
            <div className="absolute">
              <div
                onClick={onClickFavorite}
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
                onClick={onClickAdd}
                className={
                  productHasBeenAdded(id)
                    ? "bg-custom-green w-8 h-8 cursor-pointer rounded-md flex items-center justify-center"
                    : "bg-white w-8 h-8 cursor-pointer rounded-md flex items-center justify-center"
                }
              >
                <img
                  src={productHasBeenAdded(id) ? success : addicon}
                  alt="icon"
                  className="select-none"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
