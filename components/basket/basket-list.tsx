'use client';
import React from "react";
import BasketItem from "./basket-item";
import { useBasket } from "@/context/basket-context";

const BasketList = () => {
  const { basket } = useBasket();
  
  return (
    <div className="grid flex-1 auto-rows-min px-4 overflow-y-auto scrollbar-hide">
      {basket.length === 0 && (
        <div className="flex flex-col items-center justify-center text-gray-500 mt-10">
          <img
            src="https://cdn-icons-png.freepik.com/512/2927/2927347.png"
            alt="no result"
            className="w-32 h-32 opacity-70 mb-4"
          />
          <p className="text-lg font-medium">ไม่มีรายการอาหารในตะกร้า</p>
        </div>
      )}
      {basket.map((item) => (
        <BasketItem key={item.id} items={item} />
      ))} 
      
    </div>
  );
};

export default BasketList;
