"use client";
import { useState, useEffect, useRef } from "react";
import HeaderNav from "../components/ui/header";
import CardSection from "./card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [expanded, setExpanded] = useState(false);
  const [notes, setNotes] = useState<{ title: string; text: string }[]>([]);
  const [title, setTtile] = useState("");
  const [text, setText] = useState("");
  const noteRef = useRef<HTMLDivElement>(null); // fix: should be HTMLDivElement not HTMLElement
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (noteRef.current && !noteRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const addNote = () => {
    if (!title.trim() && !text.trim()) return;
    setNotes([{ title, text }, ...notes]);
    setTtile("");
    setText("");
    setExpanded(false);
  };

  return (
    <main className="flex flex-col gap-6 p-4">
      <HeaderNav />

      <section className="space-y-6">
        <h1 className="text-3xl font-semibold capitalize">
          Hello, this is my note
        </h1>

        <div className="flex justify-center">
          <div
            ref={noteRef}
            className="flex flex-col w-full max-w-xl gap-4 border rounded-md p-4 shadow-sm h-2/3"
            onClick={() => setExpanded(true)}
          >
            {expanded && (
              <input
                onChange={(e) => setTtile(e.target.value)}
                type="text"
                placeholder="Title"
                className="text-2xl font-semibold p-2 focus:outline-none"
              />
            )}

            <input
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Take a note..."
              className={`text-lg p-2 focus:outline-none ${
                expanded ? "" : "cursor-text"
              }`}
              onFocus={() => setExpanded(true)}
            />
            {expanded && (
              <div className="w-full h-full flex justify-end">
                <Button className="text-xs capitalize" onClick={addNote}>
                  add note
                </Button>
              </div>
            )}

            {expanded && (
              <div onFocus={() => setExpanded(true)}>
                <p className="underline capitalize">a</p>
              </div>
            )}
          </div>
        </div>
        {/* card secction */}
        <div>
          <CardSection
            notes={notes}
            setNotes={setNotes}
            editingIndex={editingIndex}
            setEditingIndex={setEditingIndex}
          />
        </div>
      </section>
    </main>
  );
}
