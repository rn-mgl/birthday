"use client";

import React from "react";
import Confetti from "react-confetti";
import bg from "../../public/hehehe.mp3";

const Surprise = () => {
  const [page, setPage] = React.useState(1);

  const handleNextPage = () => {
    setPage((prev) => (prev + 1 > 100 ? 100 : prev + 1));
  };

  const handlePrevPage = () => {
    setPage((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  const audioRef = React.useRef<HTMLAudioElement>(null);

  if (audioRef.current) {
    audioRef.current.volume = 0.5;
  }

  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-10">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        className="fixed top-0 left-0 w-full h-full"
      />

      <div className="flex items-center justify-center flex-col gap-6 text-center">
        <p className="text-2xl font-extrabold text-white drop-shadow-md">
          {page === 1
            ? "Happy Birthday"
            : page === 2
            ? "You're 22 na"
            : page === 3
            ? "Hope you have a"
            : page === 20
            ? "<3"
            : page === 40
            ? "Sending"
            : page === 100
            ? "Friendly"
            : null}
        </p>
        <p
          className="text-5xl font-extrabold drop-shadow-md animate-bounce
                    bg-clip-text bg-gradient-to-br from-emerald-800 to-emerald-300
                    text-transparent"
        >
          {page === 1
            ? "Micks!"
            : page === 2
            ? "Ate Mickah"
            : page === 3
            ? "Great Day"
            : page === 20
            ? "Lovelots"
            : page === 40
            ? "Hugs"
            : page === 100
            ? "Mwah"
            : null}
        </p>
      </div>

      <div className="w-full flex items-center justify-center gap-2">
        {page > 1 ? (
          <button
            onClick={handlePrevPage}
            className="bg-white p-4 rounded-md font-bold active:bg-black active:text-white"
          >
            Back
          </button>
        ) : null}

        {page >= 100 ? null : (
          <button
            onClick={handleNextPage}
            className="bg-white p-4 rounded-md font-bold active:bg-black active:text-white"
          >
            Next
          </button>
        )}
      </div>

      <audio ref={audioRef} autoPlay={true} src={bg} loop={true} />
    </div>
  );
};

export default Surprise;
