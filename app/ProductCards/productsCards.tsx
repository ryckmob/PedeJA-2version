import React from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
  quantity: number;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Margherita',
    price: 0.0,
    imgSrc: '/618283-pizza-artesanal-calabresa_inn.webp',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Margherita',
    price: 0.0,
    imgSrc: '/618283-pizza-artesanal-calabresa_inn.webp',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Margherita',
    price: 0.0,
    imgSrc: '/618283-pizza-artesanal-calabresa_inn.webp',
    quantity: 1,
  },
  {
    id: 4,
    name: 'Margherita',
    price: 0.0,
    imgSrc: '/618283-pizza-artesanal-calabresa_inn.webp',
    quantity: 1,
  },
];

export default function ProductCards() {
  return (
    <div className="flex justify-center">
      <div
        className="
          grid 
          gap-2
          px-2 py-4
          grid-cols-[repeat(auto-fill,minmax(98px,1fr))]
          justify-start
          max-w-[450px]
          "
        style={{ width: '100%' }}
      >
        {products.map(({ id, name, price, imgSrc, quantity }) => (
          <div
            key={id}
            className="relative flex flex-col items-center rounded-lg bg-gray-100 px-1 py-4 min-w-[98px]"
          >
            <div className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
              {quantity}
            </div>
            <img src={imgSrc} className="h-20 w-20 object-contain" alt={name} />
            <p className="mt-2 text-center font-semibold">{name}</p>
            <p className="text-sm font-bold text-orange-600">
              {price.toFixed(2).replace('.', ',')}
            </p>
            <div className="mt-2 flex items-center space-x-2">
              <button className="rounded border bg-white px-2" type="button">
                −
              </button>
              <span>{quantity}</span>
              <button className="rounded border bg-white px-2" type="button">
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
