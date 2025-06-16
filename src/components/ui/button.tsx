import * as React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "secondary";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", asChild = false, variant = "default", ...props }, ref) => {
    const baseStyle =
      "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-[#111118]";

    const variants = {
      default: "bg-primary text-white hover:bg-primary/90 dark:bg-primary dark:text-white dark:hover:bg-primary/80",
      secondary: "bg-gray-200 text-black hover:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20",
    };

    if (asChild) {
      const { children, ...restProps } = props;
      return React.cloneElement(children as React.ReactElement, {
        className: `${baseStyle} ${variants[variant]} ${className}`,
        ...restProps
      });
    }

    return (
      <button
        ref={ref}
        className={`${baseStyle} ${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
