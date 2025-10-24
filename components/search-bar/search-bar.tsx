"use client";

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
import { useRouter, useSearchParams } from "next/navigation";

import ItemList from "../item/item-list";
import { Item } from "@/src/types/item";
import InputSearch from "./search-input";

interface Props {
  items: Item[];
}

const SearchBar = ({ items }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("search");

      // เก็บ hash ปัจจุบัน เช่น #promo
      const currentHash = window.location.hash || "";

      router.replace(`?${params.toString()}${currentHash}`);
    }
  };

  return (
    <Sheet onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Search className="cursor-pointer" />
      </SheetTrigger>

      <SheetContent className="w-full">
        <SheetHeader className="pb-0">
          <SheetTitle className="text-xl">ค้นหารายการ</SheetTitle>
          <SheetDescription asChild>
            <InputSearch />
          </SheetDescription>
        </SheetHeader>

        <ItemList items={items} />
        <SheetFooter />
      </SheetContent>
    </Sheet>
  );
};

export default SearchBar;
