import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type GlassCardProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function GlassCard<T extends ElementType = "div">({
  as,
  children,
  className = "",
  ...props
}: GlassCardProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={`rounded-[1.5rem] border border-[#A78BFA]/25 bg-white/[0.06] shadow-xl shadow-purple-950/25 backdrop-blur-xl ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
