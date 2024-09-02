"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { List } from "lucide-react";
import Link from "next/link";
import { SidebarItem } from "./sidebarItems";
import { useState, useEffect } from "react";

interface DropdownMenuProps {
  sidebarItems: SidebarItem[];
}

const MyDropdownMenu = ({ sidebarItems }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button className="p-2 md:flex lg:hidden" onClick={toggleMenu}>
          <List className="w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {sidebarItems.map((item) => (
          <div key={item.label} className="">
            <DropdownMenuItem className="flex items-center">
              <Link
                href={item.href}
                prefetch={false}
                className="flex items-center"
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
            {item.subItems && item.subItems.length > 0 && (
              <div className="ml-3 mt-1 w-full">
                {item.subItems.map((subItem) => (
                  <DropdownMenuItem
                    key={subItem.label}
                    className="flex items-center"
                  >
                    <Link
                      href={subItem.href}
                      prefetch={false}
                      className="flex items-center"
                    >
                      {subItem.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            )}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MyDropdownMenu;
