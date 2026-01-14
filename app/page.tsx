"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import BombGame from "./BombGame"; // Assuming you saved the previous code here

const GAMES = [
  {
    id: "bomb-defuse",
    title: "Stop the Bomb",
    description: "Cut the right wire before the timer hits zero.",
    difficulty: "Hard",
    icon: "💣",
    color: "from-red-600 to-black",
  },
  {
    id: "memory-match",
    title: "Neuro Link",
    description: "Match the patterns to sync the mainframe.",
    difficulty: "Medium",
    icon: "🧠",
    color: "from-blue-600 to-black",
  },
  {
    id: "speed-clicker",
    title: "Overclock",
    description: "How many cycles can you process in 10 seconds?",
    difficulty: "Easy",
    icon: "⚡",
    color: "from-yellow-500 to-black",
  },
];

export default function ArcadeDashboard() {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Entrance Animation
  useEffect(() => {
    gsap.from(".game-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power4.out",
    });
  }, []);

  if (activeGame === "bomb-defuse") {
    return (
      <div className="relative animate-in fade-in duration-500">
        <button 
          onClick={() => setActiveGame(null)}
          className="fixed top-6 left-6 z-50 rounded-full bg-white/10 px-6 py-2 font-bold backdrop-blur-md hover:bg-white/20 transition-all"
        >
          ← EXIT TO HUB
        </button>
        <BombGame />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8 md:p-16">
      {/* Header Section */}
      <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-sm font-black tracking-[0.5em] text-red-600 uppercase mb-2">Neural Network v2.0</h1>
          <h2 className="text-6xl font-bold tracking-tighter italic">MINI-GAME HUB</h2>
        </div>
        <div className="flex gap-8 border-l border-white/10 pl-8">
          <div>
            <p className="text-[10px] uppercase text-zinc-500 font-bold">Player Status</p>
            <p className="font-mono text-emerald-400 text-lg">ONLINE</p>
          </div>
          <div>
            <p className="text-[10px] uppercase text-zinc-500 font-bold">Credits</p>
            <p className="font-mono text-white text-lg">9,450</p>
          </div>
        </div>
      </header>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GAMES.map((game, index) => (
          <div
            key={game.id}
            ref={(el) => (cardsRef.current[index] = el)}
            onClick={() => setActiveGame(game.id)}
            className="game-card group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-1 transition-all hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            <div className={`relative h-full w-full rounded-[1.4rem] bg-gradient-to-br ${game.color} p-8`}>
              {/* Card Content */}
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="text-5xl">{game.icon}</span>
                  <span className="rounded-full bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/70 backdrop-blur-sm">
                    {game.difficulty}
                  </span>
                </div>
                
                <div>
                  <h3 className="mb-2 text-3xl font-black italic uppercase tracking-tighter">{game.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{game.description}</p>
                </div>
              </div>

              {/* Hover Effect Layer */}
              <div className="absolute inset-0 translate-y-full bg-gradient-to-t from-white/20 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
              
              {/* Play Button (Appears on Hover) */}
              <div className="absolute bottom-6 right-6 translate-y-12 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-xl">
                  ▶
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Locked Game Slots */}
        {[1, 2].map((i) => (
          <div key={i} className="game-card rounded-3xl border border-dashed border-white/5 bg-transparent p-8 flex items-center justify-center grayscale opacity-30">
            <p className="font-mono text-xs uppercase tracking-widest">Locked Expansion Slot</p>
          </div>
        ))}
      </div>

      {/* Decorative Background Effects */}
      <div className="fixed bottom-0 left-0 h-64 w-full bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none" />
      <div className="fixed top-0 right-0 p-10 pointer-events-none opacity-10">
        <div className="h-[400px] w-[400px] rounded-full border border-white/20 animate-pulse" />
      </div>
    </div>
  );
}