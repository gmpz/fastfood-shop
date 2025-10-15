import BottomNavbar from "@/components/bottom-navbar/bottom-navbar";
import CardItem from "@/components/card/card-item";
import CradPanel from "@/components/card/card-panel";
import FilterBar from "@/components/filter-bar/filter-bar";
import HelpMenuBar from "@/components/help-menu/help-menubar";
import SearchBar from "@/components/search-bar/search-bar";
import { Badge } from "@/components/ui/badge";
import {
  Car,
  List,
  MessageCircleQuestionMark,
  Search,
  ShoppingBasket,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

const Shop = async ({ params }: PageProps) => {
  const { slug } = await params;
  return (
    <div className="bg-gray-200">
      {/* topbar */}

      <div className="fixed top-0 left-0 z-50 w-full bg-white">
        <div className="max-w-lg mx-auto px-4">
          <div className="text-lg font-bold py-4 flex justify-between items-center">
            <div>ร้าน {slug}</div>
            <div className="flex gap-4 justify-center items-center">
              <HelpMenuBar />
              <div className="relative">
                <Badge
                  className="absolute -bottom-2 -right-2 h-5 min-w-6 rounded-full px-1 font-mono tabular-nums"
                  variant="destructive"
                >
                  99
                </Badge>
                <ShoppingBasket className="size-8" strokeWidth={1} />
              </div>
            </div>
          </div>

          {/* scroll container */}
          <div className="flex gap-4">
            {/* content ที่เลื่อนได้ */}
            <div className="flex gap-4 justify-center items-center">
              <SearchBar />
              <FilterBar />
            </div>
            <div className="overflow-x-auto scrollbar-hide">
              <ul className="flex gap-4 whitespace-nowrap py-4">
                <li>aaaaaaaa</li>
                <li>bbbbbbbb</li>
                <li>cccccccc</li>
                <li>dddddddd</li>
                <li>eeeeeeee</li>
                <li>ffffffff</li>
                <li>gggggggg</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* products grid */}
      <div className="min-h-[1200px] mx-auto mt-12 max-w-lg py-20">
        <CradPanel topic="ยอดนิยม" />
        <CradPanel topic="โปรโมชั่น"/>
        <CradPanel topic="ต้ม"/>
      </div>
      {/* bottom bar */}
      <BottomNavbar />
    </div>
  );
};

export default Shop;
