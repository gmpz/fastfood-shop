"use client";

import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CardItem from "../card/card-item";
import FooterDetail from "./footer-detail";
import PicDetail from "./pic-detail";
import { Label } from "../ui/label";
import ExpandOption from "./expand-option";
import TypeOrder from "./type-order";
import { Item, Options, Choice, CartItem } from "@/src/types/item";
import { useState, useEffect } from "react";
import { useCart } from "@/context/cart-context";

interface Props {
  items: Item;
  editMode?: boolean; // เพิ่ม prop editMode
  editItem?: CartItem;
}

type SelectedOptions = Record<number, Choice | Choice[]>;

const ItemDetail = ({ items, editMode = false, editItem }: Props) => {
  const [orderType, setOrderType] = useState<"take-in" | "take-away">(
    "take-in"
  );
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const [optionsSelected, setOptionsSelected] = useState<SelectedOptions>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sheetOpen, setSheetOpen] = useState(false); // <-- controlled sheet

  const { addToCart, updateCart } = useCart();

  useEffect(() => {
    if (editMode && editItem && sheetOpen) {
      setQuantity(editItem.quantity);
      setNote(editItem.note);
      setOrderType(editItem.orderType);

      const newSelected: SelectedOptions = {};
      editItem.options.forEach((opt) => {
        const itemOpt = items.options.find((o) => o.name === opt.name);
        if (itemOpt) {
          newSelected[itemOpt.id] = opt.selected;
        }
      });
      setOptionsSelected(newSelected);
    }
  }, [editMode, editItem, sheetOpen, items.options]);

  // ✅ เคลียร์ error realtime ถ้าเลือกครบแล้ว
  useEffect(() => {
    const newErrors: Record<number, string> = {};
    items.options.forEach((opt) => {
      if (opt.required) {
        const selected = optionsSelected[opt.id];
        const isValid =
          (opt.type === "radio" && selected) ||
          (opt.type === "checkbox" &&
            Array.isArray(selected) &&
            selected.length > 0);
        if (!isValid) {
          newErrors[opt.id] = "กรุณาเลือกอย่างน้อยหนึ่งตัวเลือก";
        }
      }
    });
    setErrors((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((key: any) => {
        if (!newErrors[key]) delete updated[key];
      });
      return updated;
    });
  }, [optionsSelected, items.options]);

  const calculateTotal = () => {
    let total = items.price;

    items.options.forEach((opt: Options) => {
      const selected = optionsSelected[opt.id];
      if (!selected) return;

      if (opt.type === "radio" && !Array.isArray(selected)) {
        total += selected.price;
      }

      if (opt.type === "checkbox" && Array.isArray(selected)) {
        selected.forEach((c) => (total += c.price));
      }
    });

    return total * quantity;
  };

  const totalPrice = calculateTotal();

  const handleSheetOpenChange = (isOpen: boolean) => {
    setSheetOpen(isOpen); // <-- update controlled state
    if (!isOpen) {
      setNote("");
      setQuantity(1);
      setOrderType("take-in");
      setOptionsSelected({});
      setErrors({});
    }
  };

  const getOrderData = (): CartItem => {
    const options = items.options.map((opt) => {
      const selected = optionsSelected[opt.id];
      if (!selected) return { name: opt.name, selected: [], price: 0 };

      if (opt.type === "radio" && !Array.isArray(selected)) {
        return { name: opt.name, selected, price: selected.price };
      }

      if (opt.type === "checkbox" && Array.isArray(selected)) {
        const sumPrice = selected.reduce((sum, c) => sum + c.price, 0);
        return { name: opt.name, selected, price: sumPrice };
      }

      return { name: opt.name, selected: [], price: 0 };
    });

    return {
      id: items.id,
      name: items.name,
      quantity,
      note,
      orderType,
      options,
      price: calculateTotal(),
    };
  };

  const handleAddToCart = () => {
    const newErrors: Record<number, string> = {};
    items.options.forEach((opt) => {
      if (opt.required) {
        const selected = optionsSelected[opt.id];
        if (
          (opt.type === "radio" && !selected) ||
          (opt.type === "checkbox" &&
            (!selected || (selected as Choice[]).length === 0))
        ) {
          newErrors[opt.id] = "กรุณาเลือกอย่างน้อยหนึ่งตัวเลือก";
        }
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // สร้าง orderData และ add to cart
    const orderData = getOrderData();

    if (editMode) {
      updateCart(orderData); // <-- ใช้ updateCart แทน addToCart
    } else {
      addToCart(orderData);
    }
    // addToCart(orderData);

    // ✅ ปิด sheet และ reset ค่าทั้งหมด
    setSheetOpen(false);
    setNote("");
    setQuantity(1);
    setOrderType("take-in");
    setOptionsSelected({});
    setErrors({});
  };

  return (
    <Sheet open={sheetOpen} onOpenChange={handleSheetOpenChange}>
      <SheetTrigger asChild>
        {editMode ? <button>แก้ไข</button> : <CardItem items={items} />}
      </SheetTrigger>
      <SheetContent className="w-full border-0">
        <SheetHeader className="p-0">
          <SheetTitle>
            <PicDetail img={items.image} />
          </SheetTitle>
          <SheetDescription className="px-4 mt-2" asChild>
            <div className="grid gap-1">
              <h1 className="text-xl font-bold text-black">{items.name}</h1>
              <span className="text-md text-gray-500">{items.description}</span>
            </div>
          </SheetDescription>
        </SheetHeader>

        <div className="grid flex-1 auto-rows-min gap-2 px-4 overflow-y-auto scrollbar-hide mb-6">
          <div className="grid gap-3">
            <ExpandOption
              options={items.options}
              selected={optionsSelected}
              setSelected={setOptionsSelected}
              errors={errors}
            />
          </div>

          <div className="grid gap-3">
            <Label>ระบุเพิ่มเติม</Label>
            <Input
              placeholder="เช่น ไม่ใส่ผัก"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        </div>

        <SheetFooter className="border-t-[1px] rounded-xl">
          <TypeOrder value={orderType} onChange={setOrderType} />
          <FooterDetail
            editMode={editMode}
            quantity={quantity}
            onQuantityChange={setQuantity}
            totalPrice={totalPrice}
            onAddToCart={handleAddToCart}
          />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ItemDetail;
