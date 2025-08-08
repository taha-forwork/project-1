// components/FeaturedDishes.jsx

import {DishCard} from './dishcard';

export function FeaturedDishes(){
  const dishes = [
    { name: 'Pappardelle', desc: 'With Vegetable', price: 35, img: '/images/small1.webp' },
    { name: 'Ravioli Stuffed', desc: 'With Pesto Sauce', price: 35, img: '/images/small2.webp' },
    { name: 'Pappardelle', desc: 'With Vegetable', price: 35, img: '/images/small1.webp' },
    { name: 'Ravioli Stuffed', desc: 'With Pesto Sauce', price: 35, img: '/images/small2.webp' },
  ];

  return (
    <section className="py-10 px-6 flex flex-wrap gap-6 justify-center bg-[#f5f5f5]">
      {dishes.map((dish, index) => (
        <DishCard key={index} {...dish} />
      ))}
    </section>
  );
};


