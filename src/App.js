// libraries
import React from "react";
import axios from "axios";
import {Route} from "react-router-dom";
// components
import Header from "./components/Header";
import Basket from "./components/Basket";
import Banner from "./components/Banner";
// pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [goods, setGoods] = React.useState([]);
  const [basketGoods, setBasketGoods] = React.useState([]);
  const [favoriteGoods, setFavoriteGoods] = React.useState([]);

  const [isVisibleBasket, setIsVisibleBasket] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const handleAddToBasket = (obj) => {
    console.log(obj);
    if (basketGoods.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://60f1ba8c38ecdf0017b0fda4.mockapi.io/basket/${obj.id}`
      );
      setBasketGoods((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://60f1ba8c38ecdf0017b0fda4.mockapi.io/basket", obj);
      setBasketGoods((prev) => [...prev, obj]);
    }
  };

  const handleRemoveFromBasket = (id) => {
    axios.delete(`https://60f1ba8c38ecdf0017b0fda4.mockapi.io/basket/${id}`);
    setBasketGoods((prev) => prev.filter((product) => product.id !== id));
  };

  const onChangeSearchInput = (evt) => {
    setSearchValue(evt.target.value);
  };

  const handleAddToFavorite = (obj) => {
    console.log(obj);
    if (favoriteGoods.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://60f1ba8c38ecdf0017b0fda4.mockapi.io/favorites/${obj.id}`
      );
      setFavoriteGoods((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://60f1ba8c38ecdf0017b0fda4.mockapi.io/favorites", obj);
      setFavoriteGoods((prev) => [...prev, obj]);
    }
  };

  const clearInput = () => {
    setSearchValue("");
  };

  React.useEffect(() => {
    axios
      .get("https://60f1ba8c38ecdf0017b0fda4.mockapi.io/goods")
      .then((res) => {
        setGoods(res.data);
      });
    axios
      .get("https://60f1ba8c38ecdf0017b0fda4.mockapi.io/basket")
      .then((res) => {
        setBasketGoods(res.data);
      });
    axios
      .get("https://60f1ba8c38ecdf0017b0fda4.mockapi.io/favorites")
      .then((res) => {
        setFavoriteGoods(res.data);
      });
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
