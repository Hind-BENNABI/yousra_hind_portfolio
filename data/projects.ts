import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "paperou",  
    image: "/images/projects/paperou1.png",
    gallery: ["/images/projects/paperou2.png", "/images/projects/paperou3.png"],
    title: "PAPEROU — AI-powered research assistant",
    shortTitle: "Paperou",
    description:
      " An AI-powered research assistant that monitors new publications across arXiv and Semantic Scholar, summarizes findings, and surfaces the papers that matter most to a researcher's focus area.",
    longDescription:
      "PaperRou monitors new publications across arXiv and Semantic Scholar, summarizes findings, and surfaces the papers that matter most to a researcher's focus area — cutting hours of manual literature review down to minutes.",
    features: [
    "Semantic search",
    "AI summaries",
    "Research trend analysis",
    "Research gap detection"
  ],

      stack: ["Python", "SQL", "arXiv API", "Semantic Scholar API"],
    featured: true,
    year: "2026",
  },
  {
    slug: "soma-track",
    image: "/images/projects/soma1.png",
    gallery: ["/images/projects/soma2.png"],
    title: "SomaTrack — Machine Learning Health Prediction",
    shortTitle: "SomaTrack",
    description:
      "A machine learning system that predicts and analyzes students' physical discomfort based on their study habits and lifestyle, helping identify health risks before they become serious.",
    features: [
      "Health risk prediction",
      "Machine learning classification",
      "Study habit analysis",
      "Eye strain prediction",
      "Back pain prediction",
      "Headache prediction",
      "Data visualization",
      "Personalized health insights"
    ],
    stack: ["Python", "Scikit-learn", "PyTorch", "Matplotlib"],
    featured: true,
    year: "2026",
  },
  {
    slug: "drone-routing",
    image: "/images/projects/drone.png",
    title: "SkyAI — Drone Routing Optimization",
    shortTitle: "Drone Routing Optimization",
    
    description:
      "Multi-objective optimization for energy-aware drone delivery. Optimizes drone routes considering distance, battery, payload and no-fly zones using Genetic Algorithm (GA) and Simulated Annealing (SA).",
    features: [
      "Route optimization",
      "Battery-aware navigation",
      "Payload constraints",
      "No-fly zone avoidance",
      "Distance minimization",
      "Delivery efficiency analysis"
    ],
    stack: ["Python", "NumPy", "Matplotlib"],
    featured: true,
    year: "2026",
  },
  {
    slug: "liquid-cooling",
    image: "/images/projects/liquid.png",
    title: "Liquid Cooling Demand Forecasting",
    shortTitle: "Liquid Cooling",
    description:
      "A time series forecasting project that predicts liquid cooling demand in AI data centers and evaluates its environmental impact on energy and water resources.",
    features: [
      "Time series forecasting",
      "Liquid cooling trend analysis",
      "Energy consumption analysis",
      "Sustainability insights",
      "Interactive visualizations",
      "Forecast evaluation"
    ],
    stack: ["Python", "Pandas", "Statsmodels", "Matplotlib"],
    featured: false,
    year: "2025",
  },
  
  {
    slug: "flight-traffic",
    image: "/images/projects/flight.png",
  
    title: "Flight Traffic Analysis",
    shortTitle: "Flight Traffic Analysis",
    description:
      "An exploratory data analysis project that transforms and analyzes flight traffic data from Houari Boumediene Airport to identify patterns, optimize operations, and support data-driven decision-making.",
    
    features: [
      "Flight traffic analysis",
      " Interactive data visualization",
      " Traffic trend discovery",
      " Airport operation insights",
      " Temporal traffic analysis",
      " XML data processing",
    ],
    stack: ["Python", "NumPy", "Scikit-learn", "Jupyter Notebook"],
    featured: false,
    year: "202",
  },
  {
    slug: "i9ama-shop",
    image: "/images/projects/i9ama.png",
    gallery: ["/images/projects/account.png", "/images/projects/home_page.png", "/images/projects/post_item.png"],
    title: "i9amaShop — Flutter Marketplace",
    shortTitle: "i9amaShop",
    description:
      "A full-stack marketplace application that enables users to browse, search, and discover products with real-time backend integration.",
    features: [
      "User authentication",
      "Product listing and search functionality",
      "Product browsing",
      "Product search",
      "Category filtering",
      "Favorites"
    ],
      stack: ["Flutter", "Dart", "FastAPI", "Supabase", "Firebase"],
    featured: false,
    year: "2025",
  },
  {
    slug: "vita-blood-bank",
    image: "/images/projects/vita.png",
    gallery: ["/images/projects/vita_main.png", "/images/projects/vita_donor.png", "/images/projects/vita_stock.png", "/images/projects/vita_dashboard.png", "/images/projects/vita_abt.png"],
    title: "VITA — Blood Bank Management",
    shortTitle: "Blood Bank Platform",
    description:
      "Designed the user interface and user experience for a blood bank management platform, creating intuitive workflows for donor, recipient, and blood inventory management. The logo represents life, hope, and human connection. The hands illustrate people coming together to help others, the blood drop symbolizes the gift that saves lives, and the name VITA reinforces the platform's purpose of protecting and preserving life through blood donation.",
    features: [
      "User authentication",
      " Modern UI",
      " Donor management interface",
      " Recipient management interface",
      " Blood inventory dashboard",
      " Search and filtering",
    ],
      stack: ["Figma", "UI/UX Design", "Prototyping"],
    featured: false,
    year: "2025",
  },
  
  {
    slug: "rfid-coil-optimization",
    image: "/images/projects/rfid.png",
    gallery: ["/images/projects/capacitors.jpg", "/images/projects/circuit.png" , "/images/projects/coil.png", "/images/projects/range.png"],
    title: "RFID Coil Range Optimization",
    shortTitle: "RFID Coil Optimization",
    description:
      "An engineering project focused on optimizing RFID coil design to maximize communication range and improve tag detection reliability through antenna performance analysis.",
    features: [
      "RFID antenna optimization",
      "Reading range improvement",
      "Signal performance analysis",
      "Experimental testing",
      "Performance comparison",
      "Iterative coil design and testing"
    ],
      stack: ["C/C++", "RFID MFRC522", "Arduino"],
    featured: false,
    year: "2026",
  },

    {
    slug: "Money-Spending-Management",  
    image: "/images/projects/money_main.png",
    gallery: ["/images/projects/money_algo.png", "/images/projects/money_eg.png", "/images/projects/money_result.png"],
    title: "Money Spending Management — Intelligent Expense Management ",
    shortTitle: "Budget Management",
    description:
      " An AI-powered budgeting application that helps users optimize their monthly spending by automatically distributing their income across different expense categories.",
    longDescription:
      "An AI-powered budgeting application that helps users optimize their monthly spending by automatically distributing their income across different expense categories. The system applies classical Artificial Intelligence search algorithms and Constraint Satisfaction Problems (CSP) to generate feasible budget plans that satisfy financial constraints while maximizing savings.",
    features: [
  "Automatic monthly budget optimization based on user income and expenses.",
  "Supports multiple AI algorithms including A*, UCS, IDS, DFS, and Hill Climbing.",
  "Constraint Satisfaction Problem (CSP) solver for optimized expense allocation.",
  "Interactive algorithm control panel for comparing different search strategies.",
  "Automatic distribution of expenses across predefined spending categories.",
  "calculation of total expenses, remaining savings, and optimized budget allocation.",
  "Visual analytics with charts and category-based spending summaries."
  ],

      stack: ["Python", "AI Search Algorithms"],
    featured: false,
    year: "2025",

  },

      {
    slug: "My-Portfolio",  
    image: "/images/projects/portfolio_hind.png",
    gallery: ["/images/projects/portfolio_abt.png", "/images/projects/portfolio.png", "/images/projects/portfolio_project.png"],
    title: "My Portfolio — Personal Website ",
    shortTitle: "Personal Portfolio",
    description:
      " A modern personal portfolio website showcasing my projects, skills, and experience.",
    longDescription:
      "An AI-A fully designed and developed personal portfolio that showcases not only my technical projects but also the creative side of who I am. Rather than following the traditional developer portfolio style, I wanted to create an experience that feels personal, tells my story, and highlights the passions that shape me beyond software engineering. The portfolio combines AI, software engineering, UI/UX design, and my creative hobbies into a cohesive digital identity, allowing visitors to explore both my professional work and the person behind it.",
features: [
  "Custom-designed portfolio with a unique visual identity.",
  "Responsive design .",
  "Smooth animations and micro-interactions for an engaging user experience.",
  "Beyond the Code section highlighting hobbies, creativity, and personal interests.",
  "Project galleries with descriptions, features, and technology stacks.",
  "Clean navigation and modern editorial-inspired layouts.",
],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma", "Vercel", "GitHub"],
    featured: false,
    year: "2025",

  },

];

export const featuredProjects = projects.filter((p) => p.featured);

  