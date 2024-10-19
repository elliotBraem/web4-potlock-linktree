import React, { useState, useEffect } from 'react';
import { getLikes, likeItem, hasLike, Item } from '@/lib/social';
import { useWallet } from '@/contexts/near';

interface LikeButtonProps {
  item: Item;
  accountId: string;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ item, accountId }) => {
  const { wallet } = useWallet();
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
    await likeItem(wallet!, item, isLiked);
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
      className={`
        px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-/80 transition-colors
        duration-200 ease-in-out
        ${isLiked
          ? 'bg-red-100 text-red-600 hover:bg-red-200'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }
        ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      👍 Like ({likes})
    </button>
  );
};

export default LikeButton;