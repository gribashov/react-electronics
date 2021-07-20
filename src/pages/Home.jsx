import Search from "./../components/Search";
import Card from "./../components/Card";
import Banner from "./../components/Banner";

function Home({
  goods,
  searchValue,
  onChangeSearchInput,
  clearInput,
  handleAddToBasket,
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
        {goods
          .filter((product) =>
            product.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              onClickAdd={(obj) => handleAddToBasket(obj)}
              onClickFav={(obj) => handleAddToFavorite(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
