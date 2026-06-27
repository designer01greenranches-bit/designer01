import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SkillsExperience from "./components/SkillsExperience";
import Contact from "./components/Contact";
import { ThemeAccent } from "./types";
import { Sparkles, ArrowUp } from "lucide-react";

export default function App() {
  const [activeAccent, setActiveAccent] = useState<ThemeAccent>("cyan");
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Watch screen scrolling for section spy updates
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      
      const heroEl = document.getElementById("hero");
      const workEl = document.getElementById("work");
      const skillsEl = document.getElementById("skills");
      const contactEl = document.getElementById("contact");

      if (contactEl && scrollPos >= contactEl.offsetTop) {
        setActiveSection("contact");
      } else if (skillsEl && scrollPos >= skillsEl.offsetTop) {
        setActiveSection("skills");
      } else if (workEl && scrollPos >= workEl.offsetTop) {
        setActiveSection("work");
      } else {
        setActiveSection("hero");
      }

      // Show/hide scroll top arrow
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      case "cyan": return "border-cyan-500/20";
      case "emerald": return "border-emerald-500/20";
      case "rose": return "border-rose-500/20";
      case "violet": return "border-violet-500/20";
      case "amber": return "border-amber-500/20";
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-white pb-12 relative overflow-x-hidden">
      
      {/* Subtle geometric dot grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      {/* Floating Header custom navigation */}
      <div className="pt-6">
        <Header
          activeAccent={activeAccent}
          onChangeAccent={setActiveAccent}
          activeSection={activeSection}
        />
      </div>

      {/* Hero Presentation page */}
      <Hero activeAccent={activeAccent} />

      {/* Projects grid showcase & integrated simulator sandboxes */}
      <Projects activeAccent={activeAccent} />

      {/* Skills Matrix charts and career timeline */}
      <SkillsExperience activeAccent={activeAccent} />

      {/* Contact Form with real feedback controls */}
      <Contact activeAccent={activeAccent} />

      {/* Standard minimalist footer block */}
      <footer className="mx-auto max-w-6xl px-6 pt-12 mt-12 border-t border-zinc-900 text-center text-xs text-zinc-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} Vinayak V. Compiled with full-stack TypeScript & Tailwind.
        </div>
        <div className="flex items-center gap-4">
          <span className="hover:text-zinc-400 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Return to Top
          </span>
        </div>
      </footer>

      {/* Float Scroll-To-Top bubble */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className={`cursor-pointer fixed bottom-6 right-6 p-3 rounded-full text-zinc-950 shadow-lg transition-all hover:scale-110 z-40 ${getAccentBg()}`}
          title="Scroll to Top"
        >
          <ArrowUp className="h-5 w-5 stroke-[2.5]" />
        </button>
      )}
    </div>
  );
}
