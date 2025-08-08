import { Star, Heart, MessageCircle } from "lucide-react";

const reviews = [
  {
    name: "John Doe",
    image: "/images/review1.webp",
    stars: 5,
  },
  {
    name: "Kevin Smith",
    image: "/images/review2.webp",
    stars: 4,
  },
  {
    name: "Mike Johnson",
    image: "/images/review3.webp",
    stars: 54,
  },
];

export function Reviews() {
  return (
    <section className="relative px-6 lg:px-20 py-16 bg-gradient-to-b from-[#fff5f3] via-[#ffe7e3] to-[#ffd7cc] overflow-hidden">
      {/* Decorative Icons */}
      <Heart className="absolute top-8 left-6 w-12 h-12 text-red-300 opacity-20 rotate-[15deg]" />
      <MessageCircle className="absolute bottom-8 right-10 w-14 h-14 text-red-400 opacity-15" />
      <Star className="absolute top-20 right-20 w-10 h-10 text-yellow-300 opacity-25" />

      {/* Title */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-red-700">
          Customer Reviews
        </h2>
        <p className="text-red-600/80 mt-2 text-lg">
          What our happy customers are saying
        </p>
      </div>

      {/* Avatars + Stars */}
      <div className="flex flex-wrap justify-center gap-8 relative z-10">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="cursor-pointer flex flex-col items-center p-6 bg-white shadow-md rounded-xl 
                       hover:shadow-xl transform hover:scale-105 transition duration-300 ease-out"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-red-200"
            />
            <div className="flex mt-3">
              {Array.from({ length: review.stars }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="mt-3 text-red-700 font-medium">{review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
