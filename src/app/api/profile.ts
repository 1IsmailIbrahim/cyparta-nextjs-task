export async function getProfileData(token: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/profile/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }

  return await response.json();
}
