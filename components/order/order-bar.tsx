"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import BottomNavbar from "../bottom-navbar/bottom-navbar";
import { Button } from "../ui/button";
import OrderList from "./order-list";
import { Badge } from "../ui/badge";
import { useCart } from "@/context/cart-context";
import { Item } from "@/src/types/item";
import { useBasket } from "@/context/basket-context";

interface Props {
  items: Item[];
}

const OrderBar = ({ items }: Props) => {
  const { cart, clearCart } = useCart();
  const { addToBasket } = useBasket();

  const handleOrder = () => {
    if (cart.length === 0) return;
    const basketItems = cart.map((item) => ({
      ...item,
      status: "pending" as const, // default status
    }));
    addToBasket(basketItems);
    clearCart();
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* <BottomNavbar name="รายการอาหารของคุณ" /> */}
        <div className="fixed bottom-0 left-0 z-50 w-full h-20 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 rounded-t-xl">
          <div className="h-full max-w-lg mx-auto px-4 flex justify-between items-center">
            <Button className="w-full h-12 flex justify-between bg-yellow-600 hover:bg-yellow-700">
              <div className="flex space-x-4 items-center">
                <Badge
                  className="h-6 min-w-6 rounded-sm px-1 bg-white text-black text-md border-[1px] border-gray-400 "
                  variant="outline"
                >
                  {totalItems}
                </Badge>
                <span className="text-lg">รายการอาหารของคุณ</span>
              </div>
              <div className="text-lg">฿{totalPrice}</div>
            </Button>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader className="pb-0">
          <SheetTitle className="text-xl">รายการอาหารของคุณ</SheetTitle>
          <SheetDescription asChild></SheetDescription>
        </SheetHeader>
        <OrderList items={items} />
        <SheetFooter className="sticky bottom-0 left-0 z-50 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 rounded-t-xl">
          <div className="h-full w-full mx-auto flex justify-between items-center">
            <Button
              onClick={handleOrder}
              className="w-full h-12 flex justify-between bg-yellow-600 hover:bg-yellow-700"
            >
              <div className="flex space-x-4 items-center">
                <Badge
                  className="h-6 min-w-6 rounded-sm px-1 bg-white text-black text-md border-[1px] border-gray-400"
                  variant="outline"
                >
                  {totalItems}
                </Badge>
                <span className="text-lg">สั่งอาหาร</span>
              </div>
              <div className="text-lg">฿{totalPrice}</div>
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default OrderBar;
