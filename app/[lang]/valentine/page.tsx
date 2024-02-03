"use client";
import Image from "next/image";
import { useState } from "react";

import bearFirstStep from "@/public/bearfirststep.gif";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Non",
      "Es-tu sûr(e) ?",
      "Vraiment sûr(e) ?",
      "Réfléchis encore !",
      "Dernière chance !",
      "Vraiment pas ?",
      "Tu pourrais le regretter !",
      "Réfléchis-y à nouveau !",
      "Es-tu absolument certaine ?",
      "Cela pourrait être une erreur !",
      "Aie arrête...",
      "Pq t'es aigrie comme ça wsh !",
      "Changement d'avis ?",
      "Est-ce ta réponse finale ?",
      "Tu me brises le cœur ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-20 flex h-screen flex-col items-center justify-center gap-4 sm:-mt-4">
      {yesPressed ? (
        <>
          <Image
            height={200}
            width={200}
            alt="bear-kiss"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="my-4 text-4xl font-bold">ouiiiiiiiiiiiiiiiii!!!</div>
        </>
      ) : (
        <>
          <Image height={200} width={200} alt="bear-kiss" src={bearFirstStep} />
          <h1 className="my-4 text-center text-2xl sm:text-4xl">
            Veux-tu être ma Valentine ?
          </h1>
          <button
            className={`rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 sm:hidden`}
            style={{ fontSize: yesButtonSize }}
            onClick={() => setYesPressed(true)}
          >
            Oui :3
          </button>
          <button
            onClick={handleNoClick}
            className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 sm:hidden"
          >
            {noCount === 0 ? "Non" : getNoButtonText()}
          </button>
          <div className="hidden items-center justify-start gap-4 sm:flex">
            <button
              className={`rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Oui :3
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Non" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
