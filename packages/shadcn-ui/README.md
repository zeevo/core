# @zeevo/shadcn-ui

Simply published [shadcn/ui](https://ui.shadcn.com/) components - New York style.

## Usage

These components are designed to be used in a TailwindCSS project.

```
npm i @zeevo/shadcn-ui
```

Add `@zeevo/shadcn-ui` to your `tailwind.config.ts`.

```js
module.exports = {
  darkMode: ["class"],
  content: [
    "./node_modules/@zeevo/shadcn-ui/dist/**/*.js",
  ]
}
```

## Use in your project

```js
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@zeevo/shadcn-ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

// from https://ui.shadcn.com/docs/components/accordion
```

## All components

All available components and their usage can be found on [the official docs](https://ui.shadcn.com/)
