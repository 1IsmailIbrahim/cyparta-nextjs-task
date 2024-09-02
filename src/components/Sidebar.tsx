"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import image from "/public/logo.png";
import { sidebarItems, SidebarItem } from "./sidebarItems";

const Sidebar = () => {
  const pathname = usePathname();
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleItemClick = (label: string) => {
    setOpenItem((prev) => (prev === label ? null : label));
  };

  return (
    <aside className="hidden lg:block w-80 pb-8 bg-[#F9F9F9] border rounded-[40px]">
      <Image
        src={image}
        alt="Cyparia Software Empire"
        width={247}
        height={158}
        className="mx-auto"
      />
      <nav className="flex flex-col space-y-2">
        {sidebarItems.map((item: SidebarItem) => {
          const isActive =
            pathname === item.href ||
            (item.subItems &&
              item.subItems.some((subItem) =>
                pathname.startsWith(subItem.href)
              ));
          const isOpen = openItem === item.label;

          return (
            <div key={item.label}>
              <div
                className={`flex items-center px-6 py-3 font-lexend font-medium ${
                  isActive
                    ? "text-[#EC232B] bg-red-100 border-[#EC232B] border-l-4 rounded-r-full" // Style for the active item
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => handleItemClick(item.label)}
              >
                <Link href={item.href} className="flex items-center w-full">
                  <Image
                    src={isActive ? item.activeIcon : item.inactiveIcon}
                    alt={`${item.label} Logo`}
                    className="mr-3"
                    width={21}
                    height={19}
                  />
                  {item.label}
                  {item.label == "Holidays" && (
                    <Image
                      src={"/arrow-right.svg"}
                      alt="arrow Logo"
                      className={`ml-auto transform transition-transform duration-200 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                      width={19}
                      height={19}
                    />
                  )}
                </Link>
                {item.subItems && isActive && (
                  <Image
                    src={"/arrow-b.svg"}
                    alt="arrow Logo"
                    className={`ml-auto transform transition-transform duration-200 ${
                      isOpen ? "" : "-rotate-90"
                    }`}
                    width={19}
                    height={19}
                  />
                )}
                {item.subItems && !isActive && (
                  <Image
                    src={"/arrow-right.svg"}
                    alt="arrow Logo"
                    className={`ml-auto transform transition-transform duration-200 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                    width={19}
                    height={19}
                  />
                )}
              </div>
              {item.subItems && isOpen && (
                <div className="flex flex-col ml-6 space-y-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className={`flex items-center px-6 py-3 font-lexend text-[#7B7B7B] font-light hover:bg-gray-100 ${
                        pathname === subItem.href ? "bg-gray-100" : ""
                      }`}
                    >
                      <Image
                        src={
                          pathname === subItem.href
                            ? subItem.activeIcon
                            : subItem.inactiveIcon
                        }
                        alt={`${subItem.label} Logo`}
                        className="mr-3"
                        width={21}
                        height={19}
                      />
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};
export default Sidebar;
