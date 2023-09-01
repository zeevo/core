import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  mainNav?: React.ReactNode;
  mobileNav?: React.ReactNode;
  commandMenu?: React.ReactNode;
  modeToggle?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export function SiteHeader({
  mainNav,
  mobileNav,
  commandMenu,
  children,
  className,
}: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur border-border",
        className
      )}
    >
      <div className="container flex h-14 items-center">
        {mainNav}
        {mobileNav}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {commandMenu}
          </div>
          <nav className="flex items-center">{children}</nav>
        </div>
      </div>
    </header>
  );
}
