import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className"> {
  to: string;
  activeClassName?: string;
  pendingClassName?: string;
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string);
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === to;

    // Support function className from React Router or string className
    const computedClassName = typeof className === "function"
      ? className({ isActive, isPending: false })
      : cn(className, isActive && activeClassName);

    return (
      <Link
        ref={ref}
        href={to}
        className={computedClassName}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
