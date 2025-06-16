import * as React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "secondary";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", asChild = false, variant = "default", ...props }, ref) => {
    const baseStyle =
      "relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 focus:outline-none overflow-hidden group";

    const variants = {
      default: "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105",
      secondary: "bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:scale-105",
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
