import { useState } from "react";
import { useNotes } from "../api/note-functions";
import NewNote from "./new-note";
import ViewNotes from "./view-notes";

export default function Dashboard({ auth }) {
  const [show, setShow] = useState(null);
  const { notes } = useNotes(auth);

  return (
    <div className="flex w-full justify-center px-6">
      <div className="grid grid-cols-1 auto-rows-min max-w-3xl w-full gap-4 text-slate-100 md:grid-cols-3">
        <NewNote show={show} setShow={setShow} auth={auth} />
        {!auth ? null : (
          <ViewNotes notes={notes} show={show} setShow={setShow} />
        )}
      </div>
    </div>
  );
}
