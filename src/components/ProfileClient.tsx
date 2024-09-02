"use client";

import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProfileField from "@/components/ProfileField";
import { Bell, Briefcase, FileText, Lock, UserRound } from "lucide-react";
import Image from "next/image";
import EditProfileDialog from "@/components/EditProfileDialog";
import avatar from "/public/avatar.png";
import { IProfile } from "@/interfaces";
import Navbar from "./ui/Navbar";

interface ProfileClientProps {
  profile: IProfile;
}

const ProfileClient = ({ profile: initialProfile }: ProfileClientProps) => {
  const [profile, setProfile] = useState<IProfile>(initialProfile);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleEditProfile = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

  const handleProfileUpdate = (updatedProfile: IProfile) => {
    setProfile(updatedProfile);
  };
  return (
    <div>
      <Navbar profile={profile} />
      <div className="flex items-center mb-6">
        <Avatar className="w-24 h-24 mr-6 rounded-md">
          <AvatarImage src={`${avatar}`} alt={profile.first_name} />
          <AvatarFallback>
            <Image src={`${profile.image}`} width={100} height={100} alt={""} />
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-lexend text-2xl font-bold">
            {profile.first_name || "First Name"}
          </h1>
          <p className="text-gray-600 flex">
            {
              <Image
                src="/business.svg"
                alt="business Logo"
                className="mr-1"
                width={18}
                height={18}
              />
            }
            {profile.bio || "Bio"}
          </p>
          <p className="text-gray-600 flex">
            {
              <Image
                src="/mail.svg"
                alt="mail Logo"
                className="mr-1"
                width={18}
                height={18}
              />
            }
            {profile.email || "Email"}
          </p>
        </div>
        <Button
          variant="default"
          className="ml-auto flex items-center space-x-2"
          onClick={handleEditProfile}
        >
          <Image
            src="/pen.svg"
            alt="pen Logo"
            className="w-4 h-4"
            width={18}
            height={18}
          />
          <span className="hidden md:block">Edit Profile</span>
        </Button>
      </div>
      <Tabs defaultValue="personal-info">
        <TabsList className="mb-24 sm:mb-16 gap-2 md:gap-0 md:mb-6 flex flex-wrap">
          <TabsTrigger value="personal-info">
            <UserRound className="w-4 h-4 mr-2" />
            Personal Information
          </TabsTrigger>
          <TabsTrigger value="professional-info">
            <Briefcase className="w-4 h-4 mr-2" />
            Professional Information
          </TabsTrigger>
          <TabsTrigger value="documents">
            <FileText className="w-4 h-4 mr-2" />
            Documents
          </TabsTrigger>
          <TabsTrigger value="account-access">
            <Lock className="w-4 h-4 mr-2" />
            Account Access
          </TabsTrigger>
        </TabsList>
        <TabsContent value="personal-info">
          <div className="grid grid-cols-2 gap-6">
            <ProfileField
              id="first_name"
              label="First Name"
              value={profile.first_name}
            />
            <ProfileField
              id="last_name"
              label="Last Name"
              value={profile.last_name}
            />
            <ProfileField
              id="phone"
              label="Mobile Number"
              value={profile.phone || ""}
            />
            <ProfileField
              id="email"
              label="Email Address"
              value={profile.email}
            />
            <ProfileField id="bio" label="Bio" value={profile.bio || ""} />
          </div>
        </TabsContent>
        <TabsContent value="professional-info">
          <p>Professional Information Content</p>
        </TabsContent>
        <TabsContent value="documents">
          <p>Documents Content</p>
        </TabsContent>
        <TabsContent value="account-access">
          <p>Account Access Content</p>
        </TabsContent>
      </Tabs>
      <EditProfileDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        profile={profile}
        onProfileUpdate={handleProfileUpdate}
      />
    </div>
  );
};

export default ProfileClient;
