import { Check } from "lucide-react";
import React from "react";

interface FilterItemProps {
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: (value: string) => void; // ✅ แก้ตรงนี้
}

const FilterItem = ({ name, value, checked = false, onChange }: FilterItemProps) => {
  return (
    <a
      href={`#${value}`}
      onClick={() => value && onChange?.(value)} // ✅ ป้องกัน value เป็น undefined
      className="flex px-4 py-4 border-b-2 border-gray-200 items-center justify-between cursor-pointer"
    >
      <h1 className={`${checked ? "text-yellow-500" : "text-gray-700"}`}>{name}</h1>
      {checked && <Check className="text-yellow-500" />}
    </a>
  );
};

export default FilterItem;