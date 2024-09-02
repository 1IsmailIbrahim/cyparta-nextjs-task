import Link from "next/link";
import Image from "next/image";
import image from "/public/logo.png";
import { sidebarItems, SidebarItem } from "./sidebarItems";

export default function Sidebar() {
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
        {sidebarItems.map((item: SidebarItem) => (
          <div key={item.label}>
            <Link
              href={item.href}
              className={`flex items-center px-6 py-3 font-lexend font-medium ${
                item.subItems
                  ? "text-[#EC232B] bg-red-100 border-[#EC232B] border-l-4 rounded-r-full"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              prefetch={false}
            >
              {item.icon}
              {item.label}
              {item.subItems && (
                <Image
                  src="/arrow-b.svg"
                  alt="arrow-b Logo"
                  className="ml-auto"
                  width={19}
                  height={19}
                />
              )}
              {item.label == "Holidays" && (
                <Image
                  src="/arrow-right.svg"
                  alt="arrow-right Logo"
                  className="ml-auto"
                  width={19}
                  height={19}
                />
              )}
            </Link>
            {item.subItems && (
              <div className="flex flex-col ml-6 space-y-2">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.label}
                    href={subItem.href}
                    className="flex items-center px-6 py-3 font-lexend text-[#7B7B7B] font-light hover:bg-gray-100"
                    prefetch={false}
                  >
                    {subItem.icon}
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
