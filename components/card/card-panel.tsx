import React from "react";
import CardItem from "./card-item";

interface CardPanelProps {
    topic?: string;
}

const CradPanel = ({topic} : CardPanelProps) => {
  return (
    <div className="bg-white max-w-md mx-auto rounded-lg shadow-md overflow-hidden mb-2">
      <h1 className="px-4 pt-4 text-xl font-bold">{topic}</h1>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
  );
};

export default CradPanel;
