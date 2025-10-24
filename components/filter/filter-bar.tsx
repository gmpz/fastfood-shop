import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Check, List } from "lucide-react";
import { Type } from "@/src/types/type";

interface FilterBarProps {
  activeTab: string;
  onChangeTab: (tabValue: string) => void;
  tabs: Type[];
}

const FilterBar = ({tabs, activeTab, onChangeTab }: FilterBarProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    onChangeTab(id);
    setOpen(false); // ปิด Drawer

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `#${id}`);
      }
    }, 200);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <List className="cursor-pointer" />
      </DrawerTrigger>
      <DrawerContent className="h-full flex flex-col">
        <DrawerHeader className="p-0 m-0">
          <DrawerTitle>Filters</DrawerTitle>
        </DrawerHeader>

        <div className="flex flex-col px-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.type;
            return (
              <div
                key={tab.type}
                onClick={() => handleClick(tab.type)}
                className={`flex px-4 py-4 border-b-2 border-gray-200 items-center justify-between cursor-pointer}`}>
                <h1 className={`${isActive ? "text-yellow-500" : "text-gray-700"}`}>
                  {tab.name}
                </h1>
                {isActive && <Check className="text-yellow-500" />}
              </div>
            );
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterBar;
