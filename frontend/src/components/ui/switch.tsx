interface Props { id?: string; checked: boolean; onCheckedChange: (checked: boolean) => void; }
export function Switch({ checked, onCheckedChange, id }: Props) {
  return (<button id={id} onClick={() => onCheckedChange(!checked)} className={`w-12 h-6 rounded-full ${checked ? "bg-primary" : "bg-border"} relative`}>
      <span className={`absolute top-0.5 ${checked ? "left-6" : "left-0.5"} w-5 h-5 rounded-full bg-card-foreground transition-all`} />
  </button>);
}
