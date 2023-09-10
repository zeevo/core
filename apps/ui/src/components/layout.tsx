import { cn } from "@/lib/utils";
import {
  Layout,
  MobileNav,
  ModeToggle,
  SiteFooter,
  SiteHeader,
} from "@zeevo/ui";
import { Orbit } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { MainNav } from "./main-nav";
import { buttonVariants } from "./ui/button";

export function PageLayout({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme();
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
                <Orbit className="h-4 w-4" />
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
                <Orbit className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ModeToggle setTheme={setTheme} dropdownClassName="border-border" />
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
