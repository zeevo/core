import { PageLayout } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@zeevo/ui";
import { Orbit } from "lucide-react";
import { type NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <div className="container relative">
        <PageHeader className="pb-8">
          <PageHeaderHeading>Page heading.</PageHeaderHeading>
          <PageHeaderDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </PageHeaderDescription>
          <div className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
            <Link href="/docs" className={cn(buttonVariants())}>
              Get Started
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href="#"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <Orbit className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </div>
        </PageHeader>
        <section className="gap-2 md:grid md:grid-cols-3">
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </section>
      </div>
    </PageLayout>
  );
};

function Placeholder() {
  return (
    <div>
      <h1 className="text-3xl">Lorem ipsum dolor</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}

export default Home;
