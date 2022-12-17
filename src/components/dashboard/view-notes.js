import { useState } from "react";
import Modal from "../modal";

export default function ViewNotes({ notes, show, setShow }) {
  const [edit, setEdit] = useState({ type: "edit" });

  function resetFields() {
    setEdit({ type: "edit" });
  }

  return (
    <>
      {notes.map((note) => {
        return (
          <div key={note.id} className="w-full">
            <button
              className="flex flex-col w-full h-32 p-4 gap-2 border border-slate-100 rounded-md transition hover:bg-slate-100/10 active:bg-slate-100/20"
              onClick={() => setShow({ active: true, id: note.id })}
            >
              <h1 className="w-full font-semibold text-base text-start truncate">
                {note.title || "untitled noot."}
              </h1>
              <p className="w-full text-xs text-start line-clamp-4">
                {note.content}
              </p>
            </button>

            <Modal
              id={note.id}
              show={show}
              setShow={setShow}
              note={edit}
              resetFields={resetFields}
            >
              <input
                className="w-full text-xl font-semibold bg-transparent truncate focus:outline-none"
                defaultValue={note.title || "untitled noot."}
                placeholder="add a title"
                onChange={(e) => {
                  setEdit({ ...edit, title: e.target.value });
                }}
                autoFocus
              />
              <textarea
                className="h-full text-sm bg-transparent resize-none focus:outline-none"
                defaultValue={note.content}
                placeholder="start writing away!"
                onChange={(e) => {
                  setEdit({ ...edit, content: e.target.value });
                }}
              />
            </Modal>
          </div>
        );
      })}
    </>
  );
}
