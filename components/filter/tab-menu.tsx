"use client";

import { useState } from "react";

interface TabItem {
  label: string;
  value: string;
}

interface TabMenuProps {
  tabs: TabItem[];
}

export default function TabMenu({ tabs }: TabMenuProps) {
  const [activeTab, setActiveTab] = useState("popular");

  return (
    <ul className="flex gap-4 whitespace-nowrap py-4">
      {tabs.map((tab) => (
        <li key={tab.value}>
          <a
            href={`#${tab.value}`}
            onClick={() => setActiveTab(tab.value)}
            className={`pb-2 transition-all duration-150 ${
              activeTab === tab.value
                ? "border-b-2 border-yellow-600 text-yellow-600"
                : "text-gray-600"
            }`}
          >
            {tab.label}
          </a>
        </li>
      ))}
    </ul>
  );
}