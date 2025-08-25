"use client";
import { Input } from "@/components/ui/input";
import { usePathname,useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function MealsSearchInput() {
  //   const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParam}`;
    router.push(url);
  }, [search]);
  return (
    <div>
      <Input placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
