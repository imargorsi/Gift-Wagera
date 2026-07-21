import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";

export default function BuildABundlePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <Heading variant="h1">Build A Bundle</Heading>
      <Paragraph className="mt-3" tone="muted">
        Bundle builder flow: box → products → wrapping → add-ons → message →
        review.
      </Paragraph>
    </main>
  );
}
