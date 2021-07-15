import Card from "./components/Card";
import Header from "./components/Header";
import Basket from "./components/Basket";
import Banner from "./components/Banner";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <div className="wrapper mx-auto relative">
        {/* basket */}
        <Basket />
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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
