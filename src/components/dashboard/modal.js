import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Modal({ modal, close, note }) {
  if (!modal) return null;

  if (modal === note.id) {
    document.body.style.overflow = "hidden";

    return (
      <div className="fixed inset-0 flex justify-center items-center bg-slate-900/50 min-[480px]:p-8">
        <div className="flex flex-col w-full h-full gap-8 min-[480px]:max-w-5xl min-[480px]:h-4/5 p-8 min-[480px]:rounded-md bg-slate-800">
          <div className="flex w-full justify-between gap-4">
            <input
              className="w-full text-2xl font-semibold bg-transparent focus:outline-none"
              defaultValue={note.title}
            />
            <button
              className="flex items-center justify-center p-2 ring-1 rounded-md ring-slate-100 transition hover:bg-slate-100/10 active:bg-slate-100/[.15]"
              onClick={close}
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          </div>

          <textarea
            className="h-full text-base bg-transparent resize-none focus:outline-none"
            defaultValue={note.content}
          />
        </div>
      </div>
    );
  }
}
