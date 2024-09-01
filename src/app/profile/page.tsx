"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProfileField from "@/components/ProfileField";
import { Bell, FilePen, User, Briefcase, FileText, Lock } from "lucide-react";
import Link from "next/link";
import EditProfileDialog from "@/components/EditProfileDialog";
import avatar from "/public/avatar.png";
import Image from "next/image";
import { IProfile } from "@/interfaces";

const Profile = () => {
  const [profile, setProfile] = useState<IProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No authentication token found");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/profile/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data: IProfile = await response.json();
        setProfile(data);
      } catch (error) {
        console.error(error);
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);
  const handleEditProfile = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSaveProfile = async (profileData: FormData) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No authentication token found");
      return;
    }
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/profile/`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: profileData,
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to update profile:", errorData);
        throw new Error(
          `Error ${response.status}: ${errorData.detail || "Unknown error"}`
        );
      }
      const data: IProfile = await response.json();
      setProfile(data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>Error loading profile</div>;
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="flex p-8 gap-10">
        <Sidebar />
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Link href="#" className="hover:underline" prefetch={false}>
                Employees
              </Link>
              <span>&gt;</span>
              <Link href="#" className="hover:underline" prefetch={false}>
                Profile
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600" />
              <Avatar>
                <AvatarImage src={`${avatar}`} alt={profile.first_name} />
                <AvatarFallback>
                  {profile.first_name ? profile.first_name[0] : "U"}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <Avatar className="w-24 h-24 mr-6 rounded-md">
              <AvatarImage src={`${avatar}`} alt={profile.first_name} />
              <AvatarFallback>
                <Image src={avatar} width={100} height={100} alt={""} />
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">
                {profile.first_name || "First Name"}
              </h1>
              <p className="text-gray-600">{profile.bio || "Bio"}</p>
              <p className="text-gray-600">{profile.email || "Email"}</p>
            </div>
            <Button
              variant="default"
              className="ml-auto"
              onClick={handleEditProfile}
            >
              <FilePen className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
          <Tabs defaultValue="personal-info">
            <TabsList className="mb-6">
              <TabsTrigger value="personal-info">
                <User className="w-4 h-4 mr-2" />
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
            onSave={handleSaveProfile}
          />
        </div>
      </main>
    </div>
  );
};

export default Profile;
