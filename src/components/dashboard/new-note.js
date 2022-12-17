import { useState } from "react";
import PencilIcon from "../icons/pencil-icon";
import Modal from "../modal";

export default function NewNote({ show, setShow, auth }) {
  const [note, setNote] = useState({ type: "new" });

  function resetFields() {
    setNote({ type: "new" });
  }

  return (
    <>
      <button
        className={`flex justify-center items-center w-full ${
          auth ? "h-full" : "h-min"
        } p-4 gap-2 bg-slate-100 border border-slate-100 rounded-md transition hover:bg-slate-100/90 active:bg-slate-100/80`}
        onClick={
          !auth
            ? () => alert("you must be logged in to create a noot.")
            : () => setShow({ active: true })
        }
      >
        <PencilIcon />
        <p className="text-slate-900 text-xs font-medium min-[480px]:text-sm">
          add a noot
        </p>
      </button>

      <Modal
        show={show}
        setShow={setShow}
        note={note}
        resetFields={resetFields}
      >
        <input
          className="w-full text-xl font-semibold bg-transparent truncate focus:outline-none"
          placeholder="add a title"
          value={note.title}
          onChange={(e) => {
            setNote({ ...note, title: e.target.value });
          }}
          autoFocus
        />
        <textarea
          className="h-full text-sm bg-transparent resize-none focus:outline-none"
          placeholder="start writing away!"
          value={note.content}
          onChange={(e) => {
            setNote({ ...note, content: e.target.value });
          }}
        />
      </Modal>
    </>
  );
}
