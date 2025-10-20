import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Headset, MessageCircleQuestionMark } from "lucide-react";
import HistoryBar from "./history/history-bar";

const OtherMenuBar = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <MessageCircleQuestionMark />
      </DrawerTrigger>
      <DrawerContent className="h-full">
        <DrawerHeader>
          <DrawerTitle>เมนูช่วยเหลือ</DrawerTitle>
          <DrawerDescription asChild>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
              {/* Service Card */}
              <HistoryBar />
              
              {/* Service Card */}
              <div className="bg-white border-2 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                <div className="bg-yellow-100 text-yellow-600 rounded-full p-3 mb-4">
                  <Headset className="size-15" />
                </div>
                <h3 className="text-lg font-semibold mb-2">เรียกพนักงาน</h3>
              </div>
            </div>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          {/* <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default OtherMenuBar;
