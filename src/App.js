import React from "react";

import Card from "./components/Card";
import Header from "./components/Header";
import Basket from "./components/Basket";
import Banner from "./components/Banner";
import Search from "./components/Search";

function App() {
  const [goods, setGoods] = React.useState([]);
  const [isVisibleBasket, setIsVisibleBasket] = React.useState(false);

  fetch("https://60f1ba8c38ecdf0017b0fda4.mockapi.io/goods")
    .then((res) => {
      return res.json();
    })
    .then((json) => setGoods(json));

  return (
    <div className="App">
      {/* basket */}
      {isVisibleBasket && (
        <Basket
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
        <Search />
        {/* cards arr */}
        <div className="flex items-center justify-between flex-wrap pr-10">
          {/* card item */}
          {goods.map((obj, index) => (
            <Card
              key={index}
              title={obj.title}
              price={obj.price}
              img={obj.img}
              onClickAdd={() => console.log("click add")}
              onClickFav={() => console.log("click fav")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
