import { type Session } from "next-auth";
import { type AppType } from "next/app";

import { ThemeProvider } from "@/components/providers";

import "@/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps,
}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
