import React from "react";

interface TableTopBarProps {
  tableNumber: string | number;
}

export default function TableTopBar({ tableNumber }: TableTopBarProps) {
  return (
    <div>
      <div className="flex items-center justify-between bg-orange-500 px-4 py-2 text-white">
        <button className="text-2xl font-bold">&larr;</button>
        <span className="text-lg font-semibold text-white">
          Mesa {tableNumber}
        </span>
        <button className="text-2xl">&#128722;</button>
      </div>
    </div>
  );
}
