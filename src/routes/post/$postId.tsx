import { createFileRoute } from "@tanstack/react-router";
// import LikeButton from "./LikeButton";

export const Route = createFileRoute("/post/$postId")({
  component: PostPage
});

export default function PostPage() {
  // const [content, setContent] = useState("");

  // const item = {
  //   path: `${accountId}/post/main`,
  //   blockHeight,
  //   type: "social"
  // }

  // useEffect(() => {
  //   getPost(accountId, blockHeight).then((post) => {
  //     setContent(post);
  //   });
  // }, [accountId, blockHeight]);

  return (
    <div className="rounded-lg bg-white p-4 shadow">
      {/* <div className="flex items-center mb-2">
        <Link
          to={`/profile/${accountId}`}
          className="font-bold text-blue-500 hover:text-blue-600"
        >
          {accountId}
        </Link>
      </div> */}
      {/* <p>{content.text}</p>
      <div className="mt-2 flex space-x-4">
        <LikeButton item={item} />
        <button className="text-gray-500 hover:text-blue-500">Comment</button>
        <button className="text-gray-500 hover:text-blue-500">Share</button>
      </div> */}
    </div>
  );
}
