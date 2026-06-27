import React, { useEffect, useState } from "react";
import { DEV_PROFILE } from "../data";
import { ThemeAccent } from "../types";
import { ArrowRight, Sparkles, Linkedin, Mail, MessageSquareText } from "lucide-react";

interface HeroProps {
  activeAccent: ThemeAccent;
}

export default function Hero({ activeAccent }: HeroProps) {
  const [typedText, setTypedText] = useState("");
  const headlines = [
    "MEP BIM Modeler",
    "BIM Engineer (Specialist)",
    "Mechanical BIM Modeler",
    "Pool & Wet Services Coordinator"
  ];
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFull = headlines[headlineIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(prev => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentFull.slice(0, typedText.length + 1));
      }, 100);
    }

    if (!isDeleting && typedText === currentFull) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setHeadlineIndex(prev => (prev + 1) % headlines.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, headlineIndex]);

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

  const getAccentRing = () => {
    switch (activeAccent) {
      case "cyan": return "focus:ring-cyan-500/50";
      case "emerald": return "focus:ring-emerald-500/50";
      case "rose": return "focus:ring-rose-500/50";
      case "violet": return "focus:ring-violet-500/50";
      case "amber": return "focus:ring-amber-500/50";
    }
  };

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-24" id="hero">
      {/* Visual background ambient blur circles */}
      <div className="absolute top-1/4 -left-16 -z-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="absolute right-10 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Bio Text Column */}
        <div className="space-y-6 lg:col-span-7">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/80 px-3 py-1 text-xs font-semibold text-zinc-300 border border-zinc-800">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Dubai Roles & Global Contracts</span>
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Hi, I'm <span className={getAccentText()}>{DEV_PROFILE.name}</span>
            <span className="block mt-2 text-3xl font-bold sm:text-4xl text-zinc-300 min-h-[50px]">
              {typedText}
              <span className="animate-pulse font-light">|</span>
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
            {DEV_PROFILE.bio}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              id="hero-explore-projects"
              onClick={() => handleScroll("work")}
              className={`cursor-pointer flex items-center gap-2 rounded-xl px-5 py-3.5 font-semibold text-zinc-950 transition-all hover:scale-102 ${getAccentBg()}`}
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              id="hero-contact-me"
              onClick={() => handleScroll("contact")}
              className="cursor-pointer flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 px-5 py-3.5 font-semibold text-white transition-all hover:border-zinc-700 hover:scale-102"
            >
              <Mail className={`h-4 w-4 ${getAccentText()}`} />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4 text-zinc-500">
            <a
              href={DEV_PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${DEV_PROFILE.email}`}
              className="hover:text-white transition-colors"
              title="Email Vinayak"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Profile Avatar & Stats Column */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative">
            {/* Ambient Accent Highlight back of the Avatar */}
            <div className={`absolute inset-0 rounded-3xl opacity-30 blur-2xl ${
              activeAccent === "cyan" ? "bg-cyan-500" :
              activeAccent === "emerald" ? "bg-emerald-500" :
              activeAccent === "rose" ? "bg-rose-500" :
              activeAccent === "violet" ? "bg-violet-500" : "bg-amber-500"
            }`} />
            
            <div className={`relative rounded-3xl border-2 ${getAccentBorder()} p-2 bg-zinc-950/40`}>
              <img
                src={DEV_PROFILE.avatar}
                alt={DEV_PROFILE.name}
                referrerPolicy="no-referrer"
                className="h-64 w-64 md:h-80 md:w-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Stats Grid inside Hero */}
          <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-sm">
            {DEV_PROFILE.stats.map((stat, i) => (
              <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 text-center">
                <div className={`text-2xl font-bold ${getAccentText()}`}>{stat.value}</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
