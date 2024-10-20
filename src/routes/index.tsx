import Compose from "@/components/social/compose";
import Feed from "@/components/social/feed";
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
