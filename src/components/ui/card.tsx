import * as React from "react";

export function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`backdrop-blur-md bg-white/10 dark:bg-white/5 border border-gray-200 dark:border-card-border rounded-xl shadow-lg p-6 bg-clip-padding ${className}`}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${className}`} {...props} />
  );
}
