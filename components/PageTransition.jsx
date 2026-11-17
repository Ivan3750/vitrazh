"use client";
import { usePathname } from "next/navigation";

// М'яка поява сторінки при переході
export default function PageTransition({ children }) {
  const path = usePathname();
  return <div key={path} className="page-in">{children}</div>;
}
