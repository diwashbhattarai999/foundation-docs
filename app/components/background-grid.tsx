import { cn } from "@/lib/utils";

export function BackgroundGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none top-20 absolute h-full w-full overflow-hidden opacity-50 [perspective:200px]",
        className
      )}
    >
      <div className="absolute inset-0 [transform:rotateX(35deg)]">
        {/* Background Grid */}
        <div className="animate-grid [background-image:linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)] [background-repeat:repeat] [background-size:120px_120px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]"></div>
      </div>

      {/* Background Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-fd-background to-transparent to-90%"></div>
    </div>
  );
}
