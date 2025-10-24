"use client";
import React, { useState } from "react";
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

  return (
    <div className="flex gap-4">
      {/* content ที่เลื่อนได้ */}
      <div className="flex gap-4 justify-center items-center">
        
        <FilterBar
          tabs={tabs}
          activeTab={activeTab}
          onChangeTab={(tabValue: string) => setActiveTab(tabValue)}
        />
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <TabMenu
          tabs={tabs}
          activeTab={activeTab}
          onChangeTab={(tabValue: string) => setActiveTab(tabValue)}
        />
      </div>
    </div>
  );
};

export default Filter;
