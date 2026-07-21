import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";

export default function ProductsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <Heading variant="h1">Products</Heading>
      <Paragraph className="mt-3" tone="muted">
        Product listing will connect to WooCommerce via the Store API.
      </Paragraph>
    </main>
  );
}
