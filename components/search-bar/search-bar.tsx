import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search } from "lucide-react";
import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import ItemDetail from "../item/item-detail";

const SearchBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Search className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader className="pb-0">
          <SheetTitle className="text-xl">ค้นหารายการ</SheetTitle>
          <SheetDescription asChild>
            <div className="mt-2">
              <InputGroup>
                <InputGroupInput placeholder="ค้นหาเมนูของคุณ" />
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
              </InputGroup>
            </div>
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min px-4 overflow-y-auto scrollbar-hide">
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          
        </div>
        <SheetFooter>
          {/* <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SearchBar;
