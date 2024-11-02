import { NETWORK_ID } from "@/config";
import { parseNearAmount } from "@near-js/utils";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { call, view } from "./web4";

export const POTLOCK_DONATE_CONTRACT_ID = {
  mainnet: "donate.potlock.near",
  testnet: "donate.potlock.testnet"
};



export function useGetAllDonations(limit: number = 10) {
  return useInfiniteQuery({
    queryKey: ["all-donations"],
    queryFn: async ({ pageParam = 0 }) => {
      console.log("Fetching donations from index", pageParam);
      const donations = await view(
        POTLOCK_DONATE_CONTRACT_ID[NETWORK_ID] as string,
        "get_donations",
        {
          from_index: pageParam,
          limit
        }
      );
      return donations;
    },
    getNextPageParam: (lastPage, allPages) => {
      // If the last page has fewer items than the limit, we're likely at the end
      if (lastPage.length < limit) return undefined;

      // Otherwise, compute the next "from_index" based on the current page
      return allPages.length * limit;
    },
    initialPageParam: 0
  });
}

export function useGetDonationsForRecipient({ recipientId }: { recipientId?: string }) {
  return useQuery({
    queryKey: ["donations", recipientId],
    queryFn: async () => {
      console.log("Getting donations");
      const donations = await view(
        POTLOCK_DONATE_CONTRACT_ID[NETWORK_ID] as string,
        "get_donations_for_recipient",
        { recipient_id: recipientId }
      );
      console.log(donations);
      return donations;
    }
  });
}

export function useDonate({ closeModal }: { closeModal: () => void }) {

  return useMutation({
    onSuccess: () => {
      closeModal();
    },
    mutationFn: async ({
      recipientId,
      donationAmount
    }: {
      recipientId: string;
      donationAmount: number;
    }) => {
      try {
        const deposit = parseNearAmount(donationAmount.toString()) || undefined;

        const result = await call(POTLOCK_DONATE_CONTRACT_ID[NETWORK_ID], "donate", { recipient_id: recipientId }, { deposit })
        return result; // Ensure the function returns a value/promise
      } catch (error) {
        console.error("Error in mutation:", error);
        throw error;
      }
    }
  });
}
