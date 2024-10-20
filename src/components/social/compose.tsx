import { useCreatePost } from "@/lib/social";
import { useState } from "react";

export default function Compose() {
  const mutation = useCreatePost();

  const [text, setText] = useState("");

  const handleSubmit = async () => {
    mutation.mutate({ content: { text, type: "md" } });
  };

  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-md">
      <textarea
        className="w-full resize-none rounded-md border p-2 focus:border-purple-800 focus:ring focus:ring-purple-800 focus:ring-opacity-50"
        rows={3}
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        className="mt-2 rounded-md bg-purple-800 px-4 py-2 text-white transition-colors hover:bg-purple-800/80"
        onClick={handleSubmit}
      >
        Post
      </button>
    </div>
  );
}
