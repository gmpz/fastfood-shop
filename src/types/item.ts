export interface Choice {
  name: string;
  price: number;
}

export interface Options {
  id: number;
  name: string;
  type: "radio" | "checkbox" | string;
  choices: Choice[];
  required?: boolean;
}

export interface Item {
  id: number;
  name: string;
  description: string;
  type: string;
  price: number;
  image: string;
  options: Options[];
}

export interface CartItem {
  id: number;
  name: string;
  quantity: number;
  note: string;
  orderType: "take-in" | "take-away";
  options: {
    name: string;
    selected: Choice | Choice[];
    price: number;
  }[];
  price: number; // <-- property นี้ยังขาด
}