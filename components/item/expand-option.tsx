import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RadioOption from "./radio-option";
import CheckboxOption from "./checkbox-option";
import { Options, Choice } from "@/src/types/item";
import { BadgeCheckIcon } from "lucide-react";
import { Badge } from "../ui/badge";

interface Props {
  options: Options[];
  selected: Record<number, Choice | Choice[]>;
  setSelected: React.Dispatch<
    React.SetStateAction<Record<number, Choice | Choice[]>>
  >;
  errors?: Record<number, string>; // ตอนกดสั่งจะมี error
}

const ExpandOption = ({
  options,
  selected,
  setSelected,
  errors = {},
}: Props) => {
  return (
    <Accordion
      type="multiple"
      className="w-full"
      defaultValue={options.map((_, i) => `item-${i + 1}`)}
    >
      {options.map((option, index) => {
        const currentValue = selected[option.id];
        const hasError = !!errors[option.id];
        const isSelected =
          option.type === "radio"
            ? !!(currentValue as Choice)?.name
            : Array.isArray(currentValue) && (currentValue as Choice[]).length > 0;

        // กำหนดสถานะสี
        let color: "gray" | "green" | "red" = "gray";
        if (isSelected) color = "green";
        if (hasError) color = "red";

        return (
          <AccordionItem key={option.id} value={`item-${index + 1}`}>
            <AccordionTrigger >
              <div
                className={`flex justify-between w-full ${
                  color === "green"
                    ? "text-green-600"
                    : color === "red"
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                {option.name}
                {option.required && (
                  <Badge
                    variant="secondary"
                    className={
                      color === "green"
                        ? "bg-green-100 text-green-700"
                        : color === "red"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-200 text-gray-600"
                    }
                  >
                    <BadgeCheckIcon className="w-4 h-4 mr-1" />
                    Required
                  </Badge>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 text-balance">
              {option.type === "radio" ? (
                <RadioOption
                  choices={option.choices}
                  optionId={option.id}
                  value={selected[option.id] as Choice | undefined}
                  onChange={(val) =>
                    setSelected((prev) => ({ ...prev, [option.id]: val }))
                  }
                  color={color} // 👈 ส่งสีไป
                />
              ) : (
                <CheckboxOption
                  choices={option.choices}
                  values={(selected[option.id] as Choice[] | undefined) || []}
                  onChange={(vals) =>
                    setSelected((prev) => ({ ...prev, [option.id]: vals }))
                  }
                  color={color} // 👈 ส่งสีไป
                />
              )}

              {errors[option.id] && (
                <span className="text-red-500 text-sm mt-1">
                  {errors[option.id]}
                </span>
              )}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default ExpandOption;
