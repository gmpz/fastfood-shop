"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { BasketItem, CartItem } from "@/src/types/item";

interface BasketContextType {
  basket: BasketItem[];
  addToBasket: (items: BasketItem[]) => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const addToBasket = (items: BasketItem[]) => {
    setBasket((prev) => [...prev, ...items]);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) throw new Error("useBasket must be used within BasketProvider");
  return context;
};
