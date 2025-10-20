import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface BottomNavbarProps {
  name?: string;
}

const BottomNavbar = ({name} : BottomNavbarProps) => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-20 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 rounded-t-xl">
      <div className="h-full max-w-lg mx-auto px-4 flex justify-between items-center">
        <Button className="w-full h-12 flex justify-between bg-yellow-600 hover:bg-yellow-700">
          <div className="flex space-x-4 items-center">
            <Badge
              className="h-6 min-w-6 rounded-sm px-1 bg-white text-black text-md border-[1px] border-gray-400 "
              variant="outline"
            >
              9
            </Badge>
            <span className="text-lg">{name}</span>
          </div>
          <div className="text-lg">฿250</div>
        </Button>
      </div>
    </div>
  );
};

export default BottomNavbar;
