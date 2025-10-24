import BasketBar from "@/components/basket/basket-bar";

import CradPanel from "@/components/card/card-panel";

import OrderBar from "@/components/order/order-bar";

import React from "react";
import OtherMenuBar from "@/components/other-menu/other-menubar";
import Filter from "@/components/filter/filter";
import SearchBar from "@/components/search-bar/search-bar";
import { getAllItems, getAllType } from "@/actions/itemActions";
import { CartProvider } from "@/context/cart-context";

const Shop = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const items = await getAllItems();
  const types = await getAllType();
  return (
    <CartProvider>
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
          <div className="start items-center flex gap-4">
            <SearchBar items={items} />
            <Filter types={types} />
          </div>
        </div>
      </div>

      {/* products grid */}
      <div className="min-h-[1200px] mx-auto mt-12 max-w-lg py-20">
        {types.map((item) => {
          const filteredItems = items.filter((x) => x.type === item.type);

          return (
            <div key={item.type} id={item.type} className="scroll-mt-32">
              <CradPanel topic={item.name} items={filteredItems} />
            </div>
          );
        })}
      </div>
      {/* bottom bar */}
      
        <OrderBar />
      
    </div>
    </CartProvider>
  );
};

export default Shop;
