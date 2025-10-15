import { Check } from "lucide-react";
import React from "react";
interface FilterItemProps {
    topic?: string;
    checked?: boolean;
}
const FilterItem = () => {
  return (
    <div className="flex px-4 py-4 border-b-2 border-gray-200 items-center justify-between">
      <h1>ยอดนิยม</h1>
      <Check color="green" />
    </div>
  );
};

export default FilterItem;
