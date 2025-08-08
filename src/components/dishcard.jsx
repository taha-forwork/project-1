import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Coffee, Gift, Flame } from "lucide-react";

const dishes = [
  { id: 1, name: "Egg Pizza", price: "$12", image: "/images/small1.webp" },
  { id: 2, name: "Leaf Pizza", price: "$18", image: "/images/small2.webp" },
  { id: 3, name: "Cheesy Pizza", price: "$15", image: "/images/small3.webp" },
  { id: 4, name: "Italian Pizza", price: "$14", image: "/images/small4.webp" },
  { id: 5, name: "BBQ Pizza", price: "$20", image: "/images/small5.webp" },
];

export function FeaturedDishes() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(4);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const handleNext = () => setStartIndex((prev) => (prev + 1) % dishes.length);
  const handlePrev = () => setStartIndex((prev) => (prev - 1 + dishes.length) % dishes.length);

  const visibleDishes = Array.from({ length: visibleCount }, (_, i) => {
    const index = (startIndex + i) % dishes.length;
    return dishes[index];
  });

  return (
    <section className="relative py-16 bg-gradient-to-r from-[#fff5f3] via-[#ffe7e3] to-[#ffd7cc] overflow-hidden">
      {/* Decorative Icons */}
      <Coffee className="absolute top-6 left-6 w-9 h-9 text-red-300 opacity-15 rotate-[10deg]" />
      <Gift className="absolute bottom-10 right-16 w-12 h-12 text-red-400 opacity-10" />
      <Flame className="absolute top-24 right-10 w-10 h-10 text-red-500 opacity-15" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-10 text-gray-800 tracking-wide">
          Featured Dishes
        </h2>
        <div className="flex items-center justify-center space-x-6">
          {/* LEFT ARROW */}
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-red-100 hover:bg-red-200 transition cursor-pointer shadow-md hover:scale-105 active:scale-95"
            aria-label="Previous dishes"
          >
            <ChevronLeft className="w-5 h-5 text-red-500" />
          </button>

          {/* Cards container */}
          <div className="flex gap-5 overflow-hidden">
            {visibleDishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-2xl p-4 w-[190px] flex flex-col items-center
                  border border-red-200 shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-[170px] h-[170px] object-cover rounded-lg mb-3 shadow-sm"
                />
                <h3 className="text-base font-extrabold text-gray-900">{dish.name}</h3>
                <p className="text-red-600 font-semibold mt-1 text-sm">{dish.price}</p>
                <button
                  className="cursor-pointer mt-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-semibold
                    shadow hover:shadow-lg hover:scale-105 transition"
                >
                  Order Now
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-red-100 hover:bg-red-200 transition cursor-pointer shadow-md hover:scale-105 active:scale-95"
            aria-label="Next dishes"
          >
            <ChevronRight className="w-5 h-5 text-red-500" />
          </button>
        </div>
      </div>
    </section>
  );
}
