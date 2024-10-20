import { getImageUrl, Profile } from "@/lib/social";
import { Avatar } from "./avatar";

export const ProfileView: React.FC<{ profile: Profile }> = ({ profile }) => (
  <div className="mb-4 bg-white p-4">
    <div
      className="h-40 rounded-t-lg bg-cover bg-center"
      style={{
        backgroundImage: `url(${getImageUrl(profile.backgroundImage)})`
      }}
    ></div>
    <div className="-mt-12 ml-4 flex items-center">
      <div className="h-24 w-24">
        <Avatar url={getImageUrl(profile.image)} alt={profile.name} />
      </div>
    </div>
    <div className="mt-4">
      <h2 className="text-purple text-2xl font-bold">{profile.name}</h2>
      <p className="mt-2 text-gray-600">{profile.description}</p>
    </div>
  </div>
);
