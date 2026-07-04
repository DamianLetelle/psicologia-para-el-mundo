"use client";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { DUR, EASE } from "@/lib/motion";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, href, variant = "primary", className = "", onClick }: Props) {
  const reduce = useReducedMotion();
  const base =
    "inline-flex items-center justify-center rounded-2xl px-7 py-4 text-base font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tinta cursor-pointer";
  const styles =
    variant === "primary"
      ? "bg-accion text-accion-texto shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:brightness-95"
      : "border border-borde text-tinta hover:bg-superficie";
  const hover = reduce ? {} : { y: -1, scale: 1.02 };
  const tap = reduce ? {} : { scale: 0.97 };
  const trans = { duration: DUR.rapido, ease: EASE.entrada };
  const cls = `${base} ${styles} ${className}`;
  if (href) {
    return (
      <motion.span whileHover={hover} whileTap={tap} transition={trans} className="inline-block">
        <Link href={href} className={cls}>{children}</Link>
      </motion.span>
    );
  }
  return (
    <motion.button whileHover={hover} whileTap={tap} transition={trans} className={cls} onClick={onClick}>
      {children}
    </motion.button>
  );
}
