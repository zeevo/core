"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@zeevo/shadcn-ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@zeevo/shadcn-ui/alert-dialog";
import { Button } from "@zeevo/shadcn-ui/button";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start  w-full max-w-md">
        <h1>@zeevo/shadcn-ui</h1>
        <div className="mt-4">
          <h2>Accordian</h2>
          <Accordion type="single">
            <AccordionItem value="item-1">
              <AccordionTrigger>Accordian Trigger</AccordionTrigger>
              <AccordionContent>Accordian Content</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mt-4">
          <h2>Alert Dialog</h2>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
