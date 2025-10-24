import { it } from "node:test";
import React from "react";

import { Item } from "@/src/types/item";

interface Props{
  items: Item;
}

const CardItem = ({items} : Props) => {
  return (
    <div className="flex py-4 border-b-2 border-gray-200">
      {/* Image Placeholder */}
      <div className="w-1/3">
        <img
          src={items.image}
          alt="Promotion"
          className="w-full h-28 rounded-md object-cover"
        />
      </div>

      {/* Description + Price */}
      <div className="w-2/3 pl-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold">{items.name}</h2>
          <p className="text-gray-700 text-sm">
            {items.description}
          </p>
        </div>
        <div className="text-left text-md font-semibold mt-2">{items.price}.-</div>
      </div>
    </div>
  );
};

export default CardItem;
