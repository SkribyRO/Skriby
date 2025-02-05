import { useEffect } from "react";
import { useRouter } from "next/router";

export default function DiscordRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("https://discord.com/invite/iced");
  }, []);

  return null;
}