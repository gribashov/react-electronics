import Search from "./../components/Search";
import Card from "./../components/Card";
import Banner from "./../components/Banner";

function Home({
  products,
  cartProducts,
  searchValue,
  onChangeSearchInput,
  clearInput,
  handleAddToCart,
  handleAddToFavorite,
}) {
  return (
    <div>
      {/* banner */}
      <Banner />
      <Search
        searchValue={searchValue}
        onChangeSearchInput={onChangeSearchInput}
        clearInput={clearInput}
      />
      {/* cards arr */}
      <div className="flex items-center justify-between flex-wrap pr-10">
        {/* card item */}

        {products
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              onAdd={(obj) => handleAddToCart(obj)}
              onFav={(obj) => handleAddToFavorite(obj)}
              {...item}
              added={cartProducts.some(
                (obj) => Number(obj.id) === Number(item.id)
              )}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
