"use client";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { DUR, EASE } from "@/lib/motion";
import { btnBase, btnPrimary, btnGhost } from "@/components/ui/buttonStyles";

type Props = { children: ReactNode; href?: string; variant?: "primary" | "ghost"; className?: string; onClick?: () => void };

export default function Button({ children, href, variant = "primary", className = "", onClick }: Props) {
  const reduce = useReducedMotion();
  const styles = variant === "primary" ? btnPrimary : btnGhost;
  const hover = reduce ? {} : { y: -1, scale: 1.02 };
  const tap = reduce ? {} : { scale: 0.97 };
  const trans = { duration: DUR.rapido, ease: EASE.entrada };
  const cls = `${btnBase} ${styles} ${className}`;
  if (href) {
    return (
      <motion.span whileHover={hover} whileTap={tap} transition={trans} className="inline-block">
        <Link href={href} className={cls}>{children}</Link>
      </motion.span>
    );
  }
  return (
    <motion.button whileHover={hover} whileTap={tap} transition={trans} className={cls} onClick={onClick}>{children}</motion.button>
  );
}
