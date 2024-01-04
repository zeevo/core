"use client";
import { MixIcon } from "@radix-ui/react-icons";
import { cn } from "@zeevo/ui/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <MixIcon className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">Site Name</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Documentation
        </Link>
      </nav>
    </div>
  );
}
