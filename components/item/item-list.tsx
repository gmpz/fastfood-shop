"use client";

import React from "react";
import ItemDetail from "./item-detail";
import { Item } from "@/src/types/item";
import { useSearchParams } from "next/navigation";

interface Props {
  items: Item[];
}

const ItemList = ({ items }: Props) => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // filter items ตาม search query
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="grid flex-1 auto-rows-min px-4 overflow-y-auto scrollbar-hide">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => <ItemDetail key={item.id} items={item} />)
      ) : (
        // 🔥 ส่วนนี้คือสิ่งที่จะโชว์ตอนไม่มีผลลัพธ์
        <div className="flex flex-col items-center justify-center text-gray-500 mt-10">
          <img
            src="/no-result.svg" // 👉 หรือจะใส่ URL รูป placeholder ก็ได้
            alt="no result"
            className="w-32 h-32 opacity-70 mb-4"
          />
          <p className="text-lg font-medium">ไม่พบเมนูที่คุณค้นหา</p>
        </div>
      )}
    </div>
  );
};

export default ItemList;
