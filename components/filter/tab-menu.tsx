"use client";

import { Type } from "@/src/types/type";
import { useState } from "react";



interface TabMenuProps {
  tabs: Type[];
  activeTab: string;
  onChangeTab: (tabValue: string) => void;
}

export default function TabMenu({ tabs, activeTab, onChangeTab }: TabMenuProps) {
  return (
    <ul className="flex gap-4 whitespace-nowrap py-4">
      {tabs.map((tab) => (
        <li key={tab.type}>
          <a
            href={`#${tab.type}`}
            onClick={() => onChangeTab(tab.type)}
            className={`pb-2 transition-all duration-150 ${
              activeTab === tab.type
                ? "border-b-2 border-yellow-600 text-yellow-600"
                : "text-gray-600"
            }`}
          >
            {tab.name}
          </a>
        </li>
      ))}
    </ul>
  );
}