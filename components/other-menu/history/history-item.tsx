import { Badge } from "@/components/ui/badge";
import React from "react";

const HistoryItem = () => {
  return (
    <div className="relative overflow-hidden w-full px-4">
      {/* เนื้อหาหลัก */}
      <div
        className={`bg-white flex justify-between transition-transform duration-300 z-10 relative border-b`}
      >
        <div className="flex gap-3 py-4  w-full">
          {/* จำนวน */}
          <Badge
            className="h-5 min-w-5 rounded-sm px-1 bg-white text-black text-xs border-[1px] border-gray-400 "
            variant="outline"
          >
            1
          </Badge>
          <div className="flex flex-col items-center">
            <span className="text-sm font-bold">
              วันที่ 25/10/2025 13:30:00 น.
            </span>
          </div>
        </div>
        <div className="p-4">
          {/* <span className="text-xs text-gray-500">฿20</span> */}
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
