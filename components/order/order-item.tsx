"use client";


import { Badge } from "../ui/badge";
import { Trash2 } from "lucide-react";

interface Props {
  id: number;
  isSwiped: boolean;
  onSwipe: () => void;
}

const OrderItem = ({ id, isSwiped, onSwipe }: Props) => {
  
  return (
    <div className="relative overflow-hidden w-full">
      {/* ปุ่มลบ */}
      <div
        className={`
    absolute right-0 top-0 h-full flex items-center bg-red-500 text-white px-4 z-0 
    transition-opacity duration-300
    ${isSwiped ? "opacity-100" : "opacity-0"}
  `}
      >
        <Trash2 size={20} />
      </div>

      {/* เนื้อหาหลัก */}
      <div
        className={`bg-white flex justify-between transition-transform duration-300 z-10 relative border-b ${
          isSwiped ? "-translate-x-16 " : "translate-x-0"
        }`}
        onClick={onSwipe} // <-- แทนการปัด ลองใช้คลิกก่อน
      >
        <div className="flex gap-3 p-4  w-full">
          {/* จำนวน */}
          <Badge
            className="h-5 min-w-5 rounded-sm px-1 bg-white text-black text-xs border-[1px] border-gray-400 "
            variant="outline"
          >
            1
          </Badge>
          <div className="flex flex-col">
            <span className="text-sm font-bold">ผัดไทย</span>
            <span className="text-xs text-gray-500">tangpanitan</span>
            <div className="text-xs text-yellow-600 mt-3">แก้ไข</div>
          </div>
        </div>
        <div className="p-4">
          <span className="text-xs text-gray-500">฿20</span>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
