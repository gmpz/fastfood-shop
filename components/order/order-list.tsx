'use client';

import { useState } from "react";
import OrderItem from "./order-item";
import { useCart } from "@/context/cart-context";

export default function OrderList() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { cart, removeFromCart } = useCart();

  return (
    <div className="grid flex-1 auto-rows-min px-4 overflow-y-auto scrollbar-hide pb-20">
      {cart.map((order) => (
        <OrderItem
          key={order.id}
          {...order} // ส่ง id, name, quantity, price, options
          isSwiped={selectedId === order.id}
          onSwipe={() =>
            setSelectedId((prev) => (prev === order.id ? null : order.id))
          }
          onRemove={() => removeFromCart(order.id)} // ส่งฟังก์ชันลบ
        />
      ))}
    </div>
  );
}
