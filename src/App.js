// libraries
import React from "react";
import axios from "axios";
import {Route} from "react-router-dom";
// components
import Header from "./components/Header";
import Cart from "./components/Cart";
// pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

export const AppContext = React.createContext({});

function App() {
  const [products, setProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [favoriteProducts, setFavoriteProducts] = React.useState([]);

  const [isVisibleCart, setIsVisibleCart] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoadingPage, setIsLoadingPage] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const cartProductsResponse = await axios.get(
        "https://60f1ba8c38ecdf0017b0fda4.mockapi.io/cart"
      );
      const favoriteProductsResponse = await axios.get(
        "https://60f1ba8c38ecdf0017b0fda4.mockapi.io/favorites"
      );
      const productsResponse = await axios.get(
        "https://60f1ba8c38ecdf0017b0fda4.mockapi.io/products"
      );
      setIsLoadingPage(false);

      setCartProducts(cartProductsResponse.data);
      setFavoriteProducts(favoriteProductsResponse.data);
      setProducts(productsResponse.data);
    }
    fetchData();
  }, []);

  const handleAddToCart = async (obj) => {
    try {
      if (cartProducts.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://60f1ba8c38ecdf0017b0fda4.mockapi.io/cart/${obj.id}`
        );
        setCartProducts((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const {data} = await axios.post(
          "https://60f1ba8c38ecdf0017b0fda4.mockapi.io/cart",
          obj
        );
        setCartProducts((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Error when add to cart");
    }
  };

  const handleAddToFavorite = async (obj) => {
    try {
      if (favoriteProducts.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://60f1ba8c38ecdf0017b0fda4.mockapi.io/favorites/${obj.id}`
        );
        setFavoriteProducts((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const {data} = await axios.post(
          "https://60f1ba8c38ecdf0017b0fda4.mockapi.io/favorites",
          obj
        );
        setFavoriteProducts((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Error when add to favorite");
    }
  };

  const handleRemoveFromCart = (id) => {
    axios.delete(`https://60f1ba8c38ecdf0017b0fda4.mockapi.io/cart/${id}`);
    setCartProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const onChangeSearchInput = (evt) => {
    setSearchValue(evt.target.value);
  };

  const clearInput = () => {
    setSearchValue("");
  };

  const productHasBeenAdded = (id) => {
    return cartProducts.some((obj) => Number(obj.id) === Number(id));
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
      }}
    >
      <div className="App">
        {/* cart */}
        {isVisibleCart && (
          <Cart cartProducts={cartProducts} onRemove={handleRemoveFromCart} />
        )}
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
          <Route path="/" exact>
            <Home
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              clearInput={clearInput}
              handleAddToCart={handleAddToCart}
              handleAddToFavorite={handleAddToFavorite}
              isLoadingPage={isLoadingPage}
            />
          </Route>

          <Route path="/favorites" exact>
            <Favorites
              handleAddToCart={handleAddToCart}
              handleAddToFavorite={handleAddToFavorite}
            />
          </Route>
          <Route path="/orders" exact>
            <Orders />
          </Route>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
