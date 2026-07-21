import Link from "next/link";

import { buttonVariants } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center gap-6 px-6 py-16">
      <Heading variant="overline" className="text-text-muted">
        Personalized Gifting
      </Heading>
      <Heading variant="display">Gift Wagera</Heading>
      <Paragraph className="max-w-xl" tone="secondary" variant="body">
        Buy individual gifts or build a custom bundle — box, products, wrapping,
        add-ons, and a personal message.
      </Paragraph>
      <div className="flex flex-wrap gap-3 pt-2">
        <Link
          href="/products"
          className={cn(buttonVariants({ variant: "primary", size: "md" }))}
        >
          Browse Gifts
        </Link>
        <Link
          href="/build-a-bundle"
          className={cn(buttonVariants({ variant: "outlined", size: "md" }))}
        >
          Build A Bundle
        </Link>
      </div>
    </main>
  );
}
