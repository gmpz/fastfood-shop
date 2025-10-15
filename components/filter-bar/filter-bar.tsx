import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Check, List } from "lucide-react";
import FilterItem from "./filter-item";

const FilterBar = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <List />
      </DrawerTrigger>
      <DrawerContent className="h-full flex flex-col">
        <DrawerHeader className="p-0 m-0">
          <DrawerTitle></DrawerTitle>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="grid auto-rows-min px-4">
            <FilterItem name="ยอดนิยม" checked/>
            <FilterItem name="โปรโมชั่น" />
            <FilterItem name="ต้ม" />
            <FilterItem name="ยำ" />
            <FilterItem name="ก๋วยเตี๋ยว" />
            <FilterItem name="ของทานเล่น" />
            <FilterItem name="น้ำดื่ม" />
            
          </div>
        </div>

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

export default FilterBar;
