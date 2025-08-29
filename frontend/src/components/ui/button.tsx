import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn("inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition shadow hover:shadow-md bg-card border border-border", className)} {...props} />;
}
