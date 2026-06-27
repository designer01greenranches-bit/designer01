import React, { useState, useEffect, useRef } from "react";
import { PROJECTS } from "../data";
import { ThemeAccent, Project } from "../types";
import {
  Play,
  X,
  TrendingUp,
  Cpu,
  RefreshCw,
  Sliders,
  Volume2,
  Wallet,
  ArrowRightLeft,
  CheckCircle,
  Clock,
  Sparkles,
  Info,
  ExternalLink
} from "lucide-react";

interface ProjectsProps {
  activeAccent: ThemeAccent;
}

export default function Projects({ activeAccent }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSimulator, setActiveSimulator] = useState<string | null>(null);

  // 1. Zenith Analytics Simulator States (Mapped to Smart Irrigation Telemetry)
  const [analyticsMetric, setAnalyticsMetric] = useState<"cpu" | "req" | "errors" | "users">("users");
  const [analyticsData, setAnalyticsData] = useState<number[]>([45, 62, 53, 78, 85, 90, 82, 95, 110, 105, 120, 135]);
  const [analyticsInterval, setAnalyticsInterval] = useState<number>(800);
  const [isAnalyticsLive, setIsAnalyticsLive] = useState<boolean>(true);

  // 2. Aura Audio Synth States (Mapped to Pool Wave & Lights)
  const [synthWave, setSynthWave] = useState<OscillatorType>("sine");
  const [synthVolume, setSynthVolume] = useState<number>(0.3);
  const [lastFrequency, setLastFrequency] = useState<number | null>(null);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // 3. MEP Material Estimator States (Renamed Material Assets & Budget Ledger)
  const [walletBalances, setWalletBalances] = useState<Record<string, number>>({
    TRAVERTINE: 350,  // sq meters of Galvanized Steel Ductwork
    MOSAICS: 120,     // linear meters of Chilled Water Piping
    TIMBER: 45,       // units of Fire Sprinkler Heads
    BUDGET: 85000     // USD procurement budget remaining
  });
  const [swapFrom, setSwapFrom] = useState<string>("TRAVERTINE");
  const [swapTo, setSwapTo] = useState<string>("BUDGET");
  const [swapAmount, setSwapAmount] = useState<string>("50");
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [addressError, setAddressError] = useState<string>("");
  const [walletTransactions, setWalletTransactions] = useState<any[]>([
    { id: "tx1", type: "Procured", desc: "Piping Swap Out ➔ $2500 reallocated to Budget", time: "2 hours ago", status: "Completed", hash: "0x3f5b...d72e" },
    { id: "tx2", type: "Order", desc: "Added 100 m² Galvanized Steel Ductwork to layout", time: "1 day ago", status: "Completed", hash: "0x8e2c...10fa" }
  ]);
  const [notification, setNotification] = useState<string | null>(null);

  // 4. Al Rawda Resort Swimming Pool Simulator States
  const [adultTemp, setAdultTemp] = useState<number>(28);
  const [adultChlorine, setAdultChlorine] = useState<number>(1.8);
  const [adultPh, setAdultPh] = useState<number>(7.4);
  const [adultPumpSpeed, setAdultPumpSpeed] = useState<number>(85); // %
  
  const [kidsTemp, setKidsTemp] = useState<number>(31);
  const [kidsChlorine, setKidsChlorine] = useState<number>(2.2);
  const [kidsPh, setKidsPh] = useState<number>(7.3);
  const [kidsPumpSpeed, setKidsPumpSpeed] = useState<number>(95); // %
  const [fountainActive, setFountainActive] = useState<boolean>(true);
  const [waterfallActive, setWaterfallActive] = useState<boolean>(false);

  const getAccentText = () => {
    switch (activeAccent) {
      case "cyan": return "text-cyan-400";
      case "emerald": return "text-emerald-400";
      case "rose": return "text-rose-400";
      case "violet": return "text-violet-400";
      case "amber": return "text-amber-400";
    }
  };

  const getAccentBg = () => {
    switch (activeAccent) {
      case "cyan": return "bg-cyan-500 hover:bg-cyan-600";
      case "emerald": return "bg-emerald-500 hover:bg-emerald-600";
      case "rose": return "bg-rose-500 hover:bg-rose-600";
      case "violet": return "bg-violet-500 hover:bg-violet-600";
      case "amber": return "bg-amber-500 hover:bg-amber-600";
    }
  };

  const getAccentBorder = () => {
    switch (activeAccent) {
      case "cyan": return "border-cyan-500/20";
      case "emerald": return "border-emerald-500/20";
      case "rose": return "border-rose-500/20";
      case "violet": return "border-violet-500/20";
      case "amber": return "border-amber-500/20";
    }
  };

  const getAccentBgLight = () => {
    switch (activeAccent) {
      case "cyan": return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
      case "emerald": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "rose": return "bg-rose-500/10 text-rose-400 border-rose-500/20";
      case "violet": return "bg-violet-500/10 text-violet-400 border-violet-500/20";
      case "amber": return "bg-amber-500/10 text-amber-400 border-amber-500/20";
    }
  };

  // --- Zenith Simulator Telemetry Loop ---
  useEffect(() => {
    if (!isAnalyticsLive || activeSimulator !== "zenith") return;

    const interval = setInterval(() => {
      setAnalyticsData(prev => {
        const copy = [...prev.slice(1)];
        let nextVal = prev[prev.length - 1];

        // Generate realistic changes based on metric
        if (analyticsMetric === "cpu") {
          nextVal = Math.max(10, Math.min(99, Math.round(nextVal + (Math.random() * 20 - 10))));
        } else if (analyticsMetric === "req") {
          nextVal = Math.max(100, Math.min(1200, Math.round(nextVal + (Math.random() * 200 - 100))));
        } else if (analyticsMetric === "errors") {
          nextVal = Math.max(0, Math.min(15, Math.round(nextVal + (Math.random() * 4 - 2))));
        } else {
          nextVal = Math.max(1000, Math.min(8000, Math.round(nextVal + (Math.random() * 150 - 70))));
        }

        return [...copy, nextVal];
      });
    }, analyticsInterval);

    return () => clearInterval(interval);
  }, [isAnalyticsLive, analyticsInterval, analyticsMetric, activeSimulator]);

  // --- Aura Synth Sound Generation (Mapped to Pool Switchboard Controls)
  const synthKeys = [
    { note: "C4", label: "Spa Jets", freq: 261.63 },
    { note: "D4", label: "Waterfall", freq: 293.66 },
    { note: "E4", label: "Bubblers", freq: 329.63 },
    { note: "F4", label: "LED lights", freq: 349.23 },
    { note: "G4", label: "Fire Bowls", freq: 392.00 },
    { note: "A4", label: "Deck light", freq: 440.00 },
    { note: "B4", label: "Fountain", freq: 493.88 },
    { note: "C5", label: "Heat Pump", freq: 523.25 }
  ];

  const playSound = (freq: number, note: string) => {
    setActiveKey(note);
    setLastFrequency(freq);

    try {
      // Lazy initialize AudioContext on user interaction
      if (!audioContextRef.current) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioContextRef.current = new AudioContextClass();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = synthWave;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Simple ADSR envelope decay
      gainNode.gain.setValueAtTime(synthVolume, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch (e) {
      console.warn("WebAudio API failed or is not supported in this frame environment.", e);
    }

    setTimeout(() => {
      setActiveKey(null);
    }, 300);
  };

  // --- HTML5 Canvas Synth Visualizer loop ---
  useEffect(() => {
    if (activeSimulator !== "synth" || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = canvas.parentElement?.clientWidth || 600;
    let height = canvas.height = 180;
    let frame = 0;

    const render = () => {
      frame++;
      ctx.fillStyle = "rgba(9, 9, 11, 0.2)"; // trailing fade
      ctx.fillRect(0, 0, width, height);

      // Draw horizontal reference lines
      ctx.strokeStyle = "rgba(63, 63, 70, 0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      // Draw custom synthesis waveform
      ctx.strokeStyle =
        activeAccent === "cyan" ? "#22d3ee" :
        activeAccent === "emerald" ? "#34d399" :
        activeAccent === "rose" ? "#f43f5e" :
        activeAccent === "violet" ? "#a78bfa" : "#fbbf24";
      ctx.lineWidth = 2.5;
      ctx.beginPath();

      const baseFreq = lastFrequency ? lastFrequency / 100 : 2.5;
      const waveAmplitude = lastFrequency ? 35 : 10;

      for (let x = 0; x < width; x++) {
        let y = height / 2;

        // Wave formula matches oscillator type
        if (synthWave === "sine") {
          y += Math.sin(x * 0.05 * baseFreq + frame * 0.08) * waveAmplitude;
        } else if (synthWave === "square") {
          y += Math.sign(Math.sin(x * 0.05 * baseFreq + frame * 0.08)) * waveAmplitude;
        } else if (synthWave === "triangle") {
          y += (Math.abs((x * 0.05 * baseFreq + frame * 0.08) % 4 - 2) - 1) * waveAmplitude * 1.5;
        } else { // Sawtooth
          y += (((x * 0.05 * baseFreq + frame * 0.08) % 2) - 1) * waveAmplitude * 1.5;
        }

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [activeSimulator, lastFrequency, synthWave, activeAccent]);

  // --- CryptoVault Faucet & Token Swap ---
  const handleFaucet = (token: string) => {
    const incrementMap: Record<string, number> = {
      TRAVERTINE: 100,
      MOSAICS: 50,
      TIMBER: 20,
      BUDGET: 50000
    };
    const inc = incrementMap[token] || 50;

    setWalletBalances(prev => ({
      ...prev,
      [token]: parseFloat((prev[token] + inc).toFixed(2))
    }));

    const unitMap: Record<string, string> = {
      TRAVERTINE: "m²",
      MOSAICS: "m",
      TIMBER: "Units",
      BUDGET: "USD"
    };
    const unit = unitMap[token] || "units";

    const nextTx = {
      id: "tx-" + Date.now(),
      type: "Procured",
      desc: token === "BUDGET" ? `Injected $50,000 project funding` : `Procured ${inc} ${unit} of ${token}`,
      time: "Just now",
      status: "Completed",
      hash: "0x" + Math.random().toString(16).slice(2, 10) + "..." + Math.random().toString(16).slice(2, 6)
    };

    setWalletTransactions(prev => [nextTx, ...prev]);
    showNotification(token === "BUDGET" ? `Budget expanded by $50,000!` : `Supplied extra ${token} to layout inventory.`);
  };

  const calculateSwapRate = () => {
    // Material rates in USD (per sq meter or cubic meter)
    const rates: Record<string, number> = { TRAVERTINE: 120, MOSAICS: 180, TIMBER: 320, BUDGET: 1 };
    const fromUsd = rates[swapFrom] || 1;
    const toUsd = rates[swapTo] || 1;
    return parseFloat((fromUsd / toUsd).toFixed(4));
  };

  const handleSwap = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(swapAmount);
    if (isNaN(amount) || amount <= 0) return;

    if (walletBalances[swapFrom] < amount) {
      showNotification("Insufficient inventory or budget for this calculation!", true);
      return;
    }

    const rate = calculateSwapRate();
    const received = parseFloat((amount * rate).toFixed(2));

    setWalletBalances(prev => ({
      ...prev,
      [swapFrom]: parseFloat((prev[swapFrom] - amount).toFixed(4)),
      [swapTo]: parseFloat((prev[swapTo] + received).toFixed(2))
    }));

    const nextTx = {
      id: "tx-" + Date.now(),
      type: "CostSwap",
      desc: `Reallocated ${amount} ${swapFrom} ➔ ${received} ${swapTo}`,
      time: "Just now",
      status: "Completed",
      hash: "0x" + Math.random().toString(16).slice(2, 10) + "..." + Math.random().toString(16).slice(2, 6)
    };

    setWalletTransactions(prev => [nextTx, ...prev]);
    showNotification(`BOQ updated! Swapped ${amount} units of ${swapFrom} for ${received} units of ${swapTo}!`);
  };

  const showNotification = (msg: string, isError = false) => {
    setNotification((isError ? "🚨 " : "✅ ") + msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const triggerSimulator = (projectId: string) => {
    setActiveSimulator(projectId);
    setLastFrequency(null); // Reset audio wave
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-8" id="work">
      {/* Title */}
      <div className="mb-12">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Crafted <span className={getAccentText()}>Masterpieces</span>
        </h2>
        <p className="mt-2 text-zinc-400">
          Explore complete production-grade applications featuring live-functional simulators.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <div
            id={`project-card-${project.id}`}
            key={project.id}
            className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 overflow-hidden hover:border-zinc-700/60 transition-all hover:scale-102 group"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden bg-zinc-950">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
              
              {/* Launcher */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 justify-end">
                {project.modelUrl && (
                  <a
                    id={`model-btn-${project.id}`}
                    href={project.modelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-lg px-3 py-1.5 text-xs font-bold shadow-lg hover:scale-105 transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>View 3D Model</span>
                  </a>
                )}
              </div>
            </div>

            {/* Content info */}
            <div className="flex-1 p-5 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-white tracking-tight leading-snug">
                  {project.title}
                </h3>
                <p className={`text-xs font-medium mt-0.5 ${getAccentText()}`}>{project.subtitle}</p>
                <p className="mt-2 text-sm text-zinc-400 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action Row */}
              <div className="mt-5 pt-4 border-t border-zinc-800/60">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="rounded-md bg-zinc-800/50 px-2 py-1 text-xs text-zinc-400 font-medium">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="rounded-md bg-zinc-800/50 px-1.5 py-1 text-xs text-zinc-400 font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-2">
                  <button
                    id={`details-btn-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer text-xs font-semibold text-zinc-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Read Specs</span>
                    <span className="text-zinc-500">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- OVERLAY 1: READ DETAILED SPECS MODAL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-md">
          <div className="w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              id="close-specs-modal"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <span className={getAccentBgLight() + " px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"}>
              Technical Specifications
            </span>

            <h3 className="font-display text-2xl font-bold text-white tracking-tight mt-3">
              {selectedProject.title}
            </h3>
            <p className={`text-sm font-medium ${getAccentText()}`}>{selectedProject.subtitle}</p>

            <div className="mt-4 border-t border-zinc-800 pt-4 space-y-4">
              <p className="text-sm leading-relaxed text-zinc-300">
                {selectedProject.longDescription}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2">Key Engineering Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${getAccentBg().split(" ")[0]}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-2">Architectural Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="rounded-lg bg-zinc-800 px-3 py-1.5 text-xs text-white border border-zinc-700/50 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-5">
              <div className="flex flex-wrap gap-2.5">
                {selectedProject.modelUrl && (
                  <a
                    id="modal-view-model"
                    href={selectedProject.modelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 px-4 py-2.5 text-xs font-bold transition-all hover:scale-105 shadow-lg"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>View 3D Autodesk Model</span>
                  </a>
                )}
              </div>

              <button
                id="modal-close"
                onClick={() => setSelectedProject(null)}
                className="cursor-pointer border border-zinc-800 bg-zinc-900 px-4 py-2.5 rounded-xl text-xs text-zinc-300 hover:text-white"
              >
                Close Specs
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
