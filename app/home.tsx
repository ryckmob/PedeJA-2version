'use client';

import CategorieScroll from './CategoryScroll/categories';
import BottomNav from './NavBottom/navbottom';
import ProductCards from './ProductCards/productsCards';
import TableTopBar from './TableTopBar/tableTopBar';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      
      <TableTopBar tableNumber={22} />

      <CategorieScroll />

      <ProductCards />

      <BottomNav />
    </div>
  );
}
