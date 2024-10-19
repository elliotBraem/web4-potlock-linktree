import { useGetPosts } from "@/lib/social";
import { useEffect, useRef } from "react";
import Post from "./Post";

export default function Feed() {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetPosts(10, "desc");

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const loadMorePosts = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage(); // Fetch the next page
      }
    };

    observerRef.current = new IntersectionObserver(loadMorePosts, {
      rootMargin: "200px", // Trigger before reaching the bottom
    });

    const currentRef = observerRef.current;
    const sentinel = document.getElementById("sentinel");
    if (currentRef && sentinel) {
      currentRef.observe(sentinel);
    }

    return () => {
      if (currentRef && sentinel) {
        currentRef.unobserve(sentinel);
      }
    };
  }, [hasNextPage, fetchNextPage]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="space-y-4">
      {data?.pages.map((page) =>
        page.map((post, index) => (
          <Post key={index} {...post} />
        ))
      )}
      {isFetchingNextPage && <div>Loading more posts...</div>}
      <div id="sentinel" ref={observerRef} />
    </div>
  );
}
