import { useEffect, useState } from "react";

export default function Loading() {
  // idea for loading screen from https://betterprogramming.pub/a-quick-and-easy-react-js-loading-screen-with-hooks-940feccd553f
  const [opacity, setOpacity] = useState("100");

  useEffect(() => {
    setTimeout(() => setOpacity("0"), 2000);
  }, []);

  return (
    <div
      className={`flex flex-col gap-2 h-screen justify-center items-center text-center text-slate-100 transition opacity-${opacity}`}
    >
      <h1 className="text-2xl font-semibold min-[480px]:text-4xl">noots.</h1>
      <p className="text-xs font-medium min-[480px]:text-md">the only app.</p>
    </div>
  );
}
