import { Check } from "lucide-react";
import React from "react";
interface FilterItemProps {
    name?: string;
    checked?: boolean;
}
const FilterItem = ({name, checked = false} : FilterItemProps) => {
  return (
    <div className="flex px-4 py-4 border-b-2 border-gray-200 items-center justify-between">
      <h1>{name}</h1>
      {checked && <Check color="green" />}
      
    </div>
  );
};

export default FilterItem;
