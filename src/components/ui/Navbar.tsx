import React, { useState } from "react";
import Link from "next/link";
import MyDropdownMenu from "@/components/DropdownMenu";
import { sidebarItems } from "@/components/sidebarItems";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Image from "next/image";
import { Bell } from "lucide-react";
import { IProfile } from "@/interfaces";
interface ProfileClientProps {
  profile: IProfile;
}
import avatar from "/public/avatar.png";

const Navbar = ({ profile: initialProfile }: ProfileClientProps) => {
  const [profile, setProfile] = useState<IProfile>(initialProfile);

  return (
    <div className="flex items-center justify-between mb-6 font-inter font-semibold">
      <div className="flex items-center space-x-1 text-gray-600">
        <Link href="#" className="hover:underline " prefetch={false}>
          Employees
        </Link>
        <span>
          <Image
            src="/arrow-right.svg"
            alt="arrow-right Logo"
            width={24}
            height={24}
          />
        </span>
        <Link href="#" className="hover:underline" prefetch={false}>
          Profile
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant={"secondary"} size={"icon"}>
          <Bell className="w-6 h-6 text-gray-600 " />
        </Button>
        <Avatar>
          <AvatarImage src={`${avatar}`} alt={profile.first_name} />
          <AvatarFallback>
            <Image src={`${profile.image}`} width={40} height={40} alt={""} />
          </AvatarFallback>
        </Avatar>
        <MyDropdownMenu sidebarItems={sidebarItems} />
      </div>
    </div>
  );
};

export default Navbar;
