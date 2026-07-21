import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type THeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

type THeadingVariant = "display" | "h1" | "h2" | "h3" | "title" | "overline";

const VARIANT_CLASS: Record<THeadingVariant, string> = {
  display: "type-display",
  h1: "type-h1",
  h2: "type-h2",
  h3: "type-h3",
  title: "type-title",
  overline: "type-overline",
};

const VARIANT_DEFAULT_TAG: Record<THeadingVariant, THeadingLevel> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  title: "h3",
  // Overline is visual chrome, not a document heading — avoid h2-before-h1.
  overline: "p",
};

interface IHeadingProps {
  children: ReactNode;
  variant?: THeadingVariant;
  as?: THeadingLevel;
  className?: string;
  id?: string;
  invertColors?: boolean;
}

export function Heading({
  children,
  variant = "h1",
  as,
  className,
  id,
  invertColors = false,
}: IHeadingProps) {
  const Tag = (as ?? VARIANT_DEFAULT_TAG[variant]) as ElementType;

  return (
    <Tag
      id={id}
      className={cn(
        VARIANT_CLASS[variant],
        invertColors ? "text-text-on-brand" : "text-text-primary",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
