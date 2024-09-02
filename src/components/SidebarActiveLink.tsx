import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";

type ActiveLinkProps = {
  href: string;
  label: string;
  activeIcon: string;
  inactiveIcon: string;
  width?: number;
  height?: number;
};

const ActiveLink = ({
  href,
  label,
  activeIcon,
  inactiveIcon,
  width = 21,
  height = 19,
}: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <a href={href} className="flex items-center">
      <Image
        src={isActive ? activeIcon : inactiveIcon}
        alt={`${label} Logo`}
        className="mr-3"
        width={width}
        height={height}
      />
      {label}
    </a>
  );
};

export default ActiveLink;
