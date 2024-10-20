import { useDonate, useGetDonations } from "@/lib/potlock";
import { useState } from "react";

export const DonateModal: React.FC<{
  recipientId: string;
  closeModal: () => void;
}> = ({ recipientId, closeModal }) => {
  const [amount, setAmount] = useState<number>(0);
  const donate = useDonate({ closeModal });
  
  const handleDonate = () => {
    console.log(`Donating to ${recipientId}`);
    donate.mutate({ recipientId: recipientId, donationAmount: amount });
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Donate to {recipientId}</h2>
      <p className="mb-4">Enter the amount you'd like to donate:</p>
      <input
        type="number"
        className="mb-4 w-full rounded-md border p-2"
        placeholder="Amount"
        value={amount}
        onChange={(e) => {
          setAmount(parseInt(e.target.value));
        }}
      />
      <button
        className="w-full rounded-md bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-500/80 disabled:bg-green-800/80"
        disabled={!amount || amount <= 0}
        onClick={handleDonate}
      >
        Donate
      </button>
    </div>
  );
};
