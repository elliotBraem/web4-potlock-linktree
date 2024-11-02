import React, { useState } from "react";
import { Modal } from "../ui/modal";
import { DonateModal } from "./donate-modal";

interface DonateButtonProps {
  recipientId: string;
}

export const DonateButton: React.FC<DonateButtonProps> = ({ recipientId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="rounded-md bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
        onClick={() => setIsModalOpen(true)}
      >
        💰 Tip
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DonateModal
          recipientId={recipientId}
          closeModal={() => setIsModalOpen(false)}
        />
      </Modal>
    </>
  );
};

export default DonateButton;
