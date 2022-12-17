import pocketbaseEs from "pocketbase";
import { useEffect, useState } from "react";

export async function createNote(title, content) {
  const pb = new pocketbaseEs("http://localhost:8090");

  try {
    await pb.collection("noots").create({
      user: pb.authStore.model.id,
      title: title || "untitled noot.",
      content: content,
    });
  } catch (error) {
    alert("couldn't create noot.");
  }
}

export async function editNote(id, note) {
  const pb = new pocketbaseEs("http://localhost:8090");

  try {
    const data = {
      user: pb.authStore.model.id,
      ...note,
    };

    await pb.collection("noots").update(id, data);
  } catch (error) {
    alert("couldn't update noot.");
  }
}

export async function deleteNote(id) {
  const pb = new pocketbaseEs("http://localhost:8090");

  try {
    await pb.collection("noots").delete(id);
  } catch (error) {
    alert("couldn't delete noot.");
  }
}

export function useNotes(auth) {
  const [notes, setNotes] = useState([]);
  const pb = new pocketbaseEs("http://localhost:8090");

  useEffect(() => {
    fetchNotes();

    // code for handling realtime influenced by one of mike's personal projects
    // ex. https://github.com/mploythai/hot-discord-cards/blob/main/utils/get-card-data.js
    pb.collection("noots").subscribe("*", () => {
      fetchNotes();
    });

    return () => pb.collection("noots").unsubscribe("*");
    // eslint-disable-next-line
  }, [auth]);

  async function fetchNotes() {
    try {
      const notes = await pb.collection("noots").getFullList(200, {
        sort: "-created",
      });

      if (notes) setNotes(notes);
    } catch (error) {
      if (!notes) alert("couldn't fetch noots.");
    }
  }

  return { notes };
}
