"use client"
import { useState, useEffect, useRef } from "react";
import HeaderNav from "../components/ui/header";

export default function HomePage() {
  const [expanded, setExpanded] = useState(false);
  const noteRef = useRef<HTMLDivElement>(null); // fix: should be HTMLDivElement not HTMLElement

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
                type="text"
                placeholder="Title"
                className="text-2xl font-semibold p-2 focus:outline-none"
              />
            )}

            <input
              type="text"
              placeholder="Take a note..."
              className={`text-lg p-2 focus:outline-none ${
                expanded ? "" : "cursor-text"
              }`}
              onFocus={() => setExpanded(true)}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
