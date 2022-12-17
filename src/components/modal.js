import { createPortal } from "react-dom";
import { createNote, deleteNote, editNote } from "./api/note-functions";

export default function Modal({
  id,
  show,
  setShow,
  note,
  resetFields,
  children,
}) {
  if (!show) return null;
  else document.body.style.overflow = "hidden";

  if (show.active === true) {
    return (
      <>
        {/* referenced React docs for createPortal */}
        {/* https://beta.reactjs.org/apis/react-dom/createPortal */}
        {show.id === id &&
          createPortal(
            <div className="fixed inset-0 flex justify-center items-center text-slate-100 bg-slate-900/50 z-20">
              <div className="flex flex-col w-full h-full p-6 gap-4 bg-slate-800 min-[480px]:max-w-lg min-[480px]:max-h-[32rem] min-[480px]:h-4/5 min-[480px]:m-6 min-[480px]:rounded-md">
                <div className="flex w-full justify-between gap-2">
                  {children[0]}

                  {note && note.type === "edit" ? (
                    <button
                      className="px-4 py-2 text-xs font-medium border border-slate-100 rounded-full transition hover:border-red-500 hover:bg-red-500/10 active:border-red-500 active:bg-red-600/20"
                      onClick={() => deleteNote(id)}
                    >
                      delete
                    </button>
                  ) : null}

                  <button
                    className="px-4 py-2 text-slate-900 text-xs font-medium bg-slate-100 border border-slate-100 rounded-full transition hover:bg-slate-100/90 active:bg-slate-100/80"
                    onClick={() => {
                      if (note && note.type === "new" && note.title !== "") {
                        createNote(note.title, note.content);
                        resetFields();
                      } else if (note && note.type === "edit") {
                        editNote(id, note);
                        resetFields();
                      }

                      setShow(null);
                      document.body.removeAttribute("style");
                    }}
                  >
                    close
                  </button>
                </div>

                {children[1]}
              </div>
            </div>,
            document.body
          )}
      </>
    );
  }
}
