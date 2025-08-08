import { useState } from "react";
import { Menu, X, ShoppingBag, UtensilsCrossed } from "lucide-react";

export function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 lg:px-20 
    relative z-50 bg-gradient-to-r from-[#fff7f3]/80 to-[#ffe4e1]/80 
    backdrop-blur-lg shadow-lg border-b border-red-100">
      
      {/* Logo */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <UtensilsCrossed className="text-red-600 w-6 h-6" />
        <span className="text-2xl font-bold text-red-600 hover:text-red-500 transition">
          Foody
        </span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 font-medium">
        {["Home", "Menu", "About", "Contact"].map((item) => (
          <li key={item}>
            <button className="hover:text-red-600 cursor-pointer transition hover:scale-105">
              {item}
            </button>
          </li>
        ))}
      </ul>

      {/* Right Section */}
      <div className="hidden md:flex items-center space-x-6">
        {/* Bag Button */}
        <button className="bg-black p-2 rounded-full hover:bg-gray-800 cursor-pointer transition shadow-md hover:shadow-lg">
          <ShoppingBag className="text-white w-5 h-5" />
        </button>
        {/* Sign Up Button */}
        <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 cursor-pointer shadow-md hover:shadow-xl">
          Sign Up
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="hover:scale-110 transition cursor-pointer"
        >
          {menuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full 
        bg-gradient-to-b from-[#fff7f3] to-[#ffe4e1] 
        shadow-md md:hidden z-40">
          <ul className="flex flex-col items-center space-y-6 py-6 font-medium">
            {["Home", "Menu", "About", "Contact"].map((item) => (
              <li key={item}>
                <button className="hover:text-red-600 cursor-pointer transition">
                  {item}
                </button>
              </li>
            ))}
            {/* Bag Button in Mobile */}
            <li>
              <button className="bg-black p-2 rounded-full hover:bg-gray-800 cursor-pointer transition">
                <ShoppingBag className="text-white w-5 h-5" />
              </button>
            </li>
            {/* Sign Up Button in Mobile */}
            <li>
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 cursor-pointer">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
