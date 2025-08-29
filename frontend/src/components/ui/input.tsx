import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("w-full rounded-xl bg-card border border-border px-3 py-2 outline-none focus:ring-2 focus:ring-primary", className)} {...props} />;
}
