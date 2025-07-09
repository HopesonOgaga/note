"use client";

import React, { useState } from "react";

type Note = {
  title: string;
  text: string;
};

export default function CardSection({
  notes,
  setNotes,
  editingIndex,
  setEditingIndex,
}: {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  editingIndex: number | null;
  setEditingIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const [editText, setEditText] = useState("");

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditText(notes[index].text);
  };
  const saveEdit = (index: number) => {
    const updatedNotes = [...notes];
    updatedNotes[index].text = editText;
    setNotes(updatedNotes);
    setEditingIndex(null);
  };
  if (!notes || !notes.length) return null;
  return (
    <section className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
      {notes.map((note, index) => (
        <div
          key={index}
          className="break-inside-avoid bg-white border rounded-lg shadow-md p-4 break-words hover:shadow-lg transition-shadow duration-200 inline-block w-full"
        >
          {note.title && (
            <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
          )}

          {editingIndex === index ? (
            <>
              <textarea
                className="w-full p-2 border rounded text-sm text-gray-700 resize-none"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button
                className="mt-2 text-xs text-green-600 underline"
                onClick={() => saveEdit(index)}
              >
                Save
              </button>
            </>
          ) : (
            <p
              className="text-sm text-gray-700 whitespace-pre-line cursor-pointer"
              onClick={() => handleEdit(index)}
            >
              {note.text}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
