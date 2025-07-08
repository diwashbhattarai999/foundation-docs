import { HomeLayout } from "fumadocs-ui/layouts/home";
import { BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Foundation Docs - Internal Developer Wiki" },
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
      className="py-20 px-6 text-center"
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <img src="/favicon-96x96.png" alt="Foundation Logo" className="size-6 rounded-md" />
            <span className="font-bold text-lg">Foundation</span>
          </div>
        ),
      }}
    >
      <div className="max-w-4xl mx-auto mt-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to Foundation 📚</h1>

        <p className="text-fd-muted-foreground mb-8 mx-auto">
          A developer-first documentation hub to track and explore everything you've learned — from
          Git & GitHub basics to advanced Node.js, frontend frameworks, backend architecture, and
          deployment best practices.
        </p>

        <p className="text-fd-muted-foreground mb-8 mx-auto">
          Foundation is your go-to resource for mastering the tools and technologies that power our
          projects. Whether you're a seasoned developer or just starting out, you'll find valuable
          insights and practical guides to help you grow.
        </p>

        <Link
          className="text-sm flex w-fit items-center gap-2 mx-auto bg-fd-primary text-fd-primary-foreground rounded-full font-medium px-6 py-3 transition hover:opacity-90 group"
          to="/docs"
        >
          <BookOpen className="size-5" />
          Explore Docs
          <ChevronRight className="ml-2 size-5 mt-px group-hover:translate-x-2 transition ease-in-out" />
        </Link>
      </div>
    </HomeLayout>
  );
}
