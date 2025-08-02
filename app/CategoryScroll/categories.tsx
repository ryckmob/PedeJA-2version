import React from 'react';

type Category = {
  name: string;
  image: string;
};

export default function CategorieScroll() {
  const categories: Category[] = [
    { name: 'Burgers', image: '/burger.png' },
    { name: 'Pizza', image: '/pizza.png' },
    { name: 'Pasta', image: '/pasta.png' },
    { name: 'Salads', image: '/salad.png' },
  ];

  return (
    <div className="overflow-x-auto bg-orange-500 px-4 py-3 whitespace-nowrap">
      <div className="flex gap-6 justify-center">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center text-white">
            <img
              src={cat.image}
              alt={cat.name}
              className="h-14 w-14 rounded-full border-2 border-white"
            />
            <span className="mt-1 text-sm">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
