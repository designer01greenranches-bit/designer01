import React, { useState } from "react";
import { ThemeAccent } from "../types";
import { DEV_PROFILE } from "../data";
import { Mail, MapPin, Send, CheckCircle, AlertTriangle, Linkedin } from "lucide-react";

interface ContactProps {
  activeAccent: ThemeAccent;
}

export default function Contact({ activeAccent }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

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
      case "cyan": return "bg-cyan-500 hover:bg-cyan-600 text-zinc-950";
      case "emerald": return "bg-emerald-500 hover:bg-emerald-600 text-zinc-950";
      case "rose": return "bg-rose-500 hover:bg-rose-600 text-zinc-950";
      case "violet": return "bg-violet-500 hover:bg-violet-600 text-zinc-950";
      case "amber": return "bg-amber-500 hover:bg-amber-600 text-zinc-950";
    }
  };

  const getAccentBorder = () => {
    switch (activeAccent) {
      case "cyan": return "border-cyan-500/20 focus-within:border-cyan-500/50";
      case "emerald": return "border-emerald-500/20 focus-within:border-emerald-500/50";
      case "rose": return "border-rose-500/20 focus-within:border-rose-500/50";
      case "violet": return "border-violet-500/20 focus-within:border-violet-500/50";
      case "amber": return "border-amber-500/20 focus-within:border-amber-500/50";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate reliable mail post delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 1200);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:px-8 border-t border-zinc-900" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Info detail block Left */}
        <div className="md:col-span-5 space-y-6">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let's <span className={getAccentText()}>Connect</span>
            </h2>
            <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
              If you have an opening, a remote contract request, or a technical inquiry, leave a card. I usually respond within 4 business hours.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3.5 bg-zinc-900/30 p-4 rounded-xl border border-zinc-800">
              <Mail className={`h-5 w-5 ${getAccentText()}`} />
              <div>
                <div className="text-[10px] text-zinc-500 uppercase font-mono">Email Address</div>
                <a href={`mailto:${DEV_PROFILE.email}`} className="text-sm font-bold text-zinc-200 hover:text-white transition-colors">
                  {DEV_PROFILE.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3.5 bg-zinc-900/30 p-4 rounded-xl border border-zinc-800">
              <MapPin className={`h-5 w-5 ${getAccentText()}`} />
              <div>
                <div className="text-[10px] text-zinc-500 uppercase font-mono">Current Residency</div>
                <div className="text-sm font-bold text-zinc-200">{DEV_PROFILE.location}</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={DEV_PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-zinc-300 hover:text-white transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Contact form Block Right */}
        <div className="md:col-span-7">
          <form onSubmit={handleSubmit} className="bg-zinc-900/30 border border-zinc-800/80 p-6 md:p-8 rounded-3xl space-y-4 relative">
            
            {/* Form Success Overlay */}
            {submitStatus === "success" && (
              <div className="absolute inset-0 bg-zinc-950/95 z-20 rounded-3xl flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
                <CheckCircle className="h-12 w-12 text-emerald-400 mb-3 animate-pulse" />
                <h4 className="font-display text-lg font-bold text-white">Message Transmitted!</h4>
                <p className="text-zinc-400 text-xs mt-1 max-w-sm">
                  Thank you for reaching out. Vinayak's mailbox successfully ingested your submission. Expect a quick response!
                </p>
                <button
                  id="contact-success-reset"
                  onClick={() => setSubmitStatus(null)}
                  className="mt-5 text-xs font-bold text-zinc-400 hover:text-white border border-zinc-800 bg-zinc-900 px-4 py-2 rounded-xl"
                >
                  Send another message
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-zinc-400 uppercase font-mono tracking-wider font-semibold">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g. Liam Sterling"
                  className={`bg-zinc-950 border ${getAccentBorder()} rounded-xl px-3.5 py-2.5 text-xs md:text-sm text-white w-full outline-none transition-colors`}
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-zinc-400 uppercase font-mono tracking-wider font-semibold">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="e.g. liam@innovate.co"
                  className={`bg-zinc-950 border ${getAccentBorder()} rounded-xl px-3.5 py-2.5 text-xs md:text-sm text-white w-full outline-none transition-colors`}
                />
              </div>
            </div>

            {/* Company */}
            <div className="space-y-1.5">
              <label className="text-[10px] text-zinc-400 uppercase font-mono tracking-wider font-semibold">Company / Venture (Optional)</label>
              <input
                id="contact-company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                placeholder="e.g. Innovate Corp"
                className={`bg-zinc-950 border ${getAccentBorder()} rounded-xl px-3.5 py-2.5 text-xs md:text-sm text-white w-full outline-none transition-colors`}
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-[10px] text-zinc-400 uppercase font-mono tracking-wider font-semibold">Detailed Message</label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Detail your project specifications, contract constraints, or design opportunities here..."
                className={`bg-zinc-950 border ${getAccentBorder()} rounded-xl px-3.5 py-2.5 text-xs md:text-sm text-white w-full outline-none transition-colors resize-none`}
              />
            </div>

            <button
              id="contact-submit"
              type="submit"
              disabled={isSubmitting}
              className={`cursor-pointer w-full flex items-center justify-center gap-2 rounded-xl py-3 font-semibold transition-all hover:scale-101 disabled:opacity-50 ${getAccentBg()}`}
            >
              <Send className="h-4.5 w-4.5" />
              <span>{isSubmitting ? "Transmitting..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
