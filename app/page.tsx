"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

// Definición de los juegos disponibles en tu plataforma
const GAMES = [
  {
    id: "bomb-defuse",
    title: "Stop the Bomb",
    description: "Corta el cable correcto bajo presión extrema. 10 niveles de puro nerviosismo.",
    difficulty: "CRÍTICO",
    icon: "💣",
    color: "from-red-600 to-black",
    stats: "Récord: Nivel 10",
  },
  {
    id: "neuro-terminal",
    title: "Neuro-Terminal",
    description: "Hackeo de memoria. Memoriza códigos de acceso de 12 dígitos en milisegundos.",
    difficulty: "LEYENDA",
    icon: "📟",
    color: "from-blue-600 to-black",
    stats: "Coming Soon",
  },
  {
    id: "laser-breach",
    title: "Laser Breach",
    description: "Infiltración táctica. Esquiva una red de láseres en movimiento. Reflejos puros.",
    difficulty: "EXTREMO",
    icon: "🚨",
    color: "from-emerald-600 to-black",
    stats: "Coming Soon",
  },
  {
    id: "core-stabilizer",
    title: "Core Stabilizer",
    description: "Mantén la presión del reactor con clicks rítmicos perfectos. No dejes que vibre.",
    difficulty: "PESADILLA",
    icon: "⚛️",
    color: "from-purple-600 to-black",
    stats: "Coming Soon",
  },
  {
    id: "lock-picker",
    title: "Silent Entry",
    description: "Gira el dial y siente la vibración. Un milímetro fuera y la cerradura se bloquea.",
    difficulty: "DIFÍCIL",
    icon: "🔓",
    color: "from-amber-600 to-black",
    stats: "Coming Soon",
  },
  {
    id: "oxygen-leak",
    title: "Oxygen Leak",
    description: "Repara las tuberías de la estación espacial antes de que se agote el aire.",
    difficulty: "CRÍTICO",
    icon: "👨‍🚀",
    color: "from-cyan-600 to-black",
    stats: "Coming Soon",
  },
  {
    id: "dark-wire",
    title: "Dark Wire",
    description: "Guía una chispa a través de un circuito laberíntico sin tocar las paredes.",
    difficulty: "EXTREMO",
    icon: "🔌",
    color: "from-zinc-600 to-black",
    stats: "Coming Soon",
  },
  {
    id: "binary-overload",
    title: "Binary Overload",
    description: "Clasifica datos entrantes a velocidad luz. 0 o 1, no hay tiempo para pensar.",
    difficulty: "PESADILLA",
    icon: "💾",
    color: "from-orange-600 to-black",
    stats: "Coming Soon",
  },
  {
    id: "heart-monitor",
    title: "Flatline",
    description: "Mantén el ritmo cardíaco dentro de la zona segura. Un pulso fallido y pierdes.",
    difficulty: "EXTREMO",
    icon: "❤️‍🔥",
    color: "from-rose-600 to-black",
    stats: "Coming Soon",
  }
];

export default function ArcadePlatform() {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Animación de entrada de la plataforma
  useEffect(() => {
    if (!activeGame) {
      const tl = gsap.timeline();
      tl.fromTo(".header-ui", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" })
        .fromTo(".game-card", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.2, ease: "back.out(1.2)" }, "-=0.4");
    }
  }, [activeGame]);

  // Pantalla de juego activo
  if (activeGame === "bomb-defuse") {
    return (
      <div className="relative min-h-screen bg-black">
        <button 
          onClick={() => setActiveGame(null)}
          className="fixed top-6 left-6 z-[100] flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 font-bold text-white backdrop-blur-xl transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
        >
          <span>←</span> SALIR AL HUB
        </button>
        <div className="animate-in fade-in duration-700">
          
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-[#020202] text-white overflow-x-hidden font-sans">
      
      {/* Fondo Decorativo */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#000_100%)] -z-10" />
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 -z-10" />

      <main className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Header de la Plataforma */}
        <header className="header-ui flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-white/10 pb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              <p className="text-xs font-black tracking-[0.4em] text-zinc-500 uppercase">System Active v4.0</p>
            </div>
            <h1 className="text-7xl font-black italic tracking-tighter text-white">
              ARCADE<span className="text-red-600">HUB</span>
            </h1>
          </div>
          
          <div className="flex gap-12 font-mono">
            <div className="text-right">
              <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Total Score</p>
              <p className="text-2xl font-bold">48,290</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Rank</p>
              <p className="text-2xl font-bold text-red-500">ELITE</p>
            </div>
          </div>
        </header>

        {/* Rejilla de Juegos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {GAMES.map((game, index) => (
            <div
              key={game.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              onClick={() => game.id === "bomb-defuse" && setActiveGame(game.id)}
              className={`game-card group relative h-[450px] cursor-pointer rounded-[2rem] border border-white/10 bg-zinc-900/50 p-3 transition-all hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,0,0,0.1)] ${game.id !== 'bomb-defuse' ? 'opacity-60 grayscale' : ''}`}
            >
              <div className={`relative h-full w-full rounded-[1.7rem] bg-gradient-to-br ${game.color} p-8 flex flex-col justify-between overflow-hidden`}>
                
                {/* Glow de fondo en hover */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700" />

                <div className="flex justify-between items-start relative z-10">
                  <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 text-4xl shadow-xl">
                    {game.icon}
                  </div>
                  <span className="text-[10px] font-black bg-white/10 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-widest">
                    {game.difficulty}
                  </span>
                </div>

                <div className="relative z-10">
                  <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2">{game.stats}</p>
                  <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-3 leading-none">
                    {game.title}
                  </h3>
                  <p className="text-sm text-white/70 font-medium leading-relaxed mb-6">
                    {game.description}
                  </p>
                  
                  {game.id === 'bomb-defuse' ? (
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter bg-white text-black w-fit px-4 py-2 rounded-lg group-hover:scale-105 transition-transform">
                      Jugar Ahora <span>→</span>
                    </div>
                  ) : (
                    <div className="text-xs font-bold uppercase tracking-tighter text-white/30">
                      Próximamente...
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <footer className="mt-20 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[10px] font-bold tracking-[0.3em] uppercase">
          <p>© 2026 GameForge Systems</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Discord</span>
            <span className="hover:text-white cursor-pointer transition-colors">Leaderboard</span>
            <span className="hover:text-white cursor-pointer transition-colors">Settings</span>
          </div>
        </footer>
      </main>
    </div>
  );
}