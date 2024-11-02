import { useGetAllDonations } from "@/lib/potlock";
import { useEffect, useRef } from "react";
import Donation from "./donation";

export default function DonationFeed() {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useGetAllDonations(10);

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const loadMoreDonations = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage(); // Fetch the next page of donations
      }
    };

    observerRef.current = new IntersectionObserver(loadMoreDonations, {
      rootMargin: "200px"
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

  if (isLoading) return <div>Loading donations...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="space-y-4">
      {data && data?.pages?.map((page, pageIndex) =>
        page?.map((donation, index) => (
          <Donation key={`${pageIndex}-${index}`} {...donation} />
        ))
      )}
      {isFetchingNextPage && <div>Loading more donations...</div>}
      <div id="sentinel" ref={observerRef} />
    </div>
  );
}
