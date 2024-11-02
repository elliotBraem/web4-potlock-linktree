import { getImageUrl } from "@/lib/social";
import { Link } from "@tanstack/react-router";
import { Avatar } from "./avatar";

export const ProfileLine: React.FC<{ accountId: string }> = ({ accountId }) => {
  const { data, isLoading, isError } = useProfile(accountId);

  const renderAvatar = () => {
    if (isLoading) {
      return (
        <div className="flex h-12 w-12 items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-t-2 border-purple-500"></div>
        </div>
      );
    }

    const imageUrl = data?.image ? getImageUrl(data.image) : null;

    return (
      <Avatar
        url={imageUrl || "/path/to/placeholder/image.png"} // Use a placeholder image
        alt={accountId}
      />
    );
  };

  return (
    <Link
      to={`/profile/${accountId}`}
      className="flex cursor-pointer items-center"
    >
      <div className="h-12 w-12">{renderAvatar()}</div>
      <span className="font-bold text-purple-800">{accountId}</span>
    </Link>
  );
};
