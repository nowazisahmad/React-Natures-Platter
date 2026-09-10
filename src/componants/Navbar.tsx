import { useState } from "react";
import { FaCartPlus, FaSearch, FaWallet } from "react-icons/fa";
import Logo from "../assets/nav-logo.png";

interface INavbarProps {
    balance: number;
}

const Navbar = ({ balance }: INavbarProps) => {
    const [showBalance, setShowBalance] = useState(false);

    return (
        <div className="bg-green-200 rounded-lg h-20">
            <nav className="flex justify-between gap-4 container mx-auto py-4 px-4">
                <img src={Logo} className="w-25 h-12" alt="Nav Logo" />
                <ul className="flex gap-4 items-center font-medium text-gray-700">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
                
                <div className="flex gap-4 items-center">
                    <div className="relative">
                        <button 
                            onClick={() => setShowBalance(!showBalance)}
                            className="text-sm font-bold bg-white text-green-700 py-1 px-3 rounded-md hover:bg-gray-100 transition"
                        >
                            Tap for Balance
                        </button>
                        
                        {showBalance && (
                            <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md p-3 w-40 flex items-center gap-2 border border-gray-200 z-50">
                                <FaWallet className="text-green-600" />
                                <span className="text-sm font-bold text-gray-700">
                                    ${balance.toFixed(2)}
                                </span>
                            </div>
                        )}
                    </div>

                    <FaSearch className="text-gray-700 cursor-pointer" />
                    <FaCartPlus className="text-gray-700 cursor-pointer" />
                    
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Login</button>
                    <button className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition">SignUp</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;