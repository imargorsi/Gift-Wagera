import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type TParagraphVariant =
  "body" | "body-strong" | "label" | "caption" | "caption-xs";

const VARIANT_CLASS: Record<TParagraphVariant, string> = {
  body: "type-body",
  "body-strong": "type-body-strong",
  label: "type-label",
  caption: "type-caption",
  "caption-xs": "type-caption-xs",
};

type TParagraphTone = "primary" | "secondary" | "muted" | "brand" | "on-brand";

const TONE_CLASS: Record<TParagraphTone, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  muted: "text-text-muted",
  brand: "text-brand",
  "on-brand": "text-text-on-brand",
};

interface IParagraphProps {
  children: ReactNode;
  variant?: TParagraphVariant;
  tone?: TParagraphTone;
  className?: string;
  as?: "p" | "span";
}

export function Paragraph({
  children,
  variant = "body",
  tone = "secondary",
  className,
  as: Tag = "p",
}: IParagraphProps) {
  return (
    <Tag className={cn(VARIANT_CLASS[variant], TONE_CLASS[tone], className)}>
      {children}
    </Tag>
  );
}
