import { Suspense, useState } from "react";
import Navbar from "./componants/Navbar";
import Banner from "./componants/Banner";
import Services from "./componants/Services";
import PopularProducts from "./componants/PopularProducts";
import type { IPopularProduct } from "./type";
import Cart from "./componants/Cart";
import PopularProductsWithUseEffect from "./componants/PopularProductsWithUseEffect";
import ArrivalOffers from "./componants/ArrivalOffers";
import News from "./componants/News";
import Footer from "./componants/Footer";

const usersFetch = async (): Promise<IPopularProduct[]> => {
  const res = await fetch("/popular-products.json");
  const data = await res.json();
  return data;
};

const App = () => {
  const usersPromise = usersFetch();
  const [cart, setCart] = useState<IPopularProduct[]>([]);

  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Cart cart={cart} setCart={setCart} />
      <Suspense fallback={<div>Loading...</div>}>
        <PopularProducts
          usersPromise={usersPromise}
          cart={cart}
          setCart={setCart}
        />
      </Suspense>
      <PopularProductsWithUseEffect cart={cart} setCart={setCart} />
      <ArrivalOffers/>
      <News/>
      <Footer/>
    </>
  );
};

export default App;
