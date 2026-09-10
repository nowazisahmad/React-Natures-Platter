import { FaCartPlus, FaSearch } from "react-icons/fa";
import Logo from "../assets/nav-logo.png";

const Navbar = () => {
  return (
    <div className="bg-green-200 rounded-lg h-20">
        <nav className="flex justify-between gap-4 container mx-auto py-4">
      <img src={Logo} className="w-25 h-12" alt="Nav Logo" />
      <ul className="flex gap-4 items-center">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
      </ul>
      <div className="flex gap-4 items-center">
        <FaSearch />
        <FaCartPlus />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:text-cyan-900 hover:scale-110 transition-transform duration-300">
          Login
        </button>
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 hover:text-cyan-900  hover:scale-110 transition-transform duration-300">
          SignUp
        </button>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
