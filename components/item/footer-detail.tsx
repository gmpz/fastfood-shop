import React from "react";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

interface Props {
  quantity: number;
  onQuantityChange: (val: number) => void;
  totalPrice: number;
  onAddToCart: () => void;
  editMode?: boolean;
}

const FooterDetail = ({
  quantity,
  onQuantityChange,
  totalPrice,
  onAddToCart,
  editMode = false,
}: Props) => {
  return (
    <div className="flex justify-between w-full items-center gap-6">
      <div className="flex justify-center items-center">
        <Button
          variant="default"
          size="icon"
          className="w-8 h-8 rounded-full bg-gray-300"
          onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
          disabled={quantity <= 1}
        >
          <Minus className="inline size-5" color="black" />
        </Button>

        <span className="mx-4 text-xl">{quantity}</span>
        <Button
          variant="default"
          size="icon"
          className="w-8 h-8 rounded-full bg-gray-300"
          onClick={() => onQuantityChange(quantity + 1)}
        >
          <Plus className="inline size-5" color="black" />
        </Button>
      </div>
      <div className="w-full">
        <Button
          className="w-full h-11 text-md bg-yellow-600 hover:bg-yellow-700 flex justify-between items-center"
          onClick={onAddToCart}
        >
          {editMode ? <div>อัพเดทรายการ</div> : <div>เพิ่มไปยังรายการ</div>}
          
          <div>฿{totalPrice}</div>
        </Button>
      </div>
    </div>
  );
};

export default FooterDetail;
