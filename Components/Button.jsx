import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-700 text-white hover:bg-gray-800",
  outline: "border border-gray-400 text-white hover:bg-gray-900",
};

function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  const variantClasses = buttonVariants[variant] || buttonVariants.default;
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 text-sm",
    lg: "h-12 px-6 text-lg",
  }[size];

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2",
        variantClasses,
        sizeClasses,
        className
      )}
      {...props}
    />
  );
}

export { Button };
