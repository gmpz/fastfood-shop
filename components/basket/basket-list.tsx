import React from "react";
import BasketItem from "./basket-item";

const BasketList = () => {
  return (
    <div className="grid flex-1 auto-rows-min px-4 overflow-y-auto scrollbar-hide">
      <BasketItem />
      <BasketItem />
      <BasketItem />
      <BasketItem />
      <BasketItem />
      <BasketItem />
      <BasketItem />
      <BasketItem />
      <BasketItem />
      <BasketItem />
      <BasketItem />
      <BasketItem />
      <BasketItem />
    </div>
  );
};

export default BasketList;
