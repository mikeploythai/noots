import { useState } from "react";
import NewNote from "./new-note";
import ViewNotes from "./view-notes";

export default function Dashboard({ auth }) {
  const [show, setShow] = useState(null);

  return (
    <div className="flex w-full justify-center px-6">
      <div className="grid grid-cols-1 max-w-3xl w-full gap-4 text-slate-100 md:grid-cols-3 md:auto-rows-min">
        <NewNote show={show} setShow={setShow} auth={auth} />
        {!auth ? null : <ViewNotes show={show} setShow={setShow} />}
      </div>
    </div>
  );
}
