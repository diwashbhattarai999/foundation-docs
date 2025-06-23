import type { Route } from "./+types/home";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Foundation Docs" },
    {
      name: "description",
      content:
        "Foundation is your all-in-one guide to mastering Git, GitHub, Node.js, Frontend, Backend, and more.",
    },
  ];
}

export default function Home() {
  return (
    <HomeLayout
      className="text-center"
      nav={{
        title: "Foundation",
      }}
    >
      <div className="py-12">
        <h1 className="text-3xl font-bold mb-4">Welcome to Foundation 📚</h1>
        <p className="text-fd-muted-foreground mb-8 max-w-xl mx-auto">
          A developer-first documentation hub to track and explore everything you've learned — from
          Git & GitHub basics to advanced Node.js, frontend frameworks, backend architecture, and
          deployment best practices.
        </p>
        <Link
          className="text-sm bg-fd-primary text-fd-primary-foreground rounded-full font-medium px-6 py-3 transition hover:opacity-90"
          to="/docs"
        >
          Explore Docs
        </Link>
      </div>
    </HomeLayout>
  );
}
