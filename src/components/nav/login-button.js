import { useState } from "react";
import { logIn } from "../api/auth-functions";
import Modal from "../modal";

export default function LoginButton({ setAuth }) {
  const [show, setShow] = useState(null);
  const [cred, setCred] = useState({
    username: "",
    password: "",
  });

  return (
    <>
      <button
        className="px-4 py-2 border border-slate-100 rounded-full transition hover:bg-slate-100/10 active:bg-slate-100/20"
        onClick={() => setShow({ active: true, type: "account" })}
      >
        log in
      </button>

      <Modal show={show} setShow={setShow}>
        <h1 className="w-full text-xl font-semibold bg-transparent truncate focus:outline-none">
          log in.
        </h1>

        <form
          className="flex flex-col h-full justify-between items-center"
          onSubmit={(e) => {
            e.preventDefault();
            logIn(cred.username, cred.password, setAuth);
          }}
        >
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col gap-4">
              <input
                placeholder="username"
                value={cred.username}
                onChange={(e) => {
                  setCred({ ...cred, username: e.target.value });
                }}
                className="px-4 py-2 text-slate-100 text-sm bg-slate-700/80 border border-slate-700 rounded-md transition hover:cursor-pointer hover:bg-slate-700 focus:outline-none focus-visible:bg-slate-700"
              />
              <input
                type="password"
                placeholder="password"
                value={cred.password}
                onChange={(e) => {
                  setCred({ ...cred, password: e.target.value });
                }}
                className="px-4 py-2 text-slate-100 text-sm bg-slate-700/80 border border-slate-700 rounded-md transition hover:cursor-pointer hover:bg-slate-700 focus:outline-none focus-visible:bg-slate-700"
              />
            </div>

            <input
              type="submit"
              value="log in"
              className="px-4 py-2 text-slate-900 text-sm font-medium bg-slate-100 border border-slate-100 rounded-full transition hover:cursor-pointer hover:bg-slate-100/90 active:bg-slate-100/80"
            />
          </div>

          <p className="text-xs font-semibold">noots. the only app.</p>
        </form>
      </Modal>
    </>
  );
}
