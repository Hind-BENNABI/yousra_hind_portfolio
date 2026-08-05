import { cn } from "@/lib/cn";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-ink/10 bg-white/70 px-3.5 py-1.5 font-body text-xs text-ink",
        className
      )}
    >
      {children}
    </span>
  );
}
