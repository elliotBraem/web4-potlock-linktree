import { getAccountId, logout } from "@/lib/web4";
import { Link } from "@tanstack/react-router";
import { ProfileLine } from "./social/profile-line";

export default function Header() {
  const signedAccountId = getAccountId();

  const handleSignOut = () => {
    try {
      logout();
    } catch (e) {
      console.error("Wallet not configured properly");
    }
  };

  return (
    <header className="flex w-full items-center justify-between bg-white p-4 shadow-md">
      <Link to="/" className="flex items-center">
        {/* <span className="mr-2 text-4xl font-bold">👷</span> */}
        <h1 className="text-xl font-bold text-purple-800">Potlock Donations</h1>
      </Link>
      <div className="flex gap-4">
        {signedAccountId ? (
          <>
            <ProfileLine accountId={signedAccountId} />
            <button
              onClick={handleSignOut}
              className={
                "rounded-md bg-orange-400 px-4 py-2 text-white transition-colors duration-200 ease-in-out hover:bg-orange-400/80"
              }
            >
              sign out
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="rounded-md bg-orange-400 px-4 py-2 text-white transition-colors duration-200 ease-in-out hover:bg-orange-400/80"
          >
            Connect NEAR Account
          </Link>
        )}
      </div>
    </header>
  );
}
