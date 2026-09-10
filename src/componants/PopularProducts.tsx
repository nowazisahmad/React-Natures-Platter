import { use, type Dispatch, type SetStateAction } from "react";
import type { IPopularProduct } from "../type";
import PopularProductCard from "./PopularProductCard";
import popularImg from "../assets/popular.png";

interface IPopularProductsProps {
    usersPromise: Promise<IPopularProduct[]>;
    cart: IPopularProduct[];
    setCart: Dispatch<SetStateAction<IPopularProduct[]>>;
    setBalance: Dispatch<SetStateAction<number>>; 
    balance: number;
}

const PopularProducts = ({ usersPromise, cart, setCart, setBalance, balance }: IPopularProductsProps) => {
    const data = use(usersPromise);

    return (
        <div className="my-[80px] container mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[#179800]">Popular Products</h2>

            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 rounded-md shadow-2xl p-6 bg-gradient-to-r from-[#179800] to-[#6d7b6a] relative overflow-hidden">
                    <h2 className="font-bold text-2xl text-white">30% off</h2>
                    <p className="text-white/90 mt-4 mb-8 leading-relaxed">
                        Discover a world of treats, toys, and essentials handpicked for your furry friends.
                    </p>
                    <button className="bg-white text-[#179800] font-bold py-2 px-4 rounded-md hover:bg-gray-200 transition">
                        Buy Now
                    </button>
                    <img 
                        src={popularImg} 
                        alt="Vegetables" 
                        className="absolute bottom-0 right-0 w-1/2 object-cover" 
                    />
                </div>
                <div className="col-span-8 grid grid-cols-3 gap-3">
                    {data.map((product) => (
                        <PopularProductCard 
                            key={product.title} 
                            product={product} 
                            cart={cart} 
                            setCart={setCart} 
                            setBalance={setBalance}
                            balance={balance}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;