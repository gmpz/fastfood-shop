import { mockTypes } from "@/src/mock/mock-type";
import { mockItems } from "../src/mock/mock-items";


export async function getAllItems() {
  // จำลองดีเลย์เหมือน request API
  await new Promise((res) => setTimeout(res,500));
  return mockItems;
}

export async function getAllType() {
  // จำลองดีเลย์เหมือน request API
  await new Promise((res) => setTimeout(res,500));
  return mockTypes;
}