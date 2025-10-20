import React from "react";
import ItemDetail from "../item/item-detail";

interface CardPanelProps {
    topic?: string;
}

const CradPanel = ({topic} : CardPanelProps) => {
  return (
    <div className="bg-white max-w-md mx-auto rounded-lg shadow-md overflow-hidden mb-2 px-4">
      <h1 className=" pt-4 text-xl font-bold">{topic}</h1>
      <ItemDetail />
      <ItemDetail />
      <ItemDetail />
      <ItemDetail />
    </div>
  );
};

export default CradPanel;
