import * as path from "node:path";
import { createCompiler } from "@fumadocs/mdx-remote";
import { executeMdxSync } from "@fumadocs/mdx-remote/client";
import type { PageTree } from "fumadocs-core/server";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { BackgroundGlow } from "@/components/background-glow";
import { source } from "@/source";
import type { Route } from "./+types/page";

export function meta() {
  return [
    { title: "Foundation Docs" },
    {
      name: "description",
      content:
        "Foundation is your all-in-one guide to mastering Git, GitHub, Node.js, Frontend, Backend, and more.",
    },
  ];
}

const compiler = createCompiler({
  development: false,
});

export async function loader({ params }: Route.LoaderArgs) {
  const slugs = params["*"].split("/").filter((v) => v.length > 0);
  const page = source.getPage(slugs);
  if (!page) throw new Error("Not found");

  const compiled = await compiler.compileFile({
    path: path.resolve("content/docs", page.file.path),
    value: page.data.content,
  });

  return {
    page,
    compiled: compiled.toString(),
    tree: source.pageTree,
  };
}

export default function Page(props: Route.ComponentProps) {
  const { page, compiled, tree } = props.loaderData;
  const { default: Mdx, toc } = executeMdxSync(compiled);

  return (
    <DocsLayout
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <div className="size-6">
              <img
                src="/favicon-96x96.png"
                alt="Foundation Logo"
                className="mr-2 size-full object-cover rounded-md"
              />
            </div>
            Foundation
          </div>
        ),
      }}
      githubUrl="https://github.com/diwashbhattarai999/foundation-docs"
      tree={tree as PageTree.Root}
    >
      <DocsPage
        toc={toc}
        // lastUpdate={new Date(page.data.)}
      >
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <Mdx components={defaultMdxComponents} />
        </DocsBody>
      </DocsPage>

      <BackgroundGlow />
    </DocsLayout>
  );
}
