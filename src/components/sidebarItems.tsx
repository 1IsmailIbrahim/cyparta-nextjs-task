import Image from "next/image";

export type SidebarItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
  subItems?: SidebarItem[];
};

export const sidebarItems: SidebarItem[] = [
  {
    href: "#",
    label: "Dashboard",
    icon: (
      <Image
        src="/dashboard.svg"
        alt="dashboard Logo"
        className="mr-3"
        width={21}
        height={19}
      />
    ),
  },
  {
    href: "#",
    label: "Employees",
    icon: (
      <Image
        src="/employees.svg"
        alt="employees Logo"
        className="mr-3"
        width={24}
        height={24}
      />
    ),
    subItems: [
      {
        href: "#",
        label: "Profile",
        icon: (
          <Image
            src="/user.svg"
            alt="user Logo"
            className="mr-3"
            width={21}
            height={19}
          />
        ),
      },
      {
        href: "#",
        label: "Attendance",
        icon: (
          <Image
            src="/calendar.svg"
            alt="calendar Logo"
            className="mr-3"
            width={21}
            height={19}
          />
        ),
      },
      {
        href: "#",
        label: "Tasks",
        icon: (
          <Image
            src="/task.svg"
            alt="task Logo"
            className="mr-3"
            width={21}
            height={19}
          />
        ),
      },
    ],
  },
  {
    href: "#",
    label: "Payroll",
    icon: (
      <Image
        src="/payroll.svg"
        alt="payroll Logo"
        className="mr-3"
        width={21}
        height={19}
      />
    ),
  },
  {
    href: "#",
    label: "Holidays",
    icon: (
      <Image
        src="/holidays.svg"
        alt="holidays Logo"
        className="mr-3"
        width={21}
        height={19}
      />
    ),
  },
  {
    href: "#",
    label: "Advanced Payment",
    icon: (
      <Image
        src="/payment.svg"
        alt="Payment Logo"
        className="mr-3"
        width={21}
        height={19}
      />
    ),
  },
];
