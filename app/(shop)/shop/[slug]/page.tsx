
import BasketBar from "@/components/basket/basket-bar";

import CradPanel from "@/components/card/card-panel";
import FilterBar from "@/components/filter/filter-bar";
import TabMenu from "@/components/filter/tab-menu";

import OrderBar from "@/components/order/order-bar";
import SearchBar from "@/components/search-bar/search-bar";
import React from "react";
import OtherMenuBar from "@/components/other-menu/other-menubar";

interface PageProps {
  params: {
    slug: string;
  };
}

const Shop = async ({ params }: PageProps) => {
  const { slug } = await params;
  return (
    <div className="scroll-smooth bg-gray-200">
      {/* topbar */}

      <div className="fixed top-0 left-0 z-50 w-full bg-white">
        <div className="max-w-lg mx-auto px-4">
          <div className="text-lg font-bold py-4 flex justify-between items-center">
            <div>ร้าน {slug}</div>
            <div className="flex gap-4 justify-center items-center">
              <OtherMenuBar />
              <div className="relative">
                {/* <Badge
                  className="absolute -bottom-2 -right-2 h-5 min-w-6 rounded-full px-1 font-mono tabular-nums"
                  variant="destructive"
                >
                  99
                </Badge> */}
                <BasketBar />
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
              <TabMenu
              tabs={[
                { label: "ยอดนิยม", value: "popular" },
                { label: "โปรโมชั่น", value: "promo" },
                { label: "ต้ม", value: "soup" },
              ]}
            />
            </div>
          </div>
        </div>
      </div>

      {/* products grid */}
      <div className="min-h-[1200px] mx-auto mt-12 max-w-lg py-20">
        <div id="popular" className="scroll-mt-32">
          <CradPanel topic="ยอดนิยม" />
        </div>
        <div id="promo" className="scroll-mt-32">
          <CradPanel topic="โปรโมชั่น" />
        </div>
        <div id="soup" className="scroll-mt-32">
          <CradPanel topic="ต้ม" />
        </div>
      </div>
      {/* bottom bar */}
      <OrderBar />
    </div>
  );
};

export default Shop;
