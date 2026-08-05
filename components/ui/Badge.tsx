import { cn } from "@/lib/cn";

type BadgeColor = "blue" | "pink" | "yellow" | "green";

const colorMap: Record<BadgeColor, string> = {
  blue: "bg-primary/20 border-primary/40 [&>span]:bg-primary",
  pink: "bg-pink/20 border-pink/30 [&>span]:bg-pink",
  yellow: "bg-yellow/30 border-yellow/40 [&>span]:bg-yellow-dark",
  green: "bg-green/25 border-green/30 [&>span]:bg-green-dark",
};

interface BadgeProps {
  label: string;
  color?: BadgeColor;
  className?: string;
}

export function Badge({ label, color = "blue", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-body text-sm text-ink whitespace-nowrap",
        colorMap[color],
        className
      )}
    >
      <span className="size-1.5 rounded-full" aria-hidden="true" />
      {label}
    </span>
  );
}
