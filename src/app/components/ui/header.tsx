import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, Settings2 } from "lucide-react";
import { Settings } from "lucide-react";
import { RefreshCw } from "lucide-react";

export default function HeaderNav() {
  return (
    <header className="flex items-center justify-between w-full p-4 bg-white shadow-sm">
      <div className="flex items-center gap-6">
        <Menu className="w-5 h-5 text-gray-700 cursor-pointer" />

        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-6 h-6" />
          <p className="text-xl font-semibold capitalize">note</p>
        </div>

        <input
          type="text"
          placeholder="Search"
          className="w-56 px-3 py-2 text-sm bg-gray-100 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      {/* second half */}
      <div className="flex gap-4 items-center ">
        <RefreshCw></RefreshCw>
        <Settings></Settings>
        <Button className="rounded-full px-4 py-2 text-white bg-primary hover:bg-primary/90">
          P
        </Button>
      </div>
    </header>
  );
}
