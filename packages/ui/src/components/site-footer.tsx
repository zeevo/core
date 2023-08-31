interface SiteFooter {
  children?: string;
}

export function SiteFooter({ children }: SiteFooter) {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        {children}
      </div>
    </footer>
  );
}
