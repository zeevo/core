interface SiteFooter {
  children?: React.ReactNode;
}

export function SiteFooter({ children }: SiteFooter) {
  return <footer className="py-6 md:px-8 md:py-0">{children}</footer>;
}
