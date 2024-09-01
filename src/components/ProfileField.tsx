import React from "react";
import { Label } from "@/components/ui/label";

interface ProfileFieldProps {
  id: string;
  label: string;
  value: string | undefined;
}

const ProfileField: React.FC<ProfileFieldProps> = ({ id, label, value }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-[#A2A1A8] text-sm font-light">
        {label}
      </Label>
      <div id={id} className="w-full rounded font-lexend text-[#16151C]">
        {value || ""}
      </div>
    </div>
  );
};

export default ProfileField;
