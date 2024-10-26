"use client";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/tabs">Tabs</Link>
      <Link href="/dropdown">Drop Down</Link>
    </div>
  );
}
