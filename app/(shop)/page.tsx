export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center gap-6 px-6 py-16">
      <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
        Personalized gifting
      </p>
      <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
        Gift Wagera
      </h1>
      <p className="text-muted-foreground max-w-xl text-lg">
        Buy individual gifts or build a custom bundle — box, products, wrapping,
        add-ons, and a personal message.
      </p>
      <div className="flex flex-wrap gap-3 pt-2">
        <a
          href="/products"
          className="bg-primary text-primary-foreground inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
        >
          Browse gifts
        </a>
        <a
          href="/build-a-bundle"
          className="border-border bg-background text-foreground hover:bg-muted inline-flex items-center justify-center rounded-md border px-5 py-2.5 text-sm font-medium transition-colors"
        >
          Build a bundle
        </a>
      </div>
    </main>
  );
}
