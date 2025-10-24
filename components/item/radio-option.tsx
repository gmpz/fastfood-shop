"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Choice {
  name: string;
  price: number;
}

interface Props {
  choices: Choice[];
  optionId: number;
  value?: Choice; // ตอนนี้ value เป็น object {name, price}
  onChange: (value: Choice) => void; // ส่ง object กลับ
  color?: "gray" | "green" | "red"; // 🟢 ใช้แทน error
}

const RadioOption = ({
  choices,
  optionId,
  value,
  onChange,
  color = "gray",
}: Props) => {
  return (
    <div
      className={`rounded-md p-3 transition-all duration-200 ${
        color === "red"
          ? "border border-red-500 bg-red-50 text-red-600"
          : color === "green"
          ? "border border-green-500 bg-green-50 text-green-700"
          : "border border-gray-200 text-gray-500"
      }`}
    >
      <RadioGroup
        value={value?.name || ""}
        onValueChange={(name) => {
          const choice = choices.find((c) => c.name === name);
          if (choice) onChange(choice);
        }}
        className="space-y-2"
      >
        {choices.map((choice, index) => {
          const id = `radio-${optionId}-${index}`;
          const isSelected = value?.name === choice.name;

          return (
            <div
              key={index}
              className={`flex items-center justify-between p-1 rounded-md ${
                isSelected
                  ? "bg-white/50 text-black"
                  : "hover:bg-gray-100 transition"
              }`}
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value={choice.name} id={id} />
                <Label htmlFor={id}>{choice.name}</Label>
              </div>
              <div>
                <span>฿{choice.price}</span>
              </div>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default RadioOption;
