'use client';

import { useState } from "react";
import OrderItem from "./order-item";


export default function OrderList() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const orders = Array.from({ length: 10 }, (_, i) => ({ id: i + 1 }));

  return (
    <div className="grid flex-1 auto-rows-min px-4 overflow-y-auto scrollbar-hide pb-20">
      {orders.map((order) => (
        <OrderItem
          key={order.id}
          id={order.id}
          isSwiped={selectedId === order.id}
          onSwipe={() =>
            setSelectedId((prev) => (prev === order.id ? null : order.id))
          }
        />
      ))}
    </div>
  );
}
