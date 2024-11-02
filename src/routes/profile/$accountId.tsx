import { ProfileView } from "@/components/social/profile";
import { profileQueryOptions } from "@/lib/social";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile/$accountId")({
  loader: async ({ params: { accountId }, context: { queryClient } }) => {
    return queryClient.ensureQueryData(profileQueryOptions(accountId))
  },
  errorComponent: ({ error }) => {
    return <div>{error.message}</div>;
  },
  component: ProfilePage
});

export function ProfilePage() {
  const data = Route.useLoaderData();

  return <ProfileView profile={data!} />;
}
