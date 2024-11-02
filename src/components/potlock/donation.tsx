import { getAccountId } from "@/lib/web4";
import { format } from "date-fns";
import Markdown from "react-markdown";
import { ProfileLine } from "../social/profile-line";
import DonateButton from "./donate-button";

interface DonationProps {
  id: number;
  donor_id: string;
  total_amount: string;
  ft_id: string;
  message: string | null;
  donated_at_ms: number;
  recipient_id: string;
  protocol_fee: string;
  referrer_id: string | null;
  referrer_fee: string | null;
}

export default function Donation({
  donor_id,
  total_amount,
  ft_id,
  message,
  donated_at_ms,
  recipient_id
}: DonationProps) {
  const signedAccountId = getAccountId(); // assuming this fetches the signed-in user ID
  const formattedDate = format(new Date(donated_at_ms), "PPpp");

  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-md">
      <ProfileLine accountId={donor_id} />
      {message && <Markdown className="mb-4">{message}</Markdown>}
      <p className="text-gray-700">
        Donated{" "}
        <strong>
          {parseFloat(total_amount) / 1e24} {ft_id.toUpperCase()}
        </strong>{" "}
        to <strong>{recipient_id}</strong> on {formattedDate}.
      </p>
      <ProfileLine accountId={recipient_id} />
      <div className="mt-2 flex flex-row gap-2">
        {signedAccountId && <DonateButton recipientId={recipient_id} />}
      </div>
    </div>
  );
}
