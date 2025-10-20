
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"


const RadioOption = () => {
  return (
    <RadioGroup defaultValue="" className="text-gray-400">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
        <RadioGroupItem value="pork" id="r1" />
        <Label htmlFor="r1">หมู</Label>
        </div>
        <div><span>฿0</span></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
        <RadioGroupItem value="shrimp" id="r2" />
        <Label htmlFor="r2">กุ้ง</Label>
        </div>
        <div><span>฿0</span></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
        <RadioGroupItem value="egg" id="r3" />
        <Label htmlFor="r3">ไข่</Label>
        </div>
        <div><span>฿0</span></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
        <RadioGroupItem value="seafood" id="r4" />
        <Label htmlFor="r4">ทะเล</Label>
        </div>
        <div><span>฿0</span></div>
      </div>
    </RadioGroup>
  )
}

export default RadioOption