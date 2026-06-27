import React from "react";
import { ThemeAccent } from "../types";
import { Terminal, Shield, Sparkles, FolderCode, Mail, Palette } from "lucide-react";

interface HeaderProps {
  activeAccent: ThemeAccent;
  onChangeAccent: (accent: ThemeAccent) => void;
  activeSection: string;
}

export default function Header({ activeAccent, onChangeAccent, activeSection }: HeaderProps) {
  const accentColors: { value: ThemeAccent; label: string; bg: string }[] = [
    { value: "cyan", label: "Cyber Cyan", bg: "bg-cyan-500" },
    { value: "emerald", label: "Emerald Mint", bg: "bg-emerald-500" },
    { value: "rose", label: "Sunset Rose", bg: "bg-rose-500" },
    { value: "violet", label: "Royal Violet", bg: "bg-violet-500" },
    { value: "amber", label: "Amber Sun", bg: "bg-amber-500" },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getAccentText = () => {
    switch (activeAccent) {
      case "cyan": return "text-cyan-400";
      case "emerald": return "text-emerald-400";
      case "rose": return "text-rose-400";
      case "violet": return "text-violet-400";
      case "amber": return "text-amber-400";
    }
  };

  const getAccentBorder = () => {
    switch (activeAccent) {
      case "cyan": return "border-cyan-500/30";
      case "emerald": return "border-emerald-500/30";
      case "rose": return "border-rose-500/30";
      case "violet": return "border-violet-500/30";
      case "amber": return "border-amber-500/30";
    }
  };

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-6xl px-4 md:px-8">
      <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border ${getAccentBorder()} bg-zinc-950/80 p-4 shadow-xl backdrop-blur-xl`}>
        {/* Logo / Brand */}
        <div className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-white">
          <Palette className={`h-5 w-5 ${getAccentText()}`} />
          <span>vinayak.<span className={getAccentText()}>v</span></span>
        </div>

        {/* Navigation links */}
        <nav className="flex items-center gap-1 text-sm font-medium text-zinc-400">
          <button
            id="nav-work"
            onClick={() => handleScroll("work")}
            className={`cursor-pointer rounded-lg px-3 py-1.5 transition-colors hover:text-white ${
              activeSection === "work" ? "bg-zinc-800/60 text-white" : ""
            }`}
          >
            Work
          </button>
          <button
            id="nav-skills"
            onClick={() => handleScroll("skills")}
            className={`cursor-pointer rounded-lg px-3 py-1.5 transition-colors hover:text-white ${
              activeSection === "skills" ? "bg-zinc-800/60 text-white" : ""
            }`}
          >
            Skills & Journey
          </button>

          <button
            id="nav-contact"
            onClick={() => handleScroll("contact")}
            className={`cursor-pointer rounded-lg px-3 py-1.5 transition-colors hover:text-white ${
              activeSection === "contact" ? "bg-zinc-800/60 text-white" : ""
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Custom Accent Selector */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-full bg-zinc-900/90 p-1 border border-zinc-800">
            {accentColors.map((color) => (
              <button
                id={`accent-btn-${color.value}`}
                key={color.value}
                onClick={() => onChangeAccent(color.value)}
                className={`relative h-5 w-5 rounded-full ${color.bg} transition-all hover:scale-115 ${
                  activeAccent === color.value
                    ? "ring-2 ring-white ring-offset-2 ring-offset-zinc-950 scale-110"
                    : "opacity-60"
                }`}
                title={color.label}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
