import Card from "./components/Card";
import Header from "./components/Header";
import Basket from "./components/Basket";
import Banner from "./components/Banner";
import Search from "./components/Search";

const arr = [
  {
    title: "Умные часы Huawei 12 Pro Max",
    price: "14 320",
    img: "/img/product-1.jpg",
  },
  {
    title: "Bluetooth наушники Beats Solo Blue",
    price: "12 999",
    img: "/img/product-2.jpg",
  },
  {
    title: "Игровые наушники Blazer Gaming Plus",
    price: "11 390",
    img: "/img/product-3.jpg",
  },
  {
    title: "Офисный ноутбук Matepad Lumix 3000",
    price: "36 790",
    img: "/img/product-4.jpg",
  },
];

function App() {
  return (
    <div className="App">
      {/* basket */}
      <Basket />
      <div className="wrapper mx-auto relative">
        {/* header */}
        <Header />
        {/* br */}
        <div className="w-full border-b"></div>
        {/* banner */}
        <Banner />
        {/* search field */}
        <Search />
        {/* cards arr */}
        <div className="flex items-center justify-between flex-wrap pr-10">
          {/* card item */}
          {arr.map((obj, index) => (
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
