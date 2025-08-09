// components/BottomNav.tsx
import React from "react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-10 right-10 flex justify-around border-t bg-white py-2">

      <button className="flex flex-col items-center justify-center text-orange-500 text-center">
        <svg className="h-6 w-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
          {/* Ícone Home */}
          <path d="M3 12l9-9 9 9v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
        </svg>
        <span className="text-xs mt-1">Home</span>
      </button>

      <button className="flex flex-col items-center justify-center text-orange-500 text-center">
        <svg className="h-6 w-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
          {/* Ícone Orders */}
          <path d="M4 4h16v2H4zm0 6h16v2H4zm0 6h16v2H4z" />
        </svg>
        <span className="text-xs font-bold mt-1">Orders</span>
      </button>

      <button className="flex flex-col items-center justify-center text-gray-500 text-center">
        <svg className="h-6 w-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
          {/* Ícone Profile */}
          <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
        </svg>
        <span className="text-xs mt-1">Profile</span>
      </button>
    </div>
  );
}
