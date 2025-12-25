import Link from "next/link";
import React from "react";

const TabItem = ({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: string;
}) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-1 py-2 text-muted-foreground"
    >
      <span>{icon}</span>
      {label}
    </Link>
  );
};

export default TabItem;
