// libraries
import React from "react";
// components
import Search from "./../components/Search";
import Card from "./../components/Card";
import Banner from "./../components/Banner";

import {AppContext} from "../context";

function Home({
  searchValue,
  onChangeSearchInput,
  clearInput,
  handleAddToCart,
  handleAddToFavorite,
  isLoadingPage,
}) {
  const {products} = React.useContext(AppContext);
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
