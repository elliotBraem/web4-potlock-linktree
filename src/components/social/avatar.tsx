const fallbackUrl =
  "https://ipfs.near.social/ipfs/bafkreibmiy4ozblcgv3fm3gc6q62s55em33vconbavfd2ekkuliznaq3zm";

export const Avatar: React.FC<{ url?: string; alt: string }> = ({
  url,
  alt
}) => (
  <img
    src={url ?? fallbackUrl}
    alt={alt}
    className="h-full w-full rounded-full border-4 border-white object-cover"
  />
);
