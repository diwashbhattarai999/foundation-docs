import { cn } from "@/lib/utils";

export function BackgroundGlow({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed top-0 z-0 pointer-events-none size-full bg-[radial-gradient(ellipse_50%_100%_at_50%_-5%,rgba(120,119,198,0.2),rgba(255,255,255,0))]",
        className
      )}
    ></div>
  );
}
