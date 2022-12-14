export default function Nav() {
  return (
    <div className="bg-gradient-to-b from-slate-900 flex w-full justify-center">
      <div className="flex justify-between items-center max-w-3xl w-full">
        <a
          href="./"
          className="text-2xl font-semibold transition hover:drop-shadow-[0_2px_20px_rgba(241,245,249,0.5)]"
        >
          noted.
        </a>

        <div className="flex gap-2">
          <a
            href="#"
            className="text-sm font-medium px-3 py-2 rounded-md transition hover:bg-slate-100/10 active:bg-slate-100/[.15]"
          >
            team
          </a>

          <button className="text-sm font-medium px-3 py-2 ring-1 rounded-md ring-slate-100 transition hover:bg-slate-100/10 active:bg-slate-100/[.15]">
            log in &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
