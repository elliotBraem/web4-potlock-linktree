import DonationFeed from "@/components/potlock/donation-feed";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage
});

export default function HomePage() {
  return (
    <>
      {/* <Compose /> */}
      <DonationFeed />
      {/* <Feed /> */}
    </>
  );
}
