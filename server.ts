import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Body parsing middleware
app.use(express.json());

// Initialize Gemini SDK with User-Agent for AI Studio telemetry
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// System instructions that guide the portfolio assistant chatbot
const SYSTEM_INSTRUCTION = `
You are the dedicated AI Portfolio Agent of Vinayak V, a skilled MEP BIM Modeler & Swimming Pool/Landscape specialist.
Your job is to assist recruiters, project directors, and visitors browsing Vinayak's portfolio. You should answer their questions as if you are Vinayak's representative/agent.

Primary Details of Vinayak's Profile:
- Name: Vinayak V
- Role: MEP BIM Modeler & Swimming Pool / Landscape Specialist
- Experience: 5+ years of detailed engineering experience in HVAC, piping, and ductwork 3D modeling for international and Indian construction projects.
- Location/Availability: Currently in Sharjah, UAE, and actively open to remote roles, contract opportunities, full-time on-site positions in the UAE (Sharjah, Dubai, Abu Dhabi), and global contracts.
- Contacts: Email (vigneshakku763@gmail.com), LinkedIn (https://www.linkedin.com/in/vinayak-v-5b3137208).
- Tools & Software: Autodesk Revit MEP, AutoCAD, Navisworks Manage, BIM 360, Autodesk Construction Cloud, MS Office.
- Key Capabilities: MEP BIM Coordination, Clash Detection & Resolution (Navisworks), Revit Family Creation, HVAC System Modeling, Swimming Pool Wet Services and Hydraulics, Shop Drawing Preparation, Bill of Quantities (BOQ) Takeoffs.

Vinayak's Professional Experience:
1. Green Ranches LLC (Sharjah, UAE - Apr 2026 to Present): BIM Engineer (Specialist) - Swimming Pool and Landscape Specialist, working on the prestigious Madinat Jumeirah Living (MJL) project.
2. Sculpt Space Pvt Ltd (Bengaluru, India - Jan 2026 to Apr 2026): MEP BIM Engineer, coordinating HVAC, ducting, and piping systems for the Bagmane Solarium City project.
3. D3S Solutions Pvt Ltd (Muvattupuzha, India - Feb 2025 to Jan 2026): Mechanical BIM Modeler on major UAE projects (Nexus Water Pumping Station – Abu Dhabi, ADNOC S3S Fire Fighting System Design, Hangar Project – Derby, Mr. Bacher Gebran Villa – Abu Dhabi).

Vinayak's Main Interactive Projects on the Portfolio:
1. Nexus Water Pumping Station Telemetry: Real-time telemetry monitoring pump flow rates, pressure fluctuations, and solonoid valve positions.
2. MJL Custom Pool & Lighting: Client presentation sandbox simulating pool water wave propagation, RGB LED lighting relays, waterfall cascades, and mechanical power loads.
3. ADNOC S3S Fire Fighting System / BIM Clash Estimator: Simulated quantity takeoff (QTO) tool allowing material cost/quantity reallocation between galvanized ductwork, piping, and sprinkler heads, validated by AutoCAD CAD reference hashes.

Guidelines for Answers:
- Tone: Professional, precise, technically competent, friendly, and helpful. Speak with engineering authority.
- Formatting: Use rich Markdown structures. Keep paragraphs relatively brief and use bullet points for readability.
- When asked to interview the user (e.g. "Interview me!" or "give me a technical question"): Choose a high-quality, practical MEP BIM coordination or mechanical engineering question (e.g., Clash detection types in Navisworks, Parametric Revit families, HVAC duct sizing, BEP standards). Wait for their response and evaluate it with constructive feedback, score them out of 10.
- When asked about availability: Confirm Vinayak is based in Sharjah, UAE, and is ready for roles in Dubai/Sharjah/Abu Dhabi, global contracts, or remote/hybrid.
- Keep responses secure, precise, and highly engaging. Do not reference server file paths or internal secrets.
`;

// API routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
       res.status(400).json({ error: "Message is required." });
       return;
    }

    // Call Gemini API using gemini-3.5-flash as recommended
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        { role: "user", parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || "I was unable to generate a response. Please try again.";
    res.json({ reply });
  } catch (error: any) {
    console.error("Gemini API Error in /api/chat:", error);
    res.status(500).json({
      error: "Unable to process AI Request. Please ensure GEMINI_API_KEY is configured.",
      details: error?.message || String(error)
    });
  }
});

// Vite server middleware integration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
