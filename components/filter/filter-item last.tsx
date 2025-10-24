import { Check } from "lucide-react";
import React from "react";
interface FilterItemProps {
    name?: string;
    checked?: boolean;
    onChange?: () => void; // <-- เพิ่มตรงนี้
}
const FilterItem = ({ name, checked = false, onChange }: FilterItemProps) => {
  return (
    
    <div 
    onClick={onChange}
    className="flex px-4 py-4 border-b-2 border-gray-200 items-center justify-between">
      <h1 className={`${checked && "text-yellow-500"}`}>{name}</h1>
      {checked && <Check className="text-yellow-500" />}
      
    </div>
  );
};

export default FilterItem;
