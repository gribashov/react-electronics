import React from "react";

import Card from "./components/Card";
import Header from "./components/Header";
import Basket from "./components/Basket";
import Banner from "./components/Banner";
import Search from "./components/Search";

function App() {
  const [goods, setGoods] = React.useState([]);
  const [basketGoods, setBasketGoods] = React.useState([]);
  const [isVisibleBasket, setIsVisibleBasket] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const handleAddToBasket = (obj) => {
    setBasketGoods((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (evt) => {
    setSearchValue(evt.target.value);
  };

  const clearInput = () => {
    setSearchValue("");
  };

  React.useEffect(() => {
    fetch("https://60f1ba8c38ecdf0017b0fda4.mockapi.io/goods")
      .then((res) => {
        return res.json();
      })
      .then((json) => setGoods(json));
  }, []);

  return (
    <div className="App">
      {/* basket */}
      {isVisibleBasket && (
        <Basket
          basketGoods={basketGoods}
          handleCloseBasket={() => {
            setIsVisibleBasket(false);
          }}
        />
      )}
      {/* container */}
      <div className="wrapper mx-auto relative">
        {/* header */}
        <Header
          handleOpenBasket={() => {
            setIsVisibleBasket(true);
          }}
        />
        {/* br */}
        <div className="w-full border-b"></div>
        {/* banner */}
        <Banner />
        {/* search field */}
        <Search
          searchValue={searchValue}
          onChangeSearchInput={onChangeSearchInput}
          clearInput={clearInput}
        />
        {/* cards arr */}
        <div className="flex items-center justify-between flex-wrap pr-10">
          {/* card item */}
          {goods
            .filter((product) => product.title.includes(searchValue))
            .map((item) => (
              <Card
                key={item.title}
                title={item.title}
                price={item.price}
                img={item.img}
                onClickAdd={(obj) => handleAddToBasket(obj)}
                onClickFav={() => console.log("click fav")}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
