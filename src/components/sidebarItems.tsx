export type SidebarItem = {
  href: string;
  label: string;
  activeIcon: string;
  inactiveIcon: string;
  subItems?: SidebarItem[];
};

export const sidebarItems: SidebarItem[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    activeIcon: "/dashboard-active.svg",
    inactiveIcon: "/dashboard.svg",
  },
  {
    href: "",
    label: "Employees",
    activeIcon: "/employees-active.svg",
    inactiveIcon: "/employees.svg",
    subItems: [
      {
        href: "/employees/profile",
        label: "Profile",
        activeIcon: "/user.svg",
        inactiveIcon: "/user.svg",
      },
      {
        href: "/employees/attendance",
        label: "Attendance",
        activeIcon: "/calendar.svg",
        inactiveIcon: "/calendar.svg",
      },
      {
        href: "/employees/tasks",
        label: "Tasks",
        activeIcon: "/task.svg",
        inactiveIcon: "/task.svg",
      },
    ],
  },
  {
    href: "",
    label: "Payroll",
    activeIcon: "/payroll.svg",
    inactiveIcon: "/payroll.svg",
  },
  {
    href: "",
    label: "Holidays",
    activeIcon: "/holidays.svg",
    inactiveIcon: "/holidays.svg",
  },
  {
    href: "",
    label: "Advanced Payment",
    activeIcon: "/payment.svg",
    inactiveIcon: "/payment.svg",
  },
];
