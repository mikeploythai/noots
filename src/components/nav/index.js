import { logOut } from "../api/auth-functions";
import LoginButton from "./login-button";
import SignupButton from "./signup-button";

export default function Nav({ auth, setAuth }) {
  return (
    <div className="fixed top-0 left-0 flex w-full justify-center p-6 bg-gradient-to-b from-slate-900 z-10">
      <div className="flex max-w-3xl w-full justify-between items-center gap-2 text-slate-100">
        <a
          href="./"
          className="text-2xl font-semibold transition hover:drop-shadow-[0_0_30px_rgb(241,245,249)]"
        >
          noots.
        </a>
        <div className="flex text-xs font-medium gap-2">
          {!auth ? (
            <>
              <LoginButton setAuth={setAuth} />
              <SignupButton setAuth={setAuth} />
            </>
          ) : (
            <button
              className="px-4 py-2 text-slate-900 bg-slate-100 border border-slate-100 rounded-full transition hover:text-slate-100 hover:border-red-500 hover:bg-red-500 active:text-slate-100 active:border-red-500 active:bg-red-600"
              onClick={() => logOut(setAuth)}
            >
              log out
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
