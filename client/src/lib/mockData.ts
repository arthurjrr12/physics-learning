import { Path, Module, Quiz } from "@/types";
import { 
  Building, 
  HeartPulse, 
  PlaneTakeoff 
} from "lucide-react";

export const paths: Path[] = [
  {
    id: "engineering",
    title: "Physics for Engineers",
    description: "Master the foundational physics principles that drive engineering innovation. From mechanics to electromagnetism, learn how physics enables engineers to design, build, and optimize systems.",
    iconClass: "ri-building-line",
    icon: Building,
    bgColor: "bg-primary",
    btnBg: "bg-primary",
    tags: ["Mechanics", "Thermodynamics", "Electromagnetism"],
    tagBg: "bg-blue-100",
    tagText: "text-blue-800"
  },
  {
    id: "healthcare",
    title: "Physics for Doctors",
    description: "Discover how physics drives medical technology and treatments. From radiation therapy to diagnostic imaging, understand the physics behind modern medicine.",
    iconClass: "ri-heart-pulse-line",
    icon: HeartPulse,
    bgColor: "bg-[#1DAFB8]",
    btnBg: "bg-[#1DAFB8]",
    tags: ["Radiation", "Medical Imaging", "Biomechanics"],
    tagBg: "bg-teal-100",
    tagText: "text-teal-800"
  },
  {
    id: "aviation",
    title: "Physics for Pilots",
    description: "Understand the physics principles that keep aircraft in the sky. Learn about aerodynamics, meteorology, and the physics of navigation essential for pilots.",
    iconClass: "ri-flight-takeoff-line",
    icon: PlaneTakeoff,
    bgColor: "bg-[#FF9500]",
    btnBg: "bg-[#FF9500]",
    tags: ["Aerodynamics", "Meteorology", "Navigation"],
    tagBg: "bg-amber-100",
    tagText: "text-amber-800"
  }
];

export const modules: Module[] = [
  // Engineering Modules
  {
    id: "eng-intro",
    pathId: "engineering",
    title: "Introduction",
    description: "Basic principles and foundations",
    order: 1,
    content: "Introduction to physics for engineering applications."
  },
  {
    id: "eng-forces",
    pathId: "engineering",
    title: "Forces & Motion",
    description: "Newton's laws and applications",
    order: 2,
    content: "Understanding forces and motion in engineering contexts."
  },
  {
    id: "eng-energy",
    pathId: "engineering",
    title: "Energy & Work",
    description: "Conservation principles and applications",
    order: 3,
    content: "Exploring energy transformation and conservation in engineering systems."
  },
  {
    id: "eng-thermo",
    pathId: "engineering",
    title: "Thermodynamics",
    description: "Heat transfer and engines",
    order: 4,
    content: "Understanding thermodynamic principles in engineering applications."
  },
  {
    id: "eng-em",
    pathId: "engineering",
    title: "Electromagnetism",
    description: "Electricity and magnetism",
    order: 5,
    content: "Exploring electromagnetic principles in engineering applications."
  },
  
  // Healthcare Modules
  {
    id: "health-intro",
    pathId: "healthcare",
    title: "Introduction",
    description: "Basic principles and foundations",
    order: 1,
    content: "Introduction to physics for medical applications."
  },
  {
    id: "health-radiation",
    pathId: "healthcare",
    title: "Radiation Physics",
    description: "Types of radiation and safety",
    order: 2,
    content: "Understanding radiation physics for medical applications."
  },
  {
    id: "health-imaging",
    pathId: "healthcare",
    title: "Medical Imaging",
    description: "Physics of diagnostic imaging",
    order: 3,
    content: "Exploring the physics behind medical imaging technologies."
  },
  {
    id: "health-biomech",
    pathId: "healthcare",
    title: "Biomechanics",
    description: "Physics of the human body",
    order: 4,
    content: "Understanding biomechanical principles in healthcare."
  },
  {
    id: "health-waves",
    pathId: "healthcare",
    title: "Waves & Optics",
    description: "Ultrasound and optical instruments",
    order: 5,
    content: "Exploring waves and optics in medical applications."
  },
  
  // Aviation Modules
  {
    id: "avia-intro",
    pathId: "aviation",
    title: "Introduction",
    description: "Basic principles and foundations",
    order: 1,
    content: "Introduction to physics for aviation."
  },
  {
    id: "avia-aero",
    pathId: "aviation",
    title: "Aerodynamics",
    description: "Principles of flight",
    order: 2,
    content: "Understanding aerodynamic principles for aviation."
  },
  {
    id: "avia-meteo",
    pathId: "aviation",
    title: "Meteorology Physics",
    description: "Weather patterns and phenomena",
    order: 3,
    content: "Exploring the physics of meteorology for pilots."
  },
  {
    id: "avia-nav",
    pathId: "aviation",
    title: "Navigation Physics",
    description: "Principles of navigation systems",
    order: 4,
    content: "Understanding the physics behind navigation systems."
  },
  {
    id: "avia-propulsion",
    pathId: "aviation",
    title: "Propulsion Systems",
    description: "Engines and thrust",
    order: 5,
    content: "Exploring the physics of aircraft propulsion systems."
  }
];

export const quizzes: Quiz[] = [
  // Engineering Quiz
  {
    id: "eng-quiz-1",
    pathId: "engineering",
    moduleId: "eng-energy",
    order: 3,
    question: "An engineer is designing a roller coaster. What happens to the potential energy as the car descends?",
    description: "Test your knowledge on energy conservation principles",
    options: [
      { id: "eng-q1-a", text: "It disappears completely" },
      { id: "eng-q1-b", text: "It converts to kinetic energy" },
      { id: "eng-q1-c", text: "It stays the same regardless of height" },
      { id: "eng-q1-d", text: "It increases as velocity increases" }
    ],
    correctOption: "eng-q1-b",
    explanation: "According to the law of conservation of energy, energy cannot be created or destroyed, only transformed. As the roller coaster car descends, gravitational potential energy (mgh) is converted into kinetic energy (½mv²). This is why the car speeds up as it goes down."
  },
  
  // Healthcare Quiz
  {
    id: "health-quiz-1",
    pathId: "healthcare",
    moduleId: "health-imaging",
    order: 3,
    question: "Which physical property is utilized in MRI technology for medical imaging?",
    description: "Test your knowledge on medical imaging physics",
    options: [
      { id: "health-q1-a", text: "X-ray absorption" },
      { id: "health-q1-b", text: "Nuclear magnetic resonance" },
      { id: "health-q1-c", text: "Ultrasonic reflection" },
      { id: "health-q1-d", text: "Infrared emission" }
    ],
    correctOption: "health-q1-b",
    explanation: "Magnetic Resonance Imaging (MRI) utilizes the physical phenomenon of nuclear magnetic resonance (NMR). It measures the radiofrequency energy released by hydrogen atoms in the body when they are placed in a strong magnetic field and exposed to radio waves. This property allows for detailed imaging of soft tissues without using ionizing radiation."
  },
  
  // Aviation Quiz
  {
    id: "avia-quiz-1",
    pathId: "aviation",
    moduleId: "avia-meteo",
    order: 3,
    question: "What physical principle explains why air pressure decreases with increasing altitude?",
    description: "Test your knowledge on meteorological physics",
    options: [
      { id: "avia-q1-a", text: "Bernoulli's principle" },
      { id: "avia-q1-b", text: "Boyle's law" },
      { id: "avia-q1-c", text: "The weight of air columns above" },
      { id: "avia-q1-d", text: "Coriolis effect" }
    ],
    correctOption: "avia-q1-c",
    explanation: "Air pressure decreases with increasing altitude primarily because of the decreasing weight of the air column above. At higher altitudes, there are fewer air molecules above a given point, resulting in less force (pressure) being exerted. This understanding is crucial for pilots as it affects aircraft performance, altimeter readings, and weather patterns."
  }
];
