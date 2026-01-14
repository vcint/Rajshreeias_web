import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary text-primary-foreground",
                secondary:
                    "border-transparent bg-secondary/10 text-secondary",
                destructive:
                    "border-transparent bg-destructive text-destructive-foreground",
                outline: 
                    "border-primary/20 text-primary",
                success:
                    "border-transparent bg-green-500/10 text-green-600",
                warning:
                    "border-transparent bg-yellow-500/10 text-yellow-600",
                live:
                    "border-red-500/30 bg-red-500/10 text-red-500 animate-pulse",
                glow:
                    "border-secondary/30 bg-secondary/10 text-secondary shadow-sm shadow-secondary/20",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
