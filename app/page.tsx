"use client";
import React from "react";
import Surprise from "../src/components/Surprise";

export default function Home() {
  const [canView, setCanView] = React.useState(false);

  const toggleCanView = () => {
    setCanView((prev) => !prev);
  };

  return (
    <main
      className={`w-full h-full ${
        canView
          ? "bg-gradient-to-br from-black to-neutral-700"
          : "bg-neutral-200"
      } flex items-center justify-center relative`}
    >
      {canView ? <Surprise /> : null}

      {canView ? null : (
        <div className="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex items-center justify-center">
          <button
            onClick={toggleCanView}
            className="w-36 p-4 rounded-md bg-white font-bold
                  shadow-md animate-bounce active:bg-black active:text-white "
          >
            Click Me
          </button>
        </div>
      )}
    </main>
  );
}
