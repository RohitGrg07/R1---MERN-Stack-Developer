import { ReactNode } from "react";
type Props = { open: boolean; onOpenChange: (open: boolean) => void; children: ReactNode; };
export function Dialog({ open, onOpenChange, children }: Props) { if (!open) return null; return (<div className="fixed inset-0 z-50 flex items-center justify-center"><div className="absolute inset-0 bg-black/50" onClick={() => onOpenChange(false)} /><div className="relative z-10 w-full max-w-2xl">{children}</div></div>); }
export function DialogContent({ children, className }: { children: ReactNode; className?: string }) { return <div className={`rounded-2xl border border-border bg-card shadow-xl ${className||""}`}>{children}</div>; }
export function DialogHeader({ children }: { children: ReactNode }) { return <div className="p-4 border-b border-border/60">{children}</div>; }
export function DialogTitle({ children, className }: { children: ReactNode; className?: string }) { return <h2 className={`text-xl font-semibold ${className||""}`}>{children}</h2>; }
export function DialogFooter({ children, className }: { children: ReactNode; className?: string }) { return <div className={`p-4 border-t border-border/60 flex justify-end gap-2 ${className||""}`}>{children}</div>; }
