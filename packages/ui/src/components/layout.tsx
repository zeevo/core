import { cn } from "../lib/cn";

interface RootLayoutProps {
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function Layout({
  children,
  header,
  footer,
  className,
}: RootLayoutProps) {
  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        className
      )}
    >
      <div className="relative flex min-h-screen flex-col">
        {header}
        <div className="flex-1 flex flex-col">{children}</div>
        {footer}
      </div>
    </div>
  );
}
