import Search from "./../components/Search";
import Card from "./../components/Card";
import Banner from "./../components/Banner";

function Home({
  goods,
  basketGoods,
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
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              onAdd={(obj) => handleAddToBasket(obj)}
              onFav={(obj) => handleAddToFavorite(obj)}
              {...item}
              added={basketGoods.some(
                (obj) => Number(obj.id) === Number(item.id)
              )}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
