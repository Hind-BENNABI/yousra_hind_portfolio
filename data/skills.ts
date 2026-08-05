import { Skill } from "@/types";

export const skills: Skill[] = [
  { name: "Python", category: "language", dotColor: "blue" },
  { name: "Java", category: "language", dotColor: "blue" },
  { name: "JavaScript", category: "language", dotColor: "blue" },
  { name: "SQL", category: "language", dotColor: "pink" },
  { name: "React", category: "framework", dotColor: "blue" },
  { name: "Next.js", category: "framework", dotColor: "blue" },
  { name: "Flutter", category: "framework", dotColor: "blue" },
  { name: "FastAPI", category: "framework", dotColor: "green" },
  { name: "Supabase", category: "tool", dotColor: "green" },
  { name: "Firebase", category: "tool", dotColor: "yellow" },
  { name: "TensorFlow", category: "ml", dotColor: "yellow" },
  { name: "Scikit-learn", category: "ml", dotColor: "yellow" },
  { name: "PyTorch", category: "ml", dotColor: "yellow" },
  { name: "Pandas", category: "ml", dotColor: "green" },
  { name: "NumPy", category: "ml", dotColor: "yellow" },
  { name: "Git", category: "tool", dotColor: "yellow" },
  { name: "GitHub", category: "tool", dotColor: "blue" },
  { name: "Figma", category: "design", dotColor: "pink" },
  { name: "Machine Learning", category: "ml", dotColor: "green" },
  { name: "Deep Learning", category: "ml", dotColor: "green" },
  { name: "Optimization", category: "ml", dotColor: "pink" },
  { name: "Time Series", category: "ml", dotColor: "blue" },
];

// duplicated for a seamless marquee loop
export const marqueeSkills = [...skills, ...skills];
