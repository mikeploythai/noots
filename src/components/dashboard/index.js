import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "./modal";

export default function Dashboard() {
  const [modal, showModal] = useState(null);
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "awesome title 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    { id: 2, title: "awesome title 2", content: "this is a cool paragraph 2." },
    { id: 3, title: "awesome title 3", content: "this is a cool paragraph 3." },
    { id: 4, title: "awesome title 4", content: "this is a cool paragraph 4." },
    { id: 5, title: "awesome title 5", content: "this is a cool paragraph 5." },
  ]);

  function handleModalClose() {
    showModal(null);
    document.body.style.overflow = "auto";
  }

  return (
    <div className="flex w-full justify-center">
      <div className="grid grid-cols-1 gap-8 max-w-3xl w-full place-items-center md:grid-cols-3 min-[480px]:grid-cols-2">
        <button className="flex w-full h-full items-center justify-center p-4 ring-1 rounded-md ring-slate-100 transition hover:bg-slate-100/10 active:bg-slate-100/[.15]">
          <PlusIcon className="h-8 w-8" />
        </button>

        {notes.map((note) => {
          return (
            <div key={note.id} className="w-full">
              <button
                className="flex flex-col gap-1 w-full h-32 p-4 ring-1 text-start rounded-md ring-slate-100 transition hover:bg-slate-100/10 active:bg-slate-100/[.15]"
                onClick={() => showModal(note.id)}
              >
                <h1 className="text-base font-semibold line-clamp-1">
                  {note.title}
                </h1>
                <p className="text-xs line-clamp-4">{note.content}</p>
              </button>

              <Modal modal={modal} close={handleModalClose} note={note} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
