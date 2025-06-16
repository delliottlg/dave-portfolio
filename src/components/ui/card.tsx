import * as React from "react";

export function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`relative group ${className}`}
      {...props}
    >
      {/* Premium glass effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl" />
      
      {/* Border gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-800/50 via-gray-800/20 to-transparent p-[1px]">
        <div className="h-full w-full bg-black rounded-2xl" />
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/0 to-blue-600/0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500" />
      
      {/* Content */}
      <div className="relative z-10 p-8">
        {props.children}
      </div>
    </div>
  );
}

export function CardContent({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${className}`} {...props} />
  );
}
