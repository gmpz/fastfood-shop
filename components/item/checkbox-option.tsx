import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const CheckboxOption = () => {
  return (
    <div className="flex flex-col gap-6 text-gray-400">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">พิเศษ</Label>
        </div>
        <div>
          <span>฿10</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">พิเศษ เส้น</Label>
        </div>
        <div>
          <span>฿5</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">พิเศษ เนื้อสัตว์</Label>
        </div>
        <div>
          <span>฿20</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">แคปหมู</Label>
        </div>
        <div>
          <span>฿5</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">ไข่</Label>
        </div>
        <div>
          <span>฿10</span>
        </div>
      </div>
    </div>
  );
};

export default CheckboxOption;
