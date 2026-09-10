import type { IPopularProduct } from "../type";
import { FaTrash } from "react-icons/fa";

interface ICartProps {
    cart: IPopularProduct[];
    setCart: React.Dispatch<React.SetStateAction<IPopularProduct[]>>;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
}

const Cart = ({ cart, setCart, setBalance }: ICartProps) => {
    
    const handleRemove = (product: IPopularProduct) => {
        setCart(cart.filter((item) => item.title !== product.title));
        setBalance((prevBalance) => prevBalance + product.price);
    };

    return (
        <div className="my-[80px] container mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-[#179800]">Cart</h2>
            {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cart.map((product) => (
                        <div key={product.title} className="bg-white p-3 rounded-md shadow-md border border-gray-100 flex flex-row items-center gap-3">
                            <img src={product.productimage} alt={product.title} className="w-20 h-20 object-contain rounded-md" />
                            <div className="flex-1 flex flex-col justify-center">
                                <p className="flex items-center gap-1 text-xs text-yellow-500 font-medium"><span>⭐</span> {product.rating}</p>
                                <h3 className="text-sm font-bold text-gray-800 mt-0.5">{product.title}</h3>
                                <p className="text-xs text-gray-500 mt-0.5">${product.price.toFixed(2)}</p>
                            </div>
                            <button onClick={() => handleRemove(product)} className="text-red-500 hover:text-red-700 transition p-2" title="Remove item">
                                <FaTrash size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            )}
            {cart.length > 0 && (
                <div className="mt-4">
                    <h2 className="font-bold text-lg">
                        Total: ${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}
                    </h2>
                </div>
            )}
        </div>
    );
};

export default Cart;