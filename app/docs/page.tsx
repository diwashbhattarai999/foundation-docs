import type { Route } from "./+types/page";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { source } from "@/source";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { executeMdxSync } from "@fumadocs/mdx-remote/client";
import type { PageTree } from "fumadocs-core/server";
import { createCompiler } from "@fumadocs/mdx-remote";
import * as path from "node:path";

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
      tree={tree as PageTree.Root}
    >
      <DocsPage toc={toc}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <Mdx components={defaultMdxComponents} />
        </DocsBody>
      </DocsPage>
    </DocsLayout>
  );
}
