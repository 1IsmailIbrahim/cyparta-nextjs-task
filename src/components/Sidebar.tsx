// src/components/Sidebar.tsx
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  LayoutDashboard,
  Users,
  Activity,
  Workflow,
  Check,
  Calendar,
  CreditCard,
} from "lucide-react";
import Image from "next/image";
import image from "/public/logo.png";

export default function Sidebar() {
  return (
    <aside className="w-64 pb-8 bg-[#F9F9F9] border rounded-[40px]">
      <Image
        src={image}
        alt="Cyparia Software Empire"
        width={247}
        height={158}
      />
      <nav className="flex flex-col space-y-2">
        <Link
          href="#"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          prefetch={false}
        >
          <LayoutDashboard className="w-5 h-5 mr-3" />
          Dashboard
        </Link>
        <div className="flex flex-col">
          <Link
            href="#"
            className="flex items-center px-6 py-3 text-[#EC232B] bg-red-100"
            prefetch={false}
          >
            <Users className="w-5 h-5 mr-3" />
            Employees
            <ChevronDown className="w-4 h-4 ml-auto" />
          </Link>
          <div className="flex flex-col ml-6 space-y-2">
            <Link
              href="#"
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
              prefetch={false}
            >
              <Users className="w-5 h-5 mr-3" />
              Profile
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
              prefetch={false}
            >
              <Activity className="w-5 h-5 mr-3" />
              Attendance
            </Link>
            <Link
              href="#"
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
              prefetch={false}
            >
              <Workflow className="w-5 h-5 mr-3" />
              Tasks
            </Link>
          </div>
        </div>
        <Link
          href="#"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          prefetch={false}
        >
          <Check className="w-5 h-5 mr-3" />
          Payroll
        </Link>
        <Link
          href="#"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          prefetch={false}
        >
          <Calendar className="w-5 h-5 mr-3" />
          Holidays
        </Link>
        <Link
          href="#"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          prefetch={false}
        >
          <CreditCard className="w-5 h-5 mr-3" />
          Advanced Payment
        </Link>
      </nav>
    </aside>
  );
}
