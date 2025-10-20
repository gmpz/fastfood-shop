import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import RadioOption from "./radio-option"

import CheckboxOption from "./checkbox-option"

const ExpandOption = () => {
  return (
    <Accordion
      type="multiple"
      
      className="w-full"
      defaultValue={["item-1", "item-2", "item-3"]}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger >เนื้อสัตว์</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 text-balance">
          <RadioOption />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>เส้น</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 text-balance">
          <RadioOption />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>พิเศษ</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 text-balance">
          <CheckboxOption />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default ExpandOption