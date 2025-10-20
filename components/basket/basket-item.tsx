import React from 'react'
import { Badge } from '../ui/badge'

const BasketItem = () => {
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
            1
          </Badge>
          <div className="flex flex-col">
            <span className="text-sm font-bold">ผัดไทย</span>
            <span className="text-xs text-gray-500">tangpanitan</span>
            <div className="text-xs text-green-600 mt-3">ได้รับแล้ว</div>
          </div>
        </div>
        <div className="p-4">
          <span className="text-xs text-gray-500">฿20</span>
        </div>
      </div>
    </div>
  )
}

export default BasketItem