import { MixIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "@zeevo/shadcn-ui/button";
import { cn } from "@zeevo/ui/cn";
import { Layout } from "@zeevo/ui/layout";
import { MobileNav } from "@zeevo/ui/mobile-nav";
import { SiteFooter } from "@zeevo/ui/site-footer";
import { SiteHeader } from "@zeevo/ui/site-header";
import Link from "next/link";
import { MainNav } from "./main-nav";
import { ThemeToggle } from "./theme-toggle";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout
      header={
        <SiteHeader
          mobileNav={<MobileNav siteName="sitename" />}
          mainNav={<MainNav />}
          className="border-border"
        >
          <div className="flex gap-2">
            <Link href={"#"} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <MixIcon className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={"#"} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <MixIcon className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </div>
        </SiteHeader>
      }
      footer={
        <SiteFooter>
          <div className="container flex flex-col items-center justify-between gap-4 md:h-72 md:flex-row">
            footer
          </div>
        </SiteFooter>
      }
    >
      {children}
    </Layout>
  );
}
