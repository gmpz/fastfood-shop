import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-20 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 rounded-t-xl">
      <div className="h-full max-w-lg mx-auto px-4 flex justify-between items-center">
        <Button className="w-full h-12 flex justify-between bg-[#ffd500] hover:bg-[#ffe503]">
          <div className="flex space-x-4 items-center">
            <Badge
              className="h-7 min-w-7 rounded-sm px-1 bg-white text-black text-lg border-[1px] border-gray-400 "
              variant="outline"
            >
              9
            </Badge>
            <span className="text-lg">รายการอาหารของคุณ</span>
          </div>
          <div className="text-lg">฿250</div>
        </Button>
      </div>
    </div>
  );
};

export default BottomNavbar;
