"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "../search-bar/search-bar";

import TabMenu from "./tab-menu";
import FilterBar from "./filter-bar";

import { Type } from "@/src/types/type";

interface Props {
  types: Type[];
}

const Filter = ({types} : Props) => {
  const tabs = types;
  const [activeTab, setActiveTab] = useState(tabs[0]?.type || "");

  useEffect(() => {
    const sectionIds = types.map((t) => t.type);

    const handleScroll = () => {
      let currentTab = activeTab;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 150) {
          currentTab = id;
        }
      }

      setActiveTab(currentTab);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [types]);

  return (
    <div className="flex gap-4">
      {/* content ที่เลื่อนได้ */}
      <div className="flex gap-4 justify-center items-center">
        
        <FilterBar
          tabs={tabs}
          activeTab={activeTab}
          // onChangeTab={(tabValue: string) => setActiveTab(tabValue)}
          onChangeTab={(tabValue) => {
            setActiveTab(tabValue);
            const section = document.getElementById(tabValue);
            section?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        />
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <TabMenu
          tabs={tabs}
          activeTab={activeTab}
          // onChangeTab={(tabValue: string) => setActiveTab(tabValue)}
          onChangeTab={(tabValue) => {
            setActiveTab(tabValue);
            const section = document.getElementById(tabValue);
            section?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
