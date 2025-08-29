import { ReactNode } from "react";
export function AlertDialog({ open, onOpenChange, children }: { open: boolean; onOpenChange: (o:boolean)=>void; children: ReactNode; }) { if (!open) return null; return (<div className="fixed inset-0 z-50 flex items-center justify-center"><div className="absolute inset-0 bg-black/50" onClick={() => onOpenChange(false)} /><div className="relative z-10 w-full max-w-md">{children}</div></div>); }
export function AlertDialogContent({ children }: { children: ReactNode }) { return <div className="rounded-2xl border border-border bg-card shadow-xl">{children}</div>; }
export function AlertDialogHeader({ children }: { children: ReactNode }) { return <div className="p-4 border-b border-border/60">{children}</div>; }
export function AlertDialogTitle({ children }: { children: ReactNode }) { return <h3 className="text-lg font-semibold">{children}</h3>; }
export function AlertDialogDescription({ children }: { children: ReactNode }) { return <p className="text-sm text-muted-foreground">{children}</p>; }
export function AlertDialogFooter({ children }: { children: ReactNode }) { return <div className="p-4 border-t border-border/60 flex justify-end gap-2">{children}</div>; }
export function AlertDialogCancel({ children, onClick }: { children: ReactNode; onClick?: ()=>void }) { return <button onClick={onClick} className="px-4 py-2 rounded-xl border border-border"> {children} </button>; }
export function AlertDialogAction({ children, onClick, className }: { children: ReactNode; onClick?: ()=>void; className?: string }) { return <button onClick={onClick} className={`px-4 py-2 rounded-xl ${className||"bg-primary text-white"}`}> {children} </button>; }
