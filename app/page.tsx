'use client';

import CategorieScroll from './CategoryScroll/categories';
import ProductCards from './ProductCards/productsCards';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="flex items-center justify-between bg-orange-500 p-4 text-white">
        <button className="text-2xl font-bold">&larr;</button>
        <h1 className="text-xl font-bold">Orders</h1>
        <button className="text-2xl">&#128722;</button>
      </div>

      <CategorieScroll />

      <ProductCards />

      <div className="fixed bottom-0 flex w-full justify-around border-t bg-white py-2">
        <button className="flex flex-col items-center text-orange-500">
          <svg className="h-6 w-6" fill="currentColor"></svg>
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center text-orange-500">
          <svg className="h-6 w-6" fill="currentColor"></svg>
          <span className="text-xs font-bold">Orders</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <svg className="h-6 w-6" fill="currentColor"></svg>
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}
