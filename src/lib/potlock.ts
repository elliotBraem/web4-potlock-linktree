import { useWallet } from "@/contexts/near";
import { parseNearAmount } from "@near-js/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { THIRTY_TGAS } from "../wallets/near-wallet";
import { getProviderByNetwork, view } from "@near-js/client";

export const POTLOCK_DONATE_CONTRACT_ID = {
  mainnet: "donate.potlock.near",
  testnet: "donate.potlock.testnet"
};

export function useGetDonations({ recipientId }: { recipientId?: string }) {
  const { networkId } = useWallet();

  return useQuery({
    queryKey: ["donations", recipientId],
    queryFn: async () => {
      console.log("getting donations");
      const donations = await view<any>({
        account: POTLOCK_DONATE_CONTRACT_ID[networkId],
        method: "get_donations_for_recipient",
        args: {
          recipient_id: recipientId
        },
        deps: { rpcProvider: getProviderByNetwork(networkId) }
      });
      console.log(donations);
      return donations;
    }
  });
}

export function useDonate({ closeModal }: { closeModal: () => void }) {
  const { networkId, wallet } = useWallet();

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
        const deposit = parseNearAmount(donationAmount.toString());

        const result = wallet?.signAndSendTransaction({
          contractId: POTLOCK_DONATE_CONTRACT_ID[networkId],
          actions: [
            {
              type: "FunctionCall",
              params: {
                methodName: "donate",
                args: { recipient_id: recipientId },
                gas: THIRTY_TGAS,
                deposit: deposit!
              }
            }
          ]
        });
        return result; // Make sure the function returns a value/promise
      } catch (error) {
        console.error("Error in mutation:", error);
        throw error;
      }
    }
  });
}
