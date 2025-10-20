"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PackageOpen, Utensils } from "lucide-react";
import { useState } from "react";

const TypeOrder = () => {
  const [selected, setSelected] = useState("take-in");
  console.log("selected", selected);
  return (
    <div className="w-full mb-2">
      <RadioGroup
        value={selected}
        onValueChange={setSelected}
        className="flex gap-4"
      >
        <div
          onClick={() => setSelected("take-in")}
          className={`
            cursor-pointer px-4 py-2 rounded-md border text-sm text-center w-full flex justify-center items-center gap-2
            ${
              selected === "take-in"
                ? "border-[#ffd500] text-yellow-600 font-semibold bg-[#ffd500]/10"
                : "border-gray-300 text-gray-500 hover:bg-gray-100"
            }
            transition-all
          `}
        >
            <Utensils  size={16}/>
          ทานที่ร้าน
        </div>

        <div
          onClick={() => setSelected("take-away")}
          className={`
            cursor-pointer px-4 py-2 rounded-md border text-sm text-center w-full flex justify-center items-center gap-2
            ${
              selected === "take-away"
                ? "border-[#ffd500] text-yellow-600 font-semibold bg-[#ffd500]/10"
                : "border-gray-300 text-gray-500 hover:bg-gray-100"
            }
            transition-all
          `}
        >
            <PackageOpen size={16}/>
          สั่งกลับบ้าน
        </div>
      </RadioGroup>
    </div>
  );
};

export default TypeOrder;
