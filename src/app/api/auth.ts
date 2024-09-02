export async function login(email: string, password: string) {
  const formData = new URLSearchParams();
  formData.append("email", email);
  formData.append("password", password);

  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  return await response.json();
}
