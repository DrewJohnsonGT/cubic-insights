import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { cn } from '~/utils/cn';

export const badgeVariants = cva(
  'border-border focus:ring-ring inline-flex items-center rounded-md border font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none',
  {
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
    variants: {
      size: {
        lg: 'h-input px-3 py-1 text-base',
        md: 'h-8 px-2 py-0.5',
        sm: 'px-2 text-sm',
      },
      variant: {
        default: 'bg-card text-card-foreground',
        primary:
          'border-primary-foreground bg-primary text-primary-foreground border',
        destructive: 'bg-destructive text-destructive-foreground',
        outline: 'text-foreground',
        secondary: 'bg-input-background text-foreground',
        success: 'border-success bg-success/20 text-success border',
        warning: 'border-amber-500 bg-amber-500/30',
      },
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, size, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ size, variant }), className)}
      {...props}
    />
  );
}

export { Badge };
