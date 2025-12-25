import { cookies } from "next/headers";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return <p>Please login first.</p>;
  }
  const res = await fetch(`${process.env.BASE_URL}/api/me`, {
    headers: {
      cookie: `token=${token}`,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    return <p>Failed to fetch user profile</p>;
  }
  const data = await res.json();
  const user = data.user;
  return (
    <div>
      <h1>Welcome, {user.fullName}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
