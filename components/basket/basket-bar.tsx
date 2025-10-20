import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBasketIcon } from "lucide-react";
import { Button } from "../ui/button";
import BasketList from "./basket-list";
import { Badge } from "../ui/badge";

const BasketBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingBasketIcon
          className="cursor-pointer"
          size={30}
          strokeWidth={1.5}
        />
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader className="pb-0">
          <SheetTitle className="text-xl">รายการอาหารของคุณ</SheetTitle>
          <SheetDescription asChild></SheetDescription>
        </SheetHeader>
        <BasketList />
        <SheetFooter className="sticky bottom-0 left-0 z-50 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 rounded-t-xl">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <span className="font-bold text-sm">จำนวนรายการ</span>
              <span className="text-sm text-gray-400">3 รายการ</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-sm">service charge</span>
              <span className="text-sm text-gray-400">฿0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-sm">ภาษี</span>
              <span className="text-sm text-gray-400">฿0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-sm">ส่วนลดท้ายบิล</span>
              <span className="text-sm text-gray-400">฿0</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="font-bold text-sm">ราคาสุทธิ</span>
              <span className="text-sm text-gray-400">฿250</span>
            </div>
          </div>
          <div className="h-full w-full mx-auto flex justify-between items-center">
            <Button className="w-full h-12 flex justify-between bg-yellow-600 hover:bg-yellow-700">
              <div className="flex space-x-4 items-center">
                <Badge
                  className="h-6 min-w-6 rounded-sm px-1 bg-white text-black text-md border-[1px] border-gray-400"
                  variant="outline"
                >
                  3
                </Badge>
                <span className="text-lg">เรียกพนักงานคิดเงิน</span>
              </div>
              <div className="text-lg">฿250</div>
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default BasketBar;
