import { Post as PostType } from "@/lib/social";
import LikeButton from "./like-button";
import { ProfileLine } from "./profile-line";
import { useWallet } from "@/contexts/near";
import Markdown from "react-markdown";

export default function Post(post: PostType) {
  const { signedAccountId } = useWallet();

  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-md">
      <ProfileLine accountId={post.accountId} />
      <Markdown className="mb-4">{post.content.text}</Markdown>
      {signedAccountId && (
        <LikeButton item={post.item} accountId={post.accountId} />
      )}
    </div>
  );
}
