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
  isLoadingPage,
}) {
  const renderProducts = () => {
    const filtredProducts = products.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoadingPage ? [...Array(12)] : filtredProducts).map(
      (item, index) => (
        <Card
          key={index}
          onAdd={(obj) => handleAddToCart(obj)}
          onFav={(obj) => handleAddToFavorite(obj)}
          {...item}
          added={cartProducts.some((obj) => Number(obj.id) === Number(item.id))}
          loading={isLoadingPage}
        />
      )
    );
  };
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

        {renderProducts()}
      </div>
    </div>
  );
}

export default Home;
