'use client';
import React from "react";
import ItemDetail from "../item/item-detail";
import { Item } from "@/src/types/item";
import { CartProvider } from "@/context/cart-context";

interface Props {
    topic?: string;
    items?: Item[];
}

const CradPanel = ({topic, items} : Props) => {
  return (
    <div className="bg-white max-w-md mx-auto rounded-lg shadow-md overflow-hidden mb-2 px-4">
      <h1 className=" pt-4 text-xl font-bold">{topic}</h1>
      {items && items.map((item) => (
        <ItemDetail key={item.id} items={item} />
      ))}
    </div>
  );
};

export default CradPanel;
