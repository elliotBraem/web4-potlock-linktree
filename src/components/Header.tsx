import { useWallet } from "@/contexts/near";
import { Link } from "@tanstack/react-router";
import { ProfileLine } from "./social/ProfileLine";

export default function Header() {
  const { wallet, signedAccountId } = useWallet();

  const handleSignOut = () => {
    try {
      wallet!.signOut();
    } catch (e) {
      console.error("Wallet not configured properly");
    }
  };

  return (
    <header className="flex w-full items-center justify-between bg-white p-4 shadow-md">
      <Link to="/" className="flex items-center">
        {/* <span className="mr-2 text-4xl font-bold">👷</span> */}
        <h1 className="text-xl font-bold text-purple-800">Decentralized Social</h1>
      </Link>
      <div className="flex gap-4">
        {signedAccountId ? (
          <>
            <ProfileLine accountId={signedAccountId} />
            <button
              onClick={handleSignOut}
              className={
                "hover:bg-orange-400/80 rounded-md bg-orange-400 px-4 py-2 text-white transition-colors duration-200 ease-in-out"
              }
            >
              sign out
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="hover:bg-orange-400/80 rounded-md bg-orange-400 px-4 py-2 text-white transition-colors duration-200 ease-in-out"
          >
            Connect NEAR Account
          </Link>
        )}
      </div>
    </header>
  );
}
