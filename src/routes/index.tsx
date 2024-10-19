import Compose from "@/components/social/Compose";
import Feed from "@/components/social/Feed";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage
});

export default function HomePage() {
  return (
    <>
      <Compose />
      <Feed />
    </>
  );
}
