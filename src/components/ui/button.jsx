import React, { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Clean, stylish black button with swipe hover animation
const buttonVariants = cva(
  "inline-flex items-center justify-center relative select-none rounded-xl font-semibold transition-all duration-300 ease-in-out group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      size: {
        default: "h-10 px-6 text-sm",
        sm: "h-8 px-4 text-xs rounded-md",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg rounded-xl",
        icon: "h-10 w-10 p-2",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const Button = forwardRef(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          "bg-black text-white transition-transform hover:scale-[1.03] active:scale-95",
          "before:absolute before:inset-0 before:origin-left before:scale-x-0 before:rounded-xl before:bg-white before:opacity-10 before:transition-transform before:duration-300 group-hover:before:scale-x-100",
          buttonVariants({ size }),
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
