import { ChefHat, Leaf } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#fff7f3] to-[#ffe4e1] overflow-hidden">
      
      {/* Decorative Icons */}
      <Leaf className="absolute top-10 left-10 w-12 h-12 text-green-500 opacity-20" />
      <ChefHat className="absolute bottom-10 right-10 w-16 h-16 text-red-500 opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 flex flex-col md:flex-row items-center">
        
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Taste the <span className="text-red-600">Best</span> Food in Town
          </h1>
          <p className="text-gray-600 max-w-md">
            Fresh ingredients, mouth-watering flavors, and love in every bite.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Order Now Button */}
            <button className="relative cursor-pointer px-6 py-3 rounded-full font-semibold text-white shadow-md bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 ease-out transform-gpu will-change-transform overflow-hidden group">
              <span className="relative z-10">Order Now</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 rounded-full scale-100 group-hover:scale-105 transition-transform duration-300 ease-out"></span>
            </button>

            {/* Learn More Button */}
            <button className="relative cursor-pointer px-6 py-3 rounded-full font-semibold text-red-600 border border-red-200 bg-white/60 backdrop-blur-md shadow-sm transition-all duration-300 ease-out transform-gpu will-change-transform overflow-hidden group">
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 rounded-full scale-100 group-hover:scale-105 transition-transform duration-300 ease-out"></span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/images/main.webp"
            alt="Delicious Food"
            className="cursor-pointer rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500 ease-out border-4 border-white/60 transform-gpu will-change-transform"
          />
        </div>
      </div>
    </section>
  );
}
