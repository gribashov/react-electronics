import Card from "./../components/Card";

function Favorites({favoriteProducts, handleAddToCart, handleAddToFavorite}) {
  return (
    <div className="my-10">
      <div className="font-bold text-3xl pr-2 truncate mx-10 ">
        Мои закладки
      </div>
      {/* cards arr */}
      <div className="flex items-center flex-wrap py-10">
        {favoriteProducts.map((item, index) => (
          <Card
            key={index}
            onAdd={(obj) => handleAddToCart(obj)}
            onFav={(obj) => handleAddToFavorite(obj)}
            {...item}
            favorited={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
