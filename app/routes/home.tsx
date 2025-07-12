import { HomeLayout } from "fumadocs-ui/layouts/home";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import AnimatedIcons from "@/components/animated-icons";
import { BackgroundGlow } from "@/components/background-glow";
import { BackgroundGrid } from "@/components/background-grid";

export function meta() {
  return [
    { title: "Foundation Docs" },
    {
      name: "description",
      content:
        "Foundation is our internal team knowledge base to document and share Git, GitHub, Node.js, Frontend, Backend, and more.",
    },
  ];
}

export default function Home() {
  return (
    <HomeLayout
      className="py-20 px-6 text-center size-full relative overflow-hidden"
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <img src="/favicon-96x96.png" alt="Foundation Logo" className="size-6 rounded-md" />
            <span className="font-bold text-lg">Foundation</span>
          </div>
        ),
        transparentMode: "always",
      }}
      githubUrl="https://github.com/diwashbhattarai999/foundation-docs"
    >
      {/* Background Glow */}
      <BackgroundGlow className="bg-[radial-gradient(ellipse_50%_100%_at_50%_-10%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      {/* Background Grid */}
      <BackgroundGrid />

      {/* Main Content */}
      <section className="z-1 relative mx-auto max-w-full">
        <div className="z-10 mx-auto max-w-screen-xl gap-12 px-4 pt-20 text-fd-muted-foreground md:px-8">
          <div className="leading-0 mx-auto max-w-3xl space-y-5 text-center lg:leading-5">
            <h1 className="group mx-auto w-fit rounded-3xl border-[2px] bg-gradient-to-tr from-fd-card/20 via-fd-card/60 to-fd-card/20 px-5 py-2 text-sm text-fd-muted-foreground transition-colors font-geist duration-300 hover:text-fd-foreground">
              <Link to="/docs" className="flex items-center gap-2">
                Explore the Foundation Docs – JavaScript, TypeScript, Tooling, and More
                <ArrowRight className="inline h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </h1>

            <h2 className="font-geist mx-auto bg-[linear-gradient(180deg,_#000_0%,_rgba(255,_255,_255,_0.00)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] bg-clip-text text-4xl tracking-tighter text-transparent md:text-6xl">
              One place to master{" "}
              <span className="bg-[#7271c3] bg-clip-text text-transparent">
                modern full stack development.
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-fd-foreground/80 text-base">
              Foundation is your internal source of truth — curated, structured, and
              developer-friendly docs on everything from JavaScript, TypeScript, formatting, and
              toolchains to modern frontend and backend frameworks.
            </p>

            <div className="pt-10">
              <Link
                to="/docs"
                className="neumorphic-button hover:shadow-[0_0_20px_rgba(155, 135, 245, 0.5)] relative w-full overflow-hidden rounded-full border border-foreground/10 bg-gradient-to-b from-white/10 dark:from-white/10 to-white/5 dark:to-white/5 px-8 py-4 shadow-lg transition-all duration-300 hover:border-[#7271c3]/30 sm:w-auto"
              >
                <span className="font-semibold">Get Started</span>
                <ArrowRight className="ml-2 inline h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="relative mt-20 w-full">
        {/* Bottom fade overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-20 w-full bg-gradient-to-t to-transparent from-fd-background" />

        <AnimatedIcons />
      </div>
    </HomeLayout>
  );
}
