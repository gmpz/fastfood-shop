import React from "react";
import { Item } from "@/src/types/item";

interface Props {
  items: Item;
}

// ✅ ใช้ forwardRef เพื่อให้ SheetTrigger ใช้งานได้
const CardItem = React.forwardRef<HTMLDivElement, Props>(({ items, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props} // ✅ ต้องส่ง props เพื่อรับ onClick จาก SheetTrigger
      className="flex py-4 border-b-2 border-gray-200 cursor-pointer hover:bg-gray-50 transition"
    >
      {/* Image */}
      <div className="w-1/3">
        <img
          src={items.image}
          alt={items.name}
          className="w-full h-28 rounded-md object-cover"
        />
      </div>

      {/* Description + Price */}
      <div className="w-2/3 pl-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold">{items.name}</h2>
          <p className="text-gray-700 text-sm">{items.description}</p>
        </div>
        <div className="text-left text-md font-semibold mt-2">
          {items.price}.-
        </div>
      </div>
    </div>
  );
});

CardItem.displayName = "CardItem"; // ✅ ช่วยให้ React DevTools แสดงชื่อถูก

export default CardItem;
