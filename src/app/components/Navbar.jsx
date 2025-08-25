"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    if(!pathname.includes("dashboard")) {
  return (
    <nav>
      <ul className="flex justify-between">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/about">About Us</Link>
      </ul>
    </nav>
  );        
    }

    else return <></>;



}
