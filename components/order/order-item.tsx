"use client";

import { Badge } from "../ui/badge";
import { Trash2 } from "lucide-react";
import { CartItem, Item } from "@/src/types/item";
import ItemDetail from "../item/item-detail";

interface Props extends CartItem {
  isSwiped: boolean;
  onSwipe: () => void;
  onRemove: (id: number) => void; // ฟังก์ชันลบ
  items: Item;
}

const OrderItem = ({
  id,
  name,
  quantity,
  note,
  price,
  options,
  orderType,
  isSwiped,
  onSwipe,
  onRemove,
  items
}: Props) => {
  
  return (
    <div className="relative overflow-hidden w-full">
      {/* ปุ่มลบ */}

      <div
        className={`
          absolute right-0 top-0 h-full flex items-center bg-red-500 text-white px-4 z-0 
          transition-opacity duration-300
          ${isSwiped ? "opacity-100" : "opacity-0"}
        `}
        onClick={() => onRemove(id)}
      >
        <Trash2 size={20} />
      </div>

      {/* เนื้อหาหลัก */}
      <div
        className={`bg-white flex justify-between transition-transform duration-300 z-10 relative border-b ${
          isSwiped ? "-translate-x-16 " : "translate-x-0"
        }`}
        onClick={onSwipe} // แทนการปัด ลองใช้คลิกก่อน
      >
        <div className="flex gap-3 p-4 w-full">
          {/* จำนวน */}
          <Badge
            className="h-5 min-w-5 rounded-sm px-1 bg-white text-black text-xs border-[1px] border-gray-400 "
            variant="outline"
          >
            {quantity}
          </Badge>
          <div className="flex flex-col">
            <span className="text-sm font-bold">{name}</span>
            {options.map((opt) => (
              <span key={opt.name} className="text-xs text-gray-500">
                {opt.name}:{" "}
                {Array.isArray(opt.selected)
                  ? opt.selected.map((c) => c.name).join(", ")
                  : (opt.selected as { name: string }).name}
              </span>
            ))}
            <div
              className="text-xs text-yellow-600 mt-2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation(); // ป้องกันไม่ให้ onSwipe ทำงาน
              }}
            >
              
              <ItemDetail items={items} editMode={true} editItem={{id,name,quantity,note,options,price,orderType}} />
            </div>
          </div>
        </div>
        <div className="p-4">
          <span className="text-xs text-gray-500">฿{price}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
