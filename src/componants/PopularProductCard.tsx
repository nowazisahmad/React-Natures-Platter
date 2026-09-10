import { Bounce, toast } from "react-toastify";
import type { IPopularProduct } from "../type";

interface IPopularProductCardProps {
    product: IPopularProduct;
    cart: IPopularProduct[];
    setCart: React.Dispatch<React.SetStateAction<IPopularProduct[]>>;
}

const PopularProductCard = ({ product, cart, setCart }: IPopularProductCardProps) => {
    const handleAddToCart = (product: IPopularProduct) => {
        console.log("Clicked add to cart", product);
        setCart([...cart, product]);
        toast.success(`${product.title} added to cart!`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
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
                    onClick={() => handleAddToCart(product)}
                    className="mt-2 w-full bg-[#179800] text-white text-xs font-semibold py-1.5 px-2 rounded-md hover:bg-[#145c00] transition"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default PopularProductCard;