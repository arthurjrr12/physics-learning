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
  // Engineering Quizzes
  {
    id: "eng-quiz-1",
    pathId: "engineering",
    moduleId: "eng-energy",
    order: 1,
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
  {
    id: "eng-quiz-2",
    pathId: "engineering",
    moduleId: "eng-energy",
    order: 2,
    question: "Which of the following is the correct formula for calculating work done?",
    description: "Apply your understanding of work in physics",
    options: [
      { id: "eng-q2-a", text: "W = F × t (Force × time)" },
      { id: "eng-q2-b", text: "W = F × d (Force × displacement)" },
      { id: "eng-q2-c", text: "W = m × v (Mass × velocity)" },
      { id: "eng-q2-d", text: "W = ½mv² (Kinetic energy)" }
    ],
    correctOption: "eng-q2-b",
    explanation: "Work is defined as the product of the force applied and the displacement in the direction of the force (W = F × d). This formula is crucial in engineering when calculating energy transfer in mechanical systems."
  },
  {
    id: "eng-quiz-3",
    pathId: "engineering",
    moduleId: "eng-energy",
    order: 3,
    question: "In a hydroelectric dam, which energy transformation occurs?",
    description: "Understanding energy transformations in real-world applications",
    options: [
      { id: "eng-q3-a", text: "Nuclear energy to electrical energy" },
      { id: "eng-q3-b", text: "Chemical energy to mechanical energy" },
      { id: "eng-q3-c", text: "Gravitational potential energy to electrical energy" },
      { id: "eng-q3-d", text: "Solar energy to thermal energy" }
    ],
    correctOption: "eng-q3-c",
    explanation: "In a hydroelectric dam, water stored at height has gravitational potential energy. As water flows downward, this potential energy converts to kinetic energy in the flowing water, which then turns turbines to generate electrical energy. Understanding this energy transformation chain is crucial for engineers designing renewable energy systems."
  },
  {
    id: "eng-quiz-4",
    pathId: "engineering",
    moduleId: "eng-energy",
    order: 4,
    question: "According to the second law of thermodynamics, what happens to the entropy of an isolated system over time?",
    description: "Apply thermodynamic principles to engineering systems",
    options: [
      { id: "eng-q4-a", text: "It always decreases" },
      { id: "eng-q4-b", text: "It remains constant" },
      { id: "eng-q4-c", text: "It always increases" },
      { id: "eng-q4-d", text: "It fluctuates randomly" }
    ],
    correctOption: "eng-q4-c",
    explanation: "The second law of thermodynamics states that the entropy (disorder) of an isolated system always increases over time. This principle explains why heat flows from hot to cold objects, why engines can't be 100% efficient, and why certain processes are irreversible—all critical concepts in engineering design."
  },
  {
    id: "eng-quiz-5",
    pathId: "engineering",
    moduleId: "eng-energy",
    order: 5,
    question: "When designing a lever system, what determines its mechanical advantage?",
    description: "Apply principles of mechanical advantage to engineering",
    options: [
      { id: "eng-q5-a", text: "The material the lever is made from" },
      { id: "eng-q5-b", text: "The ratio of the effort arm to the load arm" },
      { id: "eng-q5-c", text: "The total weight of the lever" },
      { id: "eng-q5-d", text: "The speed at which the lever is operated" }
    ],
    correctOption: "eng-q5-b",
    explanation: "The mechanical advantage of a lever is determined by the ratio of the effort arm (distance from the fulcrum to where the force is applied) to the load arm (distance from the fulcrum to where the load is located). This ratio determines how much a lever amplifies force, which is essential knowledge for engineers designing mechanical systems."
  },
  
  // Healthcare Quizzes
  {
    id: "health-quiz-1",
    pathId: "healthcare",
    moduleId: "health-imaging",
    order: 1,
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
  {
    id: "health-quiz-2",
    pathId: "healthcare",
    moduleId: "health-imaging",
    order: 2,
    question: "Which type of radiation has the highest energy and greatest penetrating power?",
    description: "Understanding radiation properties for medical applications",
    options: [
      { id: "health-q2-a", text: "Alpha particles" },
      { id: "health-q2-b", text: "Beta particles" },
      { id: "health-q2-c", text: "Gamma rays" },
      { id: "health-q2-d", text: "Ultraviolet light" }
    ],
    correctOption: "health-q2-c",
    explanation: "Gamma rays have the highest energy and greatest penetrating power among these options. This property makes them useful in certain medical treatments like radiation therapy for cancer, but also requires proper shielding for protection. Healthcare professionals must understand radiation properties to ensure patient safety during diagnostic and therapeutic procedures."
  },
  {
    id: "health-quiz-3",
    pathId: "healthcare",
    moduleId: "health-imaging",
    order: 3,
    question: "In ultrasound imaging, what physical principle allows for the creation of images?",
    description: "Exploring the physics behind diagnostic ultrasound",
    options: [
      { id: "health-q3-a", text: "Photoelectric effect" },
      { id: "health-q3-b", text: "Reflection of sound waves at tissue boundaries" },
      { id: "health-q3-c", text: "Nuclear decay" },
      { id: "health-q3-d", text: "Magnetic field interactions" }
    ],
    correctOption: "health-q3-b",
    explanation: "Ultrasound imaging relies on the reflection (echo) of high-frequency sound waves at the boundaries between tissues with different acoustic impedances. When sound waves encounter a boundary between tissues of different densities, part of the wave is reflected back. By measuring these reflections, the ultrasound device can create an image of internal structures, making it valuable for non-invasive medical diagnostics."
  },
  {
    id: "health-quiz-4",
    pathId: "healthcare",
    moduleId: "health-imaging",
    order: 4,
    question: "What physical principle explains how a defibrillator works to restore normal heart rhythm?",
    description: "Understanding physics applications in cardiac care",
    options: [
      { id: "health-q4-a", text: "Electrical depolarization of cardiac cells" },
      { id: "health-q4-b", text: "Nuclear magnetic resonance" },
      { id: "health-q4-c", text: "Infrared thermal imaging" },
      { id: "health-q4-d", text: "Ultrasonic vibration" }
    ],
    correctOption: "health-q4-a",
    explanation: "A defibrillator works by delivering a controlled electric shock to the heart, which causes simultaneous depolarization of cardiac cells. This momentary 'reset' can allow the heart's natural pacemaker to reestablish a normal rhythm. This application of electrical physics is critical in emergency cardiac care and illustrates how understanding physics principles can directly save lives in healthcare."
  },
  {
    id: "health-quiz-5",
    pathId: "healthcare",
    moduleId: "health-imaging",
    order: 5,
    question: "Which physics concept explains why a patient feels weightless in a hydrotherapy pool?",
    description: "Applying fluid physics to rehabilitation techniques",
    options: [
      { id: "health-q5-a", text: "Bernoulli's principle" },
      { id: "health-q5-b", text: "Archimedes' principle" },
      { id: "health-q5-c", text: "Pascal's law" },
      { id: "health-q5-d", text: "Hooke's law" }
    ],
    correctOption: "health-q5-b",
    explanation: "Archimedes' principle states that the buoyant force on an object submerged in a fluid is equal to the weight of the fluid displaced by the object. In hydrotherapy, this buoyant force counteracts gravity, making patients feel lighter and enabling movements that might be difficult or impossible on land. This principle is fundamental to aquatic physical therapy in healthcare rehabilitation."
  },
  
  // Aviation Quizzes
  {
    id: "avia-quiz-1",
    pathId: "aviation",
    moduleId: "avia-meteo",
    order: 1,
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
  },
  {
    id: "avia-quiz-2",
    pathId: "aviation",
    moduleId: "avia-meteo",
    order: 2,
    question: "Which aerodynamic principle creates the majority of lift for an aircraft wing?",
    description: "Understanding lift generation in aviation",
    options: [
      { id: "avia-q2-a", text: "Bernoulli's principle" },
      { id: "avia-q2-b", text: "Newton's third law" },
      { id: "avia-q2-c", text: "The Coanda effect" },
      { id: "avia-q2-d", text: "All of the above contribute significantly" }
    ],
    correctOption: "avia-q2-d",
    explanation: "Lift generation on an aircraft wing is a complex phenomenon involving multiple physical principles. Bernoulli's principle explains how the pressure difference between the upper and lower surfaces creates lift; Newton's third law describes how the wing deflects air downward, creating an equal and opposite upward force; and the Coanda effect explains how air flow attaches to the curved surface of the wing. Understanding these combined effects is essential for pilots and aviation engineers."
  },
  {
    id: "avia-quiz-3",
    pathId: "aviation",
    moduleId: "avia-meteo",
    order: 3,
    question: "What causes a crosswind to affect an aircraft's ground track?",
    description: "Applying vector physics to aviation navigation",
    options: [
      { id: "avia-q3-a", text: "The Doppler effect" },
      { id: "avia-q3-b", text: "Vector addition of air movement and aircraft movement" },
      { id: "avia-q3-c", text: "The earth's magnetic field" },
      { id: "avia-q3-d", text: "Changes in air pressure" }
    ],
    correctOption: "avia-q3-b",
    explanation: "A crosswind affects an aircraft's ground track through vector addition. The aircraft's movement through the air (airspeed vector) combines with the wind's movement (wind vector) to produce the actual path over the ground (ground track vector). This is why pilots must calculate wind correction angles to maintain their desired course. Understanding vector physics is fundamental to aviation navigation and flight planning."
  },
  {
    id: "avia-quiz-4",
    pathId: "aviation",
    moduleId: "avia-meteo",
    order: 4,
    question: "What physical phenomenon causes the formation of fog?",
    description: "Understanding meteorological physics for flight safety",
    options: [
      { id: "avia-q4-a", text: "Air compression" },
      { id: "avia-q4-b", text: "Condensation of water vapor" },
      { id: "avia-q4-c", text: "Ionization of air molecules" },
      { id: "avia-q4-d", text: "Electromagnetic interference" }
    ],
    correctOption: "avia-q4-b",
    explanation: "Fog forms through condensation of water vapor in the air. When air containing water vapor is cooled to its dew point, or when more water vapor is added to the air, the water vapor condenses into tiny water droplets suspended in the air. Understanding this process is crucial for pilots, as fog significantly reduces visibility and can make takeoffs and landings dangerous or impossible."
  },
  {
    id: "avia-quiz-5",
    pathId: "aviation",
    moduleId: "avia-meteo",
    order: 5,
    question: "Which principle explains why aircraft with pressurized cabins are necessary for high-altitude flight?",
    description: "Understanding cabin pressurization physics",
    options: [
      { id: "avia-q5-a", text: "The low air pressure at high altitudes is insufficient for human respiration" },
      { id: "avia-q5-b", text: "The temperature at high altitudes is too low for human survival" },
      { id: "avia-q5-c", text: "To prevent cosmic radiation exposure" },
      { id: "avia-q5-d", text: "To maintain structural integrity of the aircraft" }
    ],
    correctOption: "avia-q5-a",
    explanation: "Aircraft cabins are pressurized primarily because the air pressure at high altitudes is too low to support adequate human respiration. At typical cruising altitudes (30,000-40,000 feet), the atmospheric pressure is only about 20-30% of sea level pressure. Without pressurization, passengers would suffer hypoxia (oxygen deficiency) due to the reduced partial pressure of oxygen, making breathing difficult or impossible."
  }
];
