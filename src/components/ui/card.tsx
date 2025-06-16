import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`backdrop-blur-md bg-white/10 dark:bg-white/5 border border-gray-200 dark:border-card-border rounded-xl shadow-lg p-6 bg-clip-padding ${className}`}
      {...props}
    />
  );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className = "", ...props }: CardContentProps) {
  return (
    <div className={`${className}`} {...props} />
  );
}
