import { Bounce, toast } from "react-toastify";
import type { IPopularProduct } from "../type";

interface IPopularProductCardProps {
    product: IPopularProduct;
    cart: IPopularProduct[];
    setCart: React.Dispatch<React.SetStateAction<IPopularProduct[]>>;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
    balance: number;
}

const PopularProductCard = ({ product, cart, setCart, setBalance, balance }: IPopularProductCardProps) => {
    
    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, product: IPopularProduct) => {
        e.preventDefault(); 
        e.stopPropagation(); 

        if (balance < product.price) {
            toast.error("Insufficient Balance!", {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
                transition: Bounce,
            });
            return;
        }

        setCart([...cart, product]);
        setBalance((prevBalance) => prevBalance - product.price);

        toast.success(`${product.title} added to cart!`, {
            position: "top-center",
            autoClose: 3000,
            theme: "light",
            transition: Bounce,
        });
    };

    return (
        <div className="bg-white p-3 rounded-md shadow-md border border-gray-100 flex flex-row items-center gap-3">
            <img
                src={product.productimage}
                alt={product.title}
                className="w-20 h-20 object-contain rounded-md"
            />
            <div className="flex-1 flex flex-col justify-center">
                <p className="flex items-center gap-1 text-xs text-yellow-500 font-medium">
                    <span>⭐</span> {product.rating}
                </p>
                <h3 className="text-sm font-bold text-gray-800 mt-0.5">{product.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">${product.price.toFixed(2)}</p>
                
                <button
                    type="button" 
                    onClick={(e) => handleAddToCart(e, product)}
                    className="mt-2 w-full bg-[#179800] text-white text-xs font-semibold py-1.5 px-2 rounded-md hover:bg-[#145c00] transition"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default PopularProductCard;