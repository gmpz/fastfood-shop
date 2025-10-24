"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

const InputSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    // 👇 ดึง hash (#promo) จาก URL ปัจจุบัน
    const hash = typeof window !== "undefined" ? window.location.hash : "";

    // 👇 แปะ hash กลับเข้าไปตอนอัปเดต URL
    router.replace(`?${params.toString()}${hash}`);
  };

  return (
    <div className="mt-2">
      <InputGroup>
        <InputGroupInput
          placeholder="ค้นหาเมนูของคุณ"
          value={query}
          onChange={handleChange}
        />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default InputSearch;
