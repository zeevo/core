import { DocsSidebarNav } from "@/components/sidebar-nav";
import { SidebarNavItem } from "@/types/nav";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { DashboardTableOfContents } from "./toc";
import { TableOfContents } from "@/lib/toc";

interface DocsLayoutProps {
  children: React.ReactNode;
  items: SidebarNavItem[];
  toc?: TableOfContents;
}

export function DocsLayout({ children, items, toc }: DocsLayoutProps) {
  return (
    <div className="border-b">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
            <DocsSidebarNav items={items} />
          </ScrollArea>
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">{children}</div>
          {toc && (
            <div className="hidden text-sm xl:block">
              <div className="sticky top-16 -mt-10 pt-4">
                <ScrollArea className="pb-10">
                  <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
                    <DashboardTableOfContents toc={toc} />
                  </div>
                </ScrollArea>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
