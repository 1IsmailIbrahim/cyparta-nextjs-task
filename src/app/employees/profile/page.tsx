import React from "react";
import { cookies } from "next/headers";
import { getProfileData } from "@/app/api/profile";
import Layout from "@/components/Layout";
import ProfileClient from "@/components/ProfileClient";

const ProfilePage = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return <div>Error: No token found. Please login again.</div>;
  }

  try {
    const profile = await getProfileData(token);
    return (
      <div className="min-h-screen bg-gray-50">
        <Layout>
          <ProfileClient profile={profile} />
        </Layout>
      </div>
    );
  } catch (error) {
    console.error("Error fetching profile:", error);
    return <div>Error loading profile data. Please try again later.</div>;
  }
};

export default ProfilePage;
