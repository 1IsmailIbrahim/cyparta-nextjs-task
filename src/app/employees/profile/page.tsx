import React from "react";
import { cookies } from "next/headers";
import { getProfileData } from "@/app/api/profile";
import Layout from "@/components/Layout";
import ProfileClient from "@/components/ProfileClient";
import { Metadata } from "next";
import logo from "/public/logo.png";

export const metadata: Metadata = {
  title: "Cyparta - Innovative IT Solutions and Services",
  description:
    "Cyparta provides comprehensive IT solutions including software development, security, UI/UX design, digital marketing, e-commerce, mobile app development, CRM, ERP, and more.",
  keywords:
    "software development, IT solutions, digital marketing, security, UI/UX design, website development, e-commerce, mobile app development, CRM, ERP",
  authors: [{ name: "Cyparta Team" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Cyparta - Innovative IT Solutions and Services",
    description:
      "Explore Cyparta's comprehensive IT solutions ranging from software development and security to digital marketing and e-commerce.",
    type: "website",
    url: "https://www.cyparta.com",
    siteName: "Cyparta",
    images: [
      {
        url: `${logo}`,
        width: 1200,
        height: 630,
        alt: "Cyparta - Innovative IT Solutions and Services",
      },
    ],
  },
};
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
