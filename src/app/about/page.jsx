"use client";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const isLoggedIn = false;
  const router = useRouter();

  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <h1>AboutPage</h1>
      <button type="button" onClick={handleNavigation}>
        Address
      </button>
    </>
  );
}
