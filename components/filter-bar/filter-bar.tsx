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
            <div className="flex px-4 py-4 border-b-2 border-gray-200 items-center justify-between">
              <h1>ยอดนิยม</h1>
              <Check color="green" />
            </div>
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
