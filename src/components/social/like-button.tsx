import React, { useState, useEffect } from "react";
import { getLikes, likeItem, hasLike, Item } from "@/lib/social";

interface LikeButtonProps {
  item: Item;
  accountId: string;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ item, accountId }) => {
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLikes = async () => {
      const likesData = await getLikes(item);
      setLikes(Object.keys(likesData).length);
      setIsLiked(await hasLike(item, accountId));
      setIsLoading(false);
    };
    fetchLikes();
  }, [item, accountId]);

  const handleLike = async () => {
    setIsLoading(true);
    // await likeItem(wallet!, item, isLiked);
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleLike}
      disabled={isLoading}
      className={`hover:bg-orange-/80 rounded-md bg-orange-400 px-4 py-2 text-white transition-colors duration-200 ease-in-out ${
        isLiked
          ? "bg-red-100 text-red-600 hover:bg-red-200"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      } ${isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer"} `}
    >
      👍 Like ({likes})
    </button>
  );
};

export default LikeButton;
