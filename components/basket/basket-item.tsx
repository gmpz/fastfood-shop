import React from "react";
import { Badge } from "../ui/badge";
import type { BasketItem } from "@/src/types/item";

interface Props {
  items: BasketItem;
}

const BasketItem = ({ items }: Props) => {
  return (
    <div className="relative overflow-hidden w-full">
      {/* เนื้อหาหลัก */}
      <div
        className={`bg-white flex justify-between transition-transform duration-300 z-10 relative border-b`}
      >
        <div className="flex gap-3 p-4  w-full">
          {/* จำนวน */}
          <Badge
            className="h-5 min-w-5 rounded-sm px-1 bg-white text-black text-xs border-[1px] border-gray-400 "
            variant="outline"
          >
            {items.quantity}
          </Badge>
          <div className="flex flex-col">
            <span className="text-sm font-bold">{items.name}</span>
            {items.options.length > 0 && (
              <div className="text-xs text-gray-600">
                {items.options
                  .map((opt) =>
                    Array.isArray(opt.selected)
                      ? opt.selected.map((c) => c.name).join(", ")
                      : (opt.selected as { name: string }).name
                  )
                  .join(", ")}
              </div>
            )}
            {items.note && (
              <div className="text-xs text-gray-600">
                <strong>หมายเหตุ:</strong> {items.note}
              </div>
            )}

            {/* <span className="text-xs text-gray-500">tangpanitan</span> */}
            <div className="text-xs text-green-600 mt-3">{items.status}</div>
          </div>
        </div>
        <div className="p-4">
          <span className="text-xs text-gray-500">฿{items.price}</span>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
