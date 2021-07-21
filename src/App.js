// libraries
import React from "react";
import axios from "axios";
import {Route} from "react-router-dom";
// components
import Header from "./components/Header";
import Basket from "./components/Basket";
// pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [goods, setGoods] = React.useState([]);
  const [basketGoods, setBasketGoods] = React.useState([]);
  const [favoriteGoods, setFavoriteGoods] = React.useState([]);

  const [isVisibleBasket, setIsVisibleBasket] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    async function fetchData() {
      const basketGoodsResponse = await axios.get(
        "https://60f1ba8c38ecdf0017b0fda4.mockapi.io/basket"
      );
      const favoriteGoodsResponse = await axios.get(
        "https://60f1ba8c38ecdf0017b0fda4.mockapi.io/favorites"
      );
      const goodsResponse = await axios.get(
        "https://60f1ba8c38ecdf0017b0fda4.mockapi.io/goods"
      );

      setBasketGoods(basketGoodsResponse.data);
      setFavoriteGoods(favoriteGoodsResponse.data);
      setGoods(goodsResponse.data);
    }
    fetchData();
  }, []);

  const handleAddToBasket = async (obj) => {
    console.log(obj);
    try {
      if (basketGoods.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://60f1ba8c38ecdf0017b0fda4.mockapi.io/basket/${obj.id}`
        );
        setBasketGoods((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const {data} = await axios.post(
          "https://60f1ba8c38ecdf0017b0fda4.mockapi.io/basket",
          obj
        );
        setBasketGoods((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Error when add to basket");
    }
  };

  const handleAddToFavorite = async (obj) => {
    console.log(obj);
    try {
      if (favoriteGoods.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://60f1ba8c38ecdf0017b0fda4.mockapi.io/favorites/${obj.id}`
        );
      } else {
        const {data} = await axios.post(
          "https://60f1ba8c38ecdf0017b0fda4.mockapi.io/favorites",
          obj
        );
        setFavoriteGoods((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Error when add to favorite");
    }
  };

  const handleRemoveFromBasket = (id) => {
    axios.delete(`https://60f1ba8c38ecdf0017b0fda4.mockapi.io/basket/${id}`);
    setBasketGoods((prev) => prev.filter((product) => product.id !== id));
  };

  const onChangeSearchInput = (evt) => {
    setSearchValue(evt.target.value);
  };

  const clearInput = () => {
    setSearchValue("");
  };

  return (
    <div className="App">
      {/* basket */}
      {isVisibleBasket && (
        <Basket
          basketGoods={basketGoods}
          handleCloseBasket={() => {
            setIsVisibleBasket(false);
          }}
          onRemove={handleRemoveFromBasket}
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

        {/* search field */}
        <Route path="/" exact>
          <Home
            goods={goods}
            basketGoods={basketGoods}
            searchValue={searchValue}
            onChangeSearchInput={onChangeSearchInput}
            clearInput={clearInput}
            handleAddToBasket={handleAddToBasket}
            handleAddToFavorite={handleAddToFavorite}
          />
        </Route>

        <Route path="/favorites" exact>
          <Favorites
            favoriteGoods={favoriteGoods}
            handleAddToBasket={handleAddToBasket}
            handleAddToFavorite={handleAddToFavorite}
          />
        </Route>
      </div>
    </div>
  );
}

export default App;
