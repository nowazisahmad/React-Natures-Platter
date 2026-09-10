import { Suspense, useState } from "react";
import type { IPopularProduct } from "./type";
import Navbar from "./componants/Navbar";
import Banner from "./componants/Banner";
import Services from "./componants/Services";
import Cart from "./componants/Cart";
import PopularProducts from "./componants/PopularProducts";
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
    const [balance, setBalance] = useState<number>(500);

    return (
        <>
            <Navbar balance={balance} />
            <Banner />
            <Services />
            <Cart cart={cart} setCart={setCart} setBalance={setBalance} />
            <Suspense fallback={<div>Loading...</div>}>
                <PopularProducts
                    usersPromise={usersPromise}
                    cart={cart}
                    setCart={setCart}
                    setBalance={setBalance}
                    balance={balance}
                />
            </Suspense>
            <ArrivalOffers />
            <News />
            <Footer />
        </>
    );
};

export default App;