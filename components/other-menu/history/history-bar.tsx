
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ClipboardClock } from "lucide-react";
import HistoryItemDetail from "./history-item-detail";

const HistoryBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="bg-white border-2 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <div className="bg-yellow-100 text-yellow-600 rounded-full p-3 mb-4">
            <ClipboardClock className="size-15" />
          </div>
          <h3 className="text-lg font-semibold mb-2">เมนูที่เคยทาน</h3>
        </div>
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader className="pb-0">
          <SheetTitle className="text-xl">ประวัติรายการ</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        {/* <BasketList /> */}
        <div className="grid flex-1 auto-rows-min px-4 overflow-y-auto scrollbar-hide">
          <HistoryItemDetail />
        </div>

        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default HistoryBar;
