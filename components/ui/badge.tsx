import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'border-[#2B4058] bg-[#122941] text-[#F1F5F9]',
        success: 'border-[#22C55E]/30 bg-[#22C55E]/10 text-[#F1F5F9]',
        warning: 'border-[#F59E0B]/30 bg-[#F59E0B]/10 text-[#F1F5F9]',
        cyan: 'border-[#38BDF8]/50 bg-[#0B1D32] text-[#38BDF8]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
