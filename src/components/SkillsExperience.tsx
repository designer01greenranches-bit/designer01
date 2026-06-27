import React, { useState } from "react";
import { EXPERIENCES, SKILL_CATEGORIES } from "../data";
import { ThemeAccent, Experience } from "../types";
import { Briefcase, Calendar, Star, GraduationCap, MapPin } from "lucide-react";

interface SkillsExperienceProps {
  activeAccent: ThemeAccent;
}

export default function SkillsExperience({ activeAccent }: SkillsExperienceProps) {
  const [selectedExpId, setSelectedExpId] = useState<string>("greenranches");

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
      case "cyan": return "bg-cyan-500";
      case "emerald": return "bg-emerald-500";
      case "rose": return "bg-rose-500";
      case "violet": return "bg-violet-500";
      case "amber": return "bg-amber-500";
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

  const selectedExp = EXPERIENCES.find(e => e.id === selectedExpId) || EXPERIENCES[0];

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-8" id="skills">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN: Skill Progress Categories */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Technical <span className={getAccentText()}>Mastery</span>
            </h2>
            <p className="mt-2 text-zinc-400 text-sm">
              An objective index of key proficiencies gathered through years of production deliveries.
            </p>
          </div>

          <div className="space-y-6">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div key={idx} className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-5 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-800/60 pb-2">
                  {category.name}
                </h3>

                <div className="space-y-3.5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-zinc-300">{skill.name}</span>
                        <span className={`font-semibold ${getAccentText()}`}>{skill.level}%</span>
                      </div>
                      
                      {/* Skill Bar */}
                      <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${skill.level}%` }}
                          className={`h-full rounded-full transition-all duration-1000 ${getAccentBg()}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Career Timeline */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Professional <span className={getAccentText()}>Journey</span>
            </h2>
            <p className="mt-2 text-zinc-400 text-sm">
              Click through companies to inspect key milestones, tech-deliveries, and client evaluations.
            </p>
          </div>

          {/* Selector timeline tabs */}
          <div className="flex flex-wrap gap-2 border-b border-zinc-800 pb-4">
            {EXPERIENCES.map((exp) => (
              <button
                id={`exp-tab-${exp.id}`}
                key={exp.id}
                onClick={() => setSelectedExpId(exp.id)}
                className={`cursor-pointer flex items-center gap-1 px-4 py-2 text-xs font-bold rounded-xl border transition-all ${
                  selectedExpId === exp.id
                    ? getAccentBgLight()
                    : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                <Briefcase className="h-3.5 w-3.5" />
                <span>{exp.company}</span>
              </button>
            ))}
          </div>

          {/* Active timeline detailed body card */}
          {selectedExp && (
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-6 relative transition-all duration-300 animate-fadeIn">
              
              {/* Card Meta Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div>
                  <h3 className="font-display text-xl font-bold text-white tracking-tight">
                    {selectedExp.role}
                  </h3>
                  <p className="text-zinc-400 font-semibold text-sm mt-0.5">{selectedExp.company}</p>
                </div>

                <span className="inline-flex items-center gap-1 rounded-lg bg-zinc-950 px-3 py-1.5 text-xs text-zinc-400 font-mono border border-zinc-850 self-start sm:self-center">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{selectedExp.period}</span>
                </span>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed border-t border-zinc-850 pt-4">
                {selectedExp.description}
              </p>

              {/* Highlights bullets */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-bold text-zinc-400">Core Contributions</h4>
                <ul className="space-y-2.5">
                  {selectedExp.highlights.map((bullet, i) => (
                    <li key={i} className="flex gap-2.5 text-xs text-zinc-400 leading-relaxed">
                      <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${getAccentBg()}`} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack tags */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-zinc-400">Applied Technologies</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedExp.skills.map((skill, i) => (
                    <span key={i} className="rounded-lg bg-zinc-950/80 px-2.5 py-1 text-xs text-zinc-400 border border-zinc-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
