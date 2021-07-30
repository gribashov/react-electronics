// libraries
import React from "react";
import ContentLoader from "react-content-loader";

export const Order = ({orders, id, loading = false}) => {
  return (
    <>
      <div className="mx-10 mt-10 mb-5 font-bold text-2xl">Заказ #{id}</div>
      <div class="border-b mx-10"></div>

      <div className="flex items-center flex-wrap py-10">
        {orders.map(({id, title, img, price}) => (
          <div className="mb-10 ml-10" key={id}>
            <div className="bg-card-gray px-8 py-4 rounded-2xl w-52 h-64 relative">
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
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
