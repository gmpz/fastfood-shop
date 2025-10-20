
import { Input } from "@/components/ui/input";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CardItem from "../card/card-item";
import FooterDetail from "./footer-detail";
import PicDetail from "./pic-detail";
import { Label } from "../ui/label";
import ExpandOption from "./expand-option";
import TypeOrder from "./type-order";
const ItemDetail = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <CardItem />
      </SheetTrigger>
      <SheetContent className="w-full border-0">
        <SheetHeader className="p-0">
          <SheetTitle>
            <PicDetail />
          </SheetTitle>
          <SheetDescription className="px-4 mt-2" asChild>
            <div className="grid gap-1">
              <h1 className="text-xl font-bold text-black">ผัดไทย</h1>
              <span className="text-md text-gray-500">
                ผัดไทย กุ้ง หมู ไข่ ทะเล
              </span>
            </div>
          </SheetDescription>
        </SheetHeader>

        <div className="grid flex-1 auto-rows-min gap-2 px-4 overflow-y-auto scrollbar-hide mb-6">
          <div className="grid gap-3 ">
            <ExpandOption />
          </div>
          <div className="grid gap-3">
            <Label>ระบุเพิ่มเติม</Label>
            <Input placeholder="ระบุรายละเอียดเพิ่มเติม เช่น ไม่ใส่ผัก" />
          </div>
        </div>
        <SheetFooter className="border-t-[1px] rounded-xl">
          <TypeOrder />
          <FooterDetail />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ItemDetail;
