import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface Choice {
  name: string;
  price: number;
}

interface Props {
  choices: Choice[];
  values: Choice[]; // array ของ object {name, price}
  onChange: (values: Choice[]) => void;
  color?: "gray" | "green" | "red"; // 🟢 ใช้แทน error
}

const CheckboxOption = ({
  choices,
  values,
  onChange,
  color = "gray",
}: Props) => {
  const toggle = (choice: Choice) => {
    const exists = values.find((v) => v.name === choice.name);
    if (exists) {
      onChange(values.filter((v) => v.name !== choice.name));
    } else {
      onChange([...values, choice]);
    }
  };

  return (
    <div
      className={`flex flex-col gap-4 rounded-md p-3 transition-all duration-200 ${
        color === "red"
          ? "border border-red-500 bg-red-50 text-red-600"
          : color === "green"
          ? "border border-green-500 bg-green-50 text-green-700"
          : "border border-gray-200 text-gray-500"
      }`}
    >
      {choices.map((choice, index) => {
        const id = `checkbox-${index}`;
        const checked = values.some((v) => v.name === choice.name);

        return (
          <div
            key={index}
            className={`flex items-center justify-between p-1 rounded-md ${
              checked
                ? "bg-white/50 text-black"
                : "hover:bg-gray-100 transition"
            }`}
          >
            <div className="flex items-center gap-3">
              <Checkbox
                id={id}
                checked={checked}
                onCheckedChange={() => toggle(choice)}
              />
              <Label htmlFor={id}>{choice.name}</Label>
            </div>
            <div>
              <span>฿{choice.price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CheckboxOption;
