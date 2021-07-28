export const Order = ({products, id}) => {
  return products.map(({id, title, img, price}) => (
    <div className="mb-10 ml-10" key={id}>
      <div className="bg-card-gray px-8 py-4 rounded-2xl w-52 h-64 relative">
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
      </div>
    </div>
  ));
};
