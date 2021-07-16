import React from "react";

import addicon from "./../assets/icons/addicon.svg";
import success from "./../assets/icons/success.svg";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const handleAdd = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className="mb-10 ml-10">
      <div className="bg-card-gray px-8 py-4 rounded-2xl w-52 h-64 relative hover:shadow-md transform hover:-translate-y-2 transition duration-200">
        <div className="absolute">
          <div
            onClick={props.onClickFav}
            className="bg-white p-2 cursor-pointer rounded-md"
          >
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
          className="w-32 h-28 mx-2 flex-shrink-0 select-none"
          src={props.img}
          alt={props.title}
        />
        <div className="text-sm w-36 mt-2">{props.title}</div>
        <div className="flex items-center justify-between mt-2">
          <div>
            <small className="text-gray-400">ЦЕНА:</small>
            <div className="font-bold text-base">{props.price} руб.</div>
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
