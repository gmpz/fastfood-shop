"use client";

import { PackageOpen, Utensils } from "lucide-react";

interface Props {
  value: "take-in" | "take-away";
  onChange: (val: "take-in" | "take-away") => void;
}


const TypeOrder = ({ value, onChange }: Props) => {
  return (
    <div className="w-full mb-2">
      <div className="flex gap-4">
        <div
          onClick={() => onChange("take-in")}
          className={`
            cursor-pointer px-4 py-2 rounded-md border text-sm text-center w-full flex justify-center items-center gap-2
            ${
              value === "take-in"
                ? "border-[#ffd500] text-yellow-600 font-semibold bg-[#ffd500]/10"
                : "border-gray-300 text-gray-500 hover:bg-gray-100"
            }
            transition-all
          `}
        >
          <Utensils size={16} />
          ทานที่ร้าน
        </div>

        <div
          onClick={() => onChange("take-away")}
          className={`
            cursor-pointer px-4 py-2 rounded-md border text-sm text-center w-full flex justify-center items-center gap-2
            ${
              value === "take-away"
                ? "border-[#ffd500] text-yellow-600 font-semibold bg-[#ffd500]/10"
                : "border-gray-300 text-gray-500 hover:bg-gray-100"
            }
            transition-all
          `}
        >
          <PackageOpen size={16} />
          สั่งกลับบ้าน
        </div>
      </div>
    </div>
  );
};

export default TypeOrder;
