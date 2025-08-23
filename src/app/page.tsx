import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      Hello Test
      <Button onClick={() => router.push("/login")}>Login</Button>
    </>
  );
}
