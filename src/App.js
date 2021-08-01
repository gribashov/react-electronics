// libraries
import React from "react";
import axios from "axios";
import {Route} from "react-router-dom";
// components
import Header from "./components/Header";
import Cart from "./components/Cart/index.js";
// pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

import {AppContext} from "./context";

function App() {
  const [products, setProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [favoriteProducts, setFavoriteProducts] = React.useState([]);

  const [isVisibleCart, setIsVisibleCart] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoadingPage, setIsLoadingPage] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [
          cartProductsResponse,
          favoriteProductsResponse,
          productsResponse,
        ] = await Promise.all([
          axios.get("https://60f1ba8c38ecdf0017b0fda4.mockapi.io/cart"),
          axios.get("https://60f1ba8c38ecdf0017b0fda4.mockapi.io/favorites"),
          axios.get("https://60f1ba8c38ecdf0017b0fda4.mockapi.io/products"),
        ]);
        setIsLoadingPage(false);

        setCartProducts(cartProductsResponse.data);
        setFavoriteProducts(favoriteProductsResponse.data);
        setProducts(productsResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных");
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleAddToCart = async (obj) => {
    try {
      const findProduct = cartProducts.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findProduct) {
        setCartProducts((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://60f1ba8c38ecdf0017b0fda4.mockapi.io/cart/${findProduct.id}`
        );
      } else {
        setCartProducts((prev) => [...prev, obj]);
        const {data} = await axios.post(
          "https://60f1ba8c38ecdf0017b0fda4.mockapi.io/cart",
          obj
        );
        setCartProducts((prev) =>
          prev.map((product) => {
            if (product.parentId === data.parentId) {
              return {...product, id: data.id};
            }
            return product;
          })
        );
      }
    } catch (error) {
      alert("Ошибка при добалении товара в корзину");
      console.error(error);
    }
  };

  const handleAddToFavorite = async (obj) => {
    try {
      if (favoriteProducts.find((item) => Number(item.id) === Number(obj.id))) {
        setFavoriteProducts((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
        axios.delete(
          `https://60f1ba8c38ecdf0017b0fda4.mockapi.io/favorites/${obj.id}`
        );
      } else {
        const {data} = await axios.post(
          "https://60f1ba8c38ecdf0017b0fda4.mockapi.io/favorites",
          obj
        );
        setFavoriteProducts((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Ошибка при добавлении в закладки");
      console.error(error);
    }
  };

  const handleRemoveFromCart = (id) => {
    try {
      axios.delete(`https://60f1ba8c38ecdf0017b0fda4.mockapi.io/cart/${id}`);
      setCartProducts((prev) =>
        prev.filter((product) => Number(product.id) !== Number(id))
      );
    } catch (error) {
      alert("Ошибка при удалении из корзины");
      console.error(error);
    }
  };

  const onChangeSearchInput = (evt) => {
    setSearchValue(evt.target.value);
  };

  const clearInput = () => {
    setSearchValue("");
  };

  const productHasBeenAdded = (id) => {
    return cartProducts.some((obj) => Number(obj.parentId) === Number(id));
  };

  const handleCloseCart = () => {
    setIsVisibleCart(false);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        cartProducts,
        setCartProducts,
        favoriteProducts,
        productHasBeenAdded,
        handleCloseCart,
        setIsVisibleCart,
        isVisibleCart,
      }}
    >
      <div className="App">
        {/* cart */}
        <Cart
          cartProducts={cartProducts}
          onRemove={handleRemoveFromCart}
          opened={isVisibleCart}
        />

        {/* container */}
        <div className="wrapper mx-auto relative">
          {/* header */}
          <Header
            handleOpenCart={() => {
              setIsVisibleCart(true);
            }}
          />
          {/* br */}
          <div className="w-full border-b"></div>

          {/* search field */}
          <Route path={process.env.PUBLIC_URL + "/"} exact>
            <Home
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              clearInput={clearInput}
              handleAddToCart={handleAddToCart}
              handleAddToFavorite={handleAddToFavorite}
              isLoadingPage={isLoadingPage}
            />
          </Route>

          <Route path={process.env.PUBLIC_URL + "/favorites"} exact>
            <Favorites
              handleAddToCart={handleAddToCart}
              handleAddToFavorite={handleAddToFavorite}
            />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/orders"} exact>
            <Orders isLoadingPage={isLoadingPage} />
          </Route>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
