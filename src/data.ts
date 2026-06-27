import { Project, Experience, SkillCategory } from "./types";
import pumpingStationImg from "./assets/images/pumping_station_1782551585813.jpg";
import adnocFirePumpImg from "./assets/images/adnoc_fire_pump_1782551706614.jpg";
import alRawdaPoolImg from "./assets/images/al_rawda_pool_1782552372082.jpg";

export const DEV_PROFILE = {
  name: "Vinayak V",
  role: "MEP BIM Modeler & Swimming Pool / Landscape Specialist",
  location: "Sharjah, UAE | Available for Local & Global Contracts, Remote & Hybrid Roles",
  bio: "Detail-oriented MEP BIM Modeler with specialized expertise in HVAC, piping, and ductwork 3D modeling, alongside swimming pool & wet services landscape integration. Proficient in Autodesk Revit MEP, AutoCAD, Navisworks Manage, and BIM 360 for high-performance multidisciplinary coordination, clash detection, and layout optimization.",
  avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=400",
  email: "vigneshakku763@gmail.com",
  linkedin: "https://www.linkedin.com/in/vinayak-v-5b3137208",
  resumeUrl: "#",
  stats: [
    { label: "BIM Models", value: "30+" },
    { label: "Clash Resolutions", value: "200+" },
    { label: "Revit Families", value: "150+" },
    { label: "Coordinated Zones", value: "85+" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "zenith",
    title: "Nexus Water Pumping Station",
    subtitle: "BIM Coordination & Flow Telemetry Engine",
    description: "A high-fidelity monitoring telemetry interface simulating pressure sensors, solenoid valves, and water flow rates across the coordinated BIM piping models of Nexus Water Pumping Station – Abu Dhabi.",
    longDescription: "Created as part of the multidisciplinary MEP coordination for the Abu Dhabi pumping station project. This custom visual simulator integrates simulated pump performance telemetry, localized pressure fluctuations, and water flow rate metrics. It demonstrates how Clash Detection and layout optimization prevent water hammer effects and structural overloads prior to site installation.",
    tags: ["Autodesk Revit MEP", "AutoCAD Layouts", "Pumping Hydraulics", "Flow Telemetry", "Clash Resolution"],
    image: pumpingStationImg,
    features: [
      "Dynamic real-time telemetry representing pump flow rates, water pressure, and pipe temperature",
      "Multidisciplinary coordination checks simulating clash statuses across architectural and structural models",
      "Zone-based flow metrics reflecting realistic hydraulic calculations from Abu Dhabi infrastructure design",
      "Integrated automated leak and friction-loss telemetry alerts based on ISO standards",
      "MEP material takeoff / BOQ calculation stream for copper pipes and booster pumps"
    ]
  },
  {
    id: "synth",
    title: "Madinat Jumeirah Living (MJL)",
    subtitle: "Interactive Wet Services & Pool Feature Switchboard",
    description: "An interactive client-facing sandbox simulating pool wave physics, jet velocities, and RGB LED light state combinations for luxury residences at Madinat Jumeirah Living (MJL), Dubai.",
    longDescription: "Developed to bridge the gap between complex wet services engineering drawings and luxurious architectural presentations. It simulates pool lighting relays, multi-speed spa jets, cascading waterfalls, and fire feature toggle states. The interactive visual canvas uses physics-based water ripple propagation synced with simulated hydraulic and lighting commands.",
    tags: ["HTML5 Canvas", "Wet Services Design", "RGB Lighting Relays", "Dubai Luxury Standards"],
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800&h=450",
    features: [
      "Dynamic wave propagation mimicking real-time pool water surface ripples on canvas",
      "RGB LED lighting relays supporting custom hex/preset color ranges aligned with MJL specifications",
      "Interactive water feature switchboard (Waterfall cascade, jet bubblers, fountain spray)",
      "Auxiliary fire bowl thermal simulators representing safe landscape margins",
      "Real-time mechanical power load estimation for heat pumps and booster jets"
    ],
    modelUrl: "https://autode.sk/4etglIH"
  },
  {
    id: "vault",
    title: "ADNOC S3S Fire Fighting System",
    subtitle: "BIM Material Quantity Takeoff & Clash Estimator",
    description: "An interactive material selector and cost estimator allowing dynamic swappability of galvanized steel ductwork, piping, and fire sprinklers with instant clash-hash verification.",
    longDescription: "A simulated quantity takeoff (QTO) tool based on UAE Cost Standards and Autodesk Navisworks clash reports. This interactive dashboard allows engineering teams to reallocate material batches (Galvanized Steel Ductwork, Copper/Carbon Steel Chilled Water Piping, and Fire Sprinkler Heads) while checking AutoCAD layout hash signatures and remaining budgets to prevent onsite rework.",
    tags: ["BIM Quantity Takeoff", "Autodesk Navisworks", "AutoCAD Layouts", "Clash Resolution"],
    image: adnocFirePumpImg,
    modelUrl: "https://autode.sk/3QNoXCj",
    features: [
      "Interactive catalog of coordinated galvanized ductwork, chilled water pipes, and sprinkler units",
      "Real-time material quantity-takeoff (QTO) calculator adjusting for waste and fittings",
      "Instant material-cost reallocation showing budget differences and surplus balances",
      "AutoCAD Cad Reference validation hash checking to verify model coordinates and revisions",
      "Interactive BOQ allocation logging synchronized with UAE Contractor Standard guidelines"
    ]
  },
  {
    id: "alrawda",
    title: "Al Rawda Resort — Al Ain",
    subtitle: "BIM Design & Hydraulics Simulator for Adult & Kids Pools",
    description: "A comprehensive swimming pool and wet services model integrating separate adult and kids pool hydraulics, temperature modulation, and filtration telemetry.",
    longDescription: "Designed and coordinated the complete mechanical, electrical, and plumbing (MEP) layouts for the premium swimming pools at Al Rawda Resort, Al Ain. This project involved high-precision Revit MEP modeling of two separate water circulation circuits—the deep adult lounge pool and the shallow interactive children's play pool. By simulating chemical feed rates, turn-over rates, and temperature controls, this model ensures compliance with UAE safety and sanitation standards.",
    tags: ["Autodesk Revit MEP", "Swimming Pool Hydraulics", "Wet Services Design", "Filtration Systems", "Al Ain Municipal Standards"],
    image: alRawdaPoolImg,
    modelUrl: "https://autode.sk/4ejVfxH",
    features: [
      "Separate dual-filtration system modeling for adult (2.0-hour turnover) and children (0.5-hour turnover) circuits",
      "Interactive temperature modulation panel simulating high-performance heat/cool pumps",
      "Dynamic chlorine and pH automated dosing simulation for real-time sanitization checks",
      "Revit parametric family design for pool floor drains, perimeter skimmer channels, and return inlets",
      "Clash-free pipe routing within standard landscape buffer zones avoiding adjacent structural footings"
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "greenranches",
    role: "BIM Engineer (Specialist) - Swimming Pool & Landscape Specialist",
    company: "Green Ranches LLC",
    period: "Sharjah, UAE | Apr 2026 – Present",
    description: "Lead the 3D modeling and coordination of high-end swimming pools and mechanical landscape wet services for premium developments.",
    highlights: [
      "Developed high-precision MEP BIM models for residential swimming pools and landscape designs at the luxury Madinat Jumeirah Living (MJL) project",
      "Collaborated with structural designers and architects to integrate water circulation, heat pumps, and RGB lighting relays into Autodesk Revit models",
      "Created shop drawings, electrical layout plans, and detailed mechanical piping schedules for accurate onsite plumbing execution"
    ],
    skills: ["Autodesk Revit MEP", "AutoCAD", "Navisworks Manage", "BIM 360", "Swimming Pool Design", "Piping Systems"],
    recommendation: {
      author: "Ziad Al-Gharib",
      role: "Managing Director at Green Ranches",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      text: "Vinayak's ability to blend high-precision MEP engineering with swimming pool and landscape detailing is unmatched. His detailed Revit models for MJL have ensured zero on-site plumbing rework and flawless project execution."
    }
  },
  {
    id: "sculptspace",
    role: "MEP BIM Engineer",
    company: "Sculpt Space Pvt Ltd",
    period: "Bengaluru, India | Jan 2026 – Apr 2026",
    description: "Coordinated detailed HVAC, ducting, and piping BIM models for major commercial developments in India.",
    highlights: [
      "Developed detailed HVAC, ducting, and piping system 3D models using Autodesk Revit MEP for the high-density Bagmane Solarium City – Doddanekundi Village project",
      "Conducted extensive clash detection and multidisciplinary resolution checks in Navisworks Manage, identifying and resolving over 150 potential service conflicts prior to construction",
      "Prepared construction-ready shop drawings, detailed piping layouts, and technical documentation to ensure compliance with architectural specifications"
    ],
    skills: ["Autodesk Revit MEP", "Navisworks Manage", "HVAC Design", "Clash Detection", "Shop Drawings", "Construction Documentation"]
  },
  {
    id: "d3ssolutions",
    role: "Mechanical BIM Modeler (UAE Projects)",
    company: "D3S Solutions Pvt Ltd",
    period: "Muvattupuzha, India | Feb 2025 – Jan 2026",
    description: "Produced high-accuracy 3D mechanical models and clash reports for prestigious international and UAE-based construction works.",
    highlights: [
      "Developed detailed 3D BIM models for Nexus Water Pumping Station (Abu Dhabi), ADNOC S3S Fire Fighting System Design, and luxury villa projects",
      "Created customized parametric Revit families and components to optimize system assets and reduce model files sizes by 25%",
      "Performed clash coordination reviews alongside architectural and structural engineering teams, reducing field modification orders by 90%"
    ],
    skills: ["Autodesk Revit MEP", "AutoCAD", "Navisworks Manage", "Parametric Revit Families", "Fire Fighting Design", "Piping Layouts"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "MEP BIM & 3D Modeling",
    skills: [
      { name: "Autodesk Revit MEP Modeling", level: 100 },
      { name: "Navisworks Manage (Clash Detection)", level: 98 },
      { name: "AutoCAD Drafting & Documentation", level: 100 },
      { name: "Custom Revit Families & Components", level: 92 },
      { name: "BIM 360 & Autodesk Construction Cloud", level: 94 },
      { name: "Multidisciplinary BIM Coordination", level: 96 }
    ]
  },
  {
    name: "Mechanical Systems & Engineering",
    skills: [
      { name: "HVAC System & Ducting Modeling", level: 95 },
      { name: "Piping & Chilled Water Systems", level: 94 },
      { name: "Fire Fighting & Sprinkler Modeling", level: 92 },
      { name: "Plumbing & Drainage Wet Services", level: 90 },
      { name: "Swimming Pool Mechanics & Hydraulics", level: 95 }
    ]
  },
  {
    name: "Documentation & Technical Control",
    skills: [
      { name: "MEP Shop Drawings Preparation", level: 98 },
      { name: "Quantity Takeoff (QTO) & BOQ Estimation", level: 94 },
      { name: "Construction & Detail Documentation", level: 96 },
      { name: "Clash Report Generation & Tracking", level: 95 },
      { name: "UAE & Indian Building Code Compliance", level: 88 }
    ]
  }
];

export const QUICK_PROMPTS = [
  { label: "Check Availability", prompt: "Are you currently open to MEP BIM Modeler or BIM Specialist roles in Dubai or India?" },
  { label: "Clash Detection Workflow", prompt: "How do you coordinate a clash resolution in Navisworks Manage between structural columns and chilled water piping?" },
  { label: "Pool Wet Services", prompt: "Tell me about your swimming pool and landscape wet services experience at Madinat Jumeirah Living (MJL)." },
  { label: "ADNOC Fire Fighting", prompt: "What design standards did you prioritize for the ADNOC S3S Fire Fighting System Design?" }
];

export const INTERVIEW_QUESTIONS = [
  {
    id: "q1",
    question: "What is the key difference between a 'Hard Clash' and a 'Clearance/Soft Clash' in a Navisworks clash detection report?",
    correctAnswer: "A Hard Clash occurs when two components physically occupy the same space (e.g., a chilled water pipe passing through a structural beam). A Clearance or Soft Clash occurs when a component invades the buffer zone required for installation, maintenance, or insulation around another component (e.g., a duct placed too close to a wall, blocking access panels)."
  },
  {
    id: "q2",
    question: "Which file format is typically exported from Revit MEP to be imported into Navisworks Manage for multidisciplinary coordination?",
    correctAnswer: "An NWC (Navisworks Cache) file is exported from Revit. It contains the geometry and metadata of the model, enabling Navisworks to perform fast clash detection and model aggregation with architectural and structural NWC files."
  },
  {
    id: "q3",
    question: "How does the creation of 'Parametric Revit Families' help optimize MEP model sizes and flexibility?",
    correctAnswer: "Parametric families use flexible, user-defined dimensions and formula-based constraints. Instead of drawing hundreds of separate static components, a single parametric family can represent a whole series of pipes, valves, or air terminals, which dramatically reduces model file size and allows instant adjustments during revisions."
  }
];
