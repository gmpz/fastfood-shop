"use client";

import { useState } from "react";
import OrderItem from "./order-item";
import { useCart } from "@/context/cart-context";

export default function OrderList() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { cart, removeFromCart } = useCart();

  return (
    <div className="grid flex-1 auto-rows-min px-4 overflow-y-auto scrollbar-hide pb-20">
      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center text-gray-500 mt-10">
          <img
            src="/empty-cart.svg" // 👉 หรือจะใส่ URL รูป placeholder ก็ได้
            alt="no result"
            className="w-32 h-32 opacity-70 mb-4"
          />
          <p className="text-lg font-medium">ไม่มีรายการอาหารในตะกร้า</p>
        </div>
      )}
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
