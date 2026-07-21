import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-sans font-medium transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40 disabled:pointer-events-none disabled:bg-btn-disabled disabled:text-btn-disabled-fg disabled:opacity-100 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary: "bg-btn-primary text-text-on-brand hover:bg-btn-primary-hover",
        secondary:
          "bg-btn-secondary text-btn-secondary-fg hover:bg-btn-secondary-hover",
        inverted:
          "bg-btn-inverted text-text-on-inverse hover:bg-btn-inverted-hover",
        outlined:
          "border border-border-strong bg-transparent text-text-primary hover:bg-bg-hover",
        ghost: "bg-transparent text-text-primary hover:bg-bg-hover",
        tertiary: "bg-brand-tertiary text-text-on-brand hover:opacity-90",
        destructive:
          "bg-destructive text-text-on-brand hover:opacity-90 focus-visible:ring-destructive/30",
        link: "rounded-md text-brand underline-offset-4 hover:underline",
      },
      size: {
        sm: "type-label h-9 rounded-pill px-4",
        md: "type-label h-11 rounded-pill px-6",
        lg: "type-label h-12 rounded-pill px-8 text-base",
        icon: "size-11 rounded-xl",
        "icon-sm": "size-9 rounded-lg",
        "icon-pill": "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type TButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, TButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);

Button.displayName = "Button";

export { Button, buttonVariants };
export type { TButtonProps };
