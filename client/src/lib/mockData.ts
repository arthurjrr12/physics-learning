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
    content: "Introduction to physics for engineering applications.",
    learningObjectives: [
      "Understand the fundamental physics principles in engineering",
      "Identify how physics concepts are applied in various engineering disciplines",
      "Recognize the importance of physics in solving engineering problems"
    ],
    keyTerms: ["Force", "Energy", "Work", "Power", "Mechanics", "Vector"],
    stemActivities: [
      {
        id: "eng-intro-act1",
        title: "Build a Load-Bearing Bridge",
        description: "Design and construct a paper bridge that can support the maximum weight possible.",
        materials: ["Paper sheets", "Scissors", "Tape", "Ruler", "Weights or coins for testing"],
        steps: [
          "Fold and cut paper to create structural components",
          "Design your bridge with focus on distributing weight evenly",
          "Test different shapes to find the strongest configuration",
          "Assemble the final bridge design",
          "Test how much weight your bridge can hold before collapsing"
        ],
        expectedOutcome: "A paper bridge that demonstrates structural engineering principles and can support multiple coins or weights.",
        scienceConnection: "This activity demonstrates principles of force distribution, structural integrity, and how shapes like triangles and arches can strengthen structures—concepts used by civil engineers.",
        difficultyLevel: "beginner",
        estimatedTime: "45 minutes"
      }
    ]
  },
  {
    id: "eng-forces",
    pathId: "engineering",
    title: "Forces & Motion",
    description: "Newton's laws and applications",
    order: 2,
    content: "Understanding forces and motion in engineering contexts.",
    learningObjectives: [
      "Apply Newton's three laws of motion to engineering problems",
      "Calculate forces, acceleration, and momentum in systems",
      "Analyze real-world engineering applications of force and motion"
    ],
    keyTerms: ["Newton's Laws", "Friction", "Inertia", "Momentum", "Acceleration", "Force Vector"],
    stemActivities: [
      {
        id: "eng-forces-act1",
        title: "Balloon-Powered Car",
        description: "Design and build a car that moves using the principle of action-reaction (Newton's Third Law).",
        materials: ["Cardboard", "Bottle caps or small wheels", "Straws", "Balloons", "Tape", "Wooden skewers (for axles)"],
        steps: [
          "Design a simple car chassis from cardboard",
          "Create an axle system using straws and skewers",
          "Attach bottle caps as wheels",
          "Mount a balloon to the top with its opening facing backward",
          "Inflate the balloon and release to propel the car forward",
          "Measure distance traveled and make design improvements"
        ],
        expectedOutcome: "A functional car that converts the potential energy in the balloon to kinetic energy, demonstrating Newton's Third Law.",
        scienceConnection: "This activity demonstrates Newton's Third Law of Motion: for every action there is an equal and opposite reaction. As air rushes out of the balloon in one direction, the car moves in the opposite direction.",
        difficultyLevel: "intermediate",
        estimatedTime: "60 minutes"
      }
    ]
  },
  {
    id: "eng-energy",
    pathId: "engineering",
    title: "Energy & Work",
    description: "Conservation principles and applications",
    order: 3,
    content: "Exploring energy transformation and conservation in engineering systems.",
    learningObjectives: [
      "Differentiate between various forms of energy",
      "Apply the law of conservation of energy to engineering problems",
      "Calculate work, power, and efficiency in systems"
    ],
    keyTerms: ["Potential Energy", "Kinetic Energy", "Conservation of Energy", "Efficiency", "Work", "Joule"],
    stemActivities: [
      {
        id: "eng-energy-act1",
        title: "Marble Run Energy Transformer",
        description: "Create a marble run that demonstrates energy transformations between potential and kinetic energy.",
        materials: ["Cardboard tubes or foam pipe insulation cut in half", "Marbles", "Tape", "Scissors", "Ruler", "Stopwatch", "Meter stick"],
        steps: [
          "Design a marble run with various heights and curves",
          "Set up measurement points to track the marble's velocity",
          "Create a data collection sheet",
          "Run trials, releasing the marble from different heights",
          "Calculate potential and kinetic energy at various points",
          "Analyze where energy is conserved or lost to friction"
        ],
        expectedOutcome: "A functioning marble run that allows for quantitative measurements of energy transformations.",
        scienceConnection: "This activity demonstrates the conversion between potential energy (height × gravity × mass) and kinetic energy (½ × mass × velocity²), allowing students to verify the law of conservation of energy and identify energy losses.",
        difficultyLevel: "intermediate",
        estimatedTime: "75 minutes"
      }
    ]
  },
  {
    id: "eng-thermo",
    pathId: "engineering",
    title: "Thermodynamics",
    description: "Heat transfer and engines",
    order: 4,
    content: "Understanding thermodynamic principles in engineering applications.",
    learningObjectives: [
      "Explain the laws of thermodynamics",
      "Analyze heat transfer mechanisms",
      "Evaluate efficiency in thermal systems and engines"
    ],
    keyTerms: ["Entropy", "Heat Transfer", "Thermal Expansion", "Conduction", "Convection", "Radiation"],
    stemActivities: [
      {
        id: "eng-thermo-act1",
        title: "Build a Solar Thermal Collector",
        description: "Design and build a simple solar thermal collector to convert solar energy to heat energy.",
        materials: ["Black construction paper", "Aluminum foil", "Cardboard box", "Plastic wrap", "Thermometer", "Copper tubing (optional)", "Water container"],
        steps: [
          "Line a cardboard box with aluminum foil (reflective side up)",
          "Position black construction paper inside to absorb heat",
          "Create a clear plastic cover to trap heat",
          "For advanced version: Create a water circulation system with copper tubing",
          "Place in sunlight and measure temperature changes over time",
          "Compare effectiveness of different designs"
        ],
        expectedOutcome: "A device that demonstrates how solar radiation can be captured and converted to heat energy, with measurable temperature increases.",
        scienceConnection: "This activity demonstrates principles of radiation, absorption, insulation, and heat transfer—key concepts in thermodynamics. It also shows how engineers apply these principles in renewable energy systems.",
        difficultyLevel: "advanced",
        estimatedTime: "90 minutes"
      }
    ]
  },
  {
    id: "eng-em",
    pathId: "engineering",
    title: "Electromagnetism",
    description: "Electricity and magnetism",
    order: 5,
    content: "Exploring electromagnetic principles in engineering applications.",
    learningObjectives: [
      "Understand the relationship between electricity and magnetism",
      "Apply electromagnetic principles to engineering design",
      "Build and analyze simple circuits and electromagnets"
    ],
    keyTerms: ["Current", "Voltage", "Resistance", "Magnetic Field", "Induction", "Electromagnet"],
    stemActivities: [
      {
        id: "eng-em-act1",
        title: "Build an Electric Motor",
        description: "Construct a simple electric motor using magnets, wire, and a battery.",
        materials: ["Insulated copper wire", "Strong neodymium magnets", "D-cell battery", "Battery holder", "Paper clips", "Electrical tape", "Sandpaper"],
        steps: [
          "Create a coil by wrapping copper wire around a cylindrical object",
          "Sand the insulation off one half of each end of the coil",
          "Construct a support structure using paper clips",
          "Position the magnets near the coil",
          "Connect the battery and observe the coil spinning",
          "Experiment with different coil sizes and magnetic field strengths"
        ],
        expectedOutcome: "A functioning electric motor that converts electrical energy to mechanical energy through electromagnetic principles.",
        scienceConnection: "This activity demonstrates how electrical current creates a magnetic field, and how the interaction between magnetic fields can create mechanical force—the fundamental principle behind electric motors used in countless engineering applications.",
        difficultyLevel: "advanced",
        estimatedTime: "60 minutes"
      }
    ]
  },
  
  // Healthcare Modules
  {
    id: "health-intro",
    pathId: "healthcare",
    title: "Introduction",
    description: "Basic principles and foundations",
    order: 1,
    content: "Introduction to physics for medical applications.",
    learningObjectives: [
      "Identify the fundamental physics concepts relevant to medicine",
      "Recognize how physics principles are applied in medical technologies",
      "Understand the historical development of medical physics"
    ],
    keyTerms: ["Biomechanics", "Medical Imaging", "Radiation", "Optics", "Acoustics"],
    stemActivities: [
      {
        id: "health-intro-act1",
        title: "Stethoscope Physics Explorer",
        description: "Build a simple stethoscope and explore the physics of sound in medical diagnosis.",
        materials: ["Flexible tubing", "Small funnels", "Tape", "Scissors", "Various materials (cloth, paper, water) for sound testing"],
        steps: [
          "Connect a funnel to each end of the tubing",
          "Create a seal at the listening end",
          "Test your stethoscope on different surfaces",
          "Record and compare sounds through different materials",
          "Explore how placement affects sound quality",
          "Discuss how acoustic principles inform medical device design"
        ],
        expectedOutcome: "A functioning stethoscope that demonstrates acoustic principles and how they're applied in medicine.",
        scienceConnection: "This activity demonstrates the physics of sound waves, including transmission, amplification, and frequency detection—principles that underlie many diagnostic tools in medicine.",
        difficultyLevel: "beginner",
        estimatedTime: "45 minutes"
      }
    ]
  },
  {
    id: "health-radiation",
    pathId: "healthcare",
    title: "Radiation Physics",
    description: "Types of radiation and safety",
    order: 2,
    content: "Understanding radiation physics for medical applications.",
    learningObjectives: [
      "Differentiate between types of radiation used in medicine",
      "Explain how radiation interacts with biological tissues",
      "Apply radiation safety principles in medical settings"
    ],
    keyTerms: ["Ionizing Radiation", "Half-life", "Absorption", "Shielding", "Dosimetry", "Radioisotope"],
    stemActivities: [
      {
        id: "health-radiation-act1",
        title: "Radiation Shielding Experiment",
        description: "Test the effectiveness of different materials in blocking light (as an analogy for radiation shielding).",
        materials: ["Flashlight", "Light meter or smartphone light meter app", "Various materials (aluminum foil, paper, plastic, cloth)", "Ruler", "Graph paper"],
        steps: [
          "Set up a controlled testing environment with minimal ambient light",
          "Place the light meter at a fixed distance from the flashlight",
          "Record baseline light intensity without shielding",
          "Test different materials as shields, recording light intensity for each",
          "Test layered combinations of materials",
          "Graph the effectiveness of different materials and thicknesses"
        ],
        expectedOutcome: "Data showing the relative effectiveness of different materials in blocking light, serving as an analogy for radiation shielding properties.",
        scienceConnection: "While visible light differs from ionizing radiation, this activity introduces concepts of attenuation, material properties, and the inverse square law that apply to radiation physics in medical imaging and treatment.",
        difficultyLevel: "intermediate",
        estimatedTime: "60 minutes"
      }
    ]
  },
  {
    id: "health-imaging",
    pathId: "healthcare",
    title: "Medical Imaging",
    description: "Physics of diagnostic imaging",
    order: 3,
    content: "Exploring the physics behind medical imaging technologies.",
    learningObjectives: [
      "Compare physical principles behind different imaging technologies",
      "Analyze how image formation occurs in various modalities",
      "Evaluate advantages and limitations of imaging techniques"
    ],
    keyTerms: ["Ultrasound", "MRI", "CT Scan", "X-ray", "Contrast", "Resolution"],
    stemActivities: [
      {
        id: "health-imaging-act1",
        title: "Ultrasound Modeling Lab",
        description: "Create a model demonstrating how ultrasound imaging works by detecting objects in an opaque container.",
        materials: ["Large opaque container", "Water", "Various objects of different densities", "Wooden dowel or rod", "Ruler", "Grid paper", "Modeling clay"],
        steps: [
          "Fill the container with water and place objects inside",
          "Create a grid system on top of the container",
          "Use the dowel to probe the container at grid intersections",
          "Record the depth at which the dowel encounters resistance",
          "Map the hidden objects based on probe measurements",
          "Compare your map to the actual arrangement of objects"
        ],
        expectedOutcome: "A mapped representation of hidden objects that demonstrates the principle of echo-location used in ultrasound imaging.",
        scienceConnection: "This activity models how ultrasound imaging uses sound wave reflection to create images of internal structures, demonstrating concepts of wave reflection, velocity measurement, and image reconstruction used in medical sonography.",
        difficultyLevel: "intermediate",
        estimatedTime: "75 minutes"
      }
    ]
  },
  {
    id: "health-biomech",
    pathId: "healthcare",
    title: "Biomechanics",
    description: "Physics of the human body",
    order: 4,
    content: "Understanding biomechanical principles in healthcare.",
    learningObjectives: [
      "Apply mechanical principles to human movement",
      "Analyze forces and torques in the musculoskeletal system",
      "Evaluate biomechanical interventions in medical treatments"
    ],
    keyTerms: ["Lever", "Torque", "Center of Mass", "Gait Analysis", "Prosthetics", "Joint Mechanics"],
    stemActivities: [
      {
        id: "health-biomech-act1",
        title: "Biomechanical Arm Model",
        description: "Build a functional model of the human arm to demonstrate biomechanical principles of levers and muscle mechanics.",
        materials: ["Cardboard", "Brads/paper fasteners", "Rubber bands", "String", "Small weights", "Protractor", "Ruler"],
        steps: [
          "Cut cardboard pieces to represent arm bones (humerus, radius, ulna)",
          "Connect the pieces with brads to create joints",
          "Attach rubber bands to represent antagonistic muscle pairs",
          "Create points for attaching weights to the hand",
          "Measure force required to lift different weights",
          "Experiment with different muscle attachment points and angles"
        ],
        expectedOutcome: "A functioning model demonstrating lever systems in the human arm and how muscle position affects mechanical advantage.",
        scienceConnection: "This activity demonstrates the third-class lever system in the human arm, showing how biomechanical principles determine strength, range of motion, and efficiency—concepts critical in physical therapy, orthopedics, and prosthetic design.",
        difficultyLevel: "advanced",
        estimatedTime: "90 minutes"
      }
    ]
  },
  {
    id: "health-waves",
    pathId: "healthcare",
    title: "Waves & Optics",
    description: "Ultrasound and optical instruments",
    order: 5,
    content: "Exploring waves and optics in medical applications.",
    learningObjectives: [
      "Explain how wave properties apply to medical technologies",
      "Analyze optical systems used in medical instruments",
      "Evaluate diagnostic applications of wave-based technologies"
    ],
    keyTerms: ["Frequency", "Wavelength", "Refraction", "Reflection", "Doppler Effect", "Focal Length"],
    stemActivities: [
      {
        id: "health-waves-act1",
        title: "Medical Endoscope Simulator",
        description: "Build a simple endoscope model to understand fiber optics and lenses in medical imaging.",
        materials: ["PVC pipe or cardboard tubes", "Small mirrors", "Magnifying lens", "Smartphone with flashlight", "Tape", "Small objects for viewing", "Black construction paper"],
        steps: [
          "Construct a tube with a viewing port and a light source port",
          "Install mirrors at 45-degree angles to create a periscope effect",
          "Add a magnifying lens at the viewing end",
          "Create a chamber with small objects to 'diagnose'",
          "Use your device to view and identify objects in the chamber",
          "Experiment with different lens configurations"
        ],
        expectedOutcome: "A functioning optical device that demonstrates principles used in medical endoscopes to view inaccessible areas.",
        scienceConnection: "This activity demonstrates principles of reflection, refraction, and image transmission that are fundamental to fiber optic endoscopes, laparoscopes, and other minimally invasive diagnostic tools used in modern medicine.",
        difficultyLevel: "advanced",
        estimatedTime: "90 minutes"
      }
    ]
  },
  
  // Aviation Modules
  {
    id: "avia-intro",
    pathId: "aviation",
    title: "Introduction",
    description: "Basic principles and foundations",
    order: 1,
    content: "Introduction to physics for aviation.",
    learningObjectives: [
      "Identify key physics concepts relevant to aviation",
      "Recognize how physics principles enable flight",
      "Understand the historical development of flight physics"
    ],
    keyTerms: ["Aerodynamics", "Pressure", "Density", "Gravity", "Thrust", "Drag"],
    stemActivities: [
      {
        id: "avia-intro-act1",
        title: "Paper Airplane Physics Lab",
        description: "Design, build, and test paper airplanes to explore basic principles of flight.",
        materials: ["Various types of paper", "Scissors", "Tape", "Paper clips", "Ruler", "Stopwatch", "Measuring tape"],
        steps: [
          "Research different paper airplane designs",
          "Create three different designs with the same paper",
          "Test each design for distance, flight time, and stability",
          "Modify one design by adding weight at different positions",
          "Record the effect of modifications on flight characteristics",
          "Analyze which design features affect specific flight properties"
        ],
        expectedOutcome: "Multiple paper airplane designs with test data showing how design affects flight characteristics.",
        scienceConnection: "This activity introduces the four forces of flight (lift, weight, thrust, drag) and demonstrates how wing shape, weight distribution, and center of gravity affect flight performance—principles that aeronautical engineers use in aircraft design.",
        difficultyLevel: "beginner",
        estimatedTime: "60 minutes"
      }
    ]
  },
  {
    id: "avia-aero",
    pathId: "aviation",
    title: "Aerodynamics",
    description: "Principles of flight",
    order: 2,
    content: "Understanding aerodynamic principles for aviation.",
    learningObjectives: [
      "Explain how airfoils generate lift",
      "Apply Bernoulli's principle to wing design",
      "Analyze factors affecting drag and lift in aircraft"
    ],
    keyTerms: ["Airfoil", "Bernoulli's Principle", "Angle of Attack", "Boundary Layer", "Lift Coefficient", "Streamlining"],
    stemActivities: [
      {
        id: "avia-aero-act1",
        title: "Wind Tunnel Airfoil Testing",
        description: "Build a simple wind tunnel to test different airfoil shapes and visualize airflow patterns.",
        materials: ["Clear plastic box or container", "Small fan", "Straws", "Cardboard", "Clay", "Thread or yarn", "Smoke source (optional - under supervision only)"],
        steps: [
          "Cut openings in the plastic container for air intake and outflow",
          "Create a test section with clear visibility",
          "Install straws as flow straighteners at the intake",
          "Create different airfoil shapes from cardboard",
          "Mount airfoils in the test section",
          "Use threads as flow indicators to visualize air patterns",
          "Test lift by mounting airfoils on a balance"
        ],
        expectedOutcome: "A functional wind tunnel that allows visualization of airflow patterns around different wing shapes and comparative testing of lift generation.",
        scienceConnection: "This activity demonstrates Bernoulli's principle, flow separation, boundary layer effects, and pressure differential—concepts central to understanding how wings generate lift and how aircraft maintain controlled flight.",
        difficultyLevel: "advanced",
        estimatedTime: "120 minutes"
      }
    ]
  },
  {
    id: "avia-meteo",
    pathId: "aviation",
    title: "Meteorology Physics",
    description: "Weather patterns and phenomena",
    order: 3,
    content: "Exploring the physics of meteorology for pilots.",
    learningObjectives: [
      "Explain atmospheric structure and pressure systems",
      "Analyze the physics of weather phenomena relevant to aviation",
      "Evaluate how weather conditions affect flight operations"
    ],
    keyTerms: ["Air Mass", "Front", "Pressure Gradient", "Coriolis Effect", "Convection", "Precipitation"],
    stemActivities: [
      {
        id: "avia-meteo-act1",
        title: "Cloud Formation Chamber",
        description: "Create a cloud in a bottle to demonstrate principles of air pressure, temperature, and condensation.",
        materials: ["Clear plastic bottle with cap", "Warm water", "Match or incense stick (for smoke particles)", "Pump with valve adapter (or bicycle pump)"],
        steps: [
          "Add a small amount of warm water to the bottle",
          "Introduce some smoke particles as condensation nuclei",
          "Seal the bottle and pressurize it with the pump",
          "Observe the bottle contents - no cloud should be visible yet",
          "Quickly release the pressure by opening the cap",
          "Observe the sudden formation of a cloud inside the bottle",
          "Experiment with different temperature water and pressure levels"
        ],
        expectedOutcome: "A visible cloud forming inside the bottle, demonstrating adiabatic cooling and condensation principles.",
        scienceConnection: "This activity demonstrates principles of pressure-temperature relationships, adiabatic processes, and condensation that drive cloud formation and many weather phenomena pilots must understand. It shows how changing pressure affects air temperature and water's phase state.",
        difficultyLevel: "intermediate",
        estimatedTime: "45 minutes"
      }
    ]
  },
  {
    id: "avia-nav",
    pathId: "aviation",
    title: "Navigation Physics",
    description: "Principles of navigation systems",
    order: 4,
    content: "Understanding the physics behind navigation systems.",
    learningObjectives: [
      "Explain physical principles behind navigation systems",
      "Analyze how electromagnetic waves are used for positioning",
      "Apply trigonometric principles to navigation problems"
    ],
    keyTerms: ["Radio Waves", "Triangulation", "GPS", "Magnetic Compass", "Great Circle", "Radio Direction Finding"],
    stemActivities: [
      {
        id: "avia-nav-act1",
        title: "Triangulation Navigation Challenge",
        description: "Use bearings from multiple known positions to locate an unknown position, simulating radio navigation techniques.",
        materials: ["Large paper or map", "Protractor", "Ruler", "String", "Pushpins", "Compass"],
        steps: [
          "Create a coordinate grid on large paper",
          "Establish three 'transmitter' positions with pushpins",
          "Have someone place a target object out of sight",
          "From each transmitter, measure the bearing to the target",
          "Draw lines from each transmitter along the measured bearings",
          "Identify the target location where the lines intersect",
          "Calculate the accuracy of your triangulation"
        ],
        expectedOutcome: "Successfully locating a hidden object using principles of triangulation, with an understanding of error sources.",
        scienceConnection: "This activity demonstrates the principles behind VOR (VHF Omnidirectional Range) and other radio navigation systems. It shows how directional information from multiple known points can determine an unknown position—a fundamental concept in aviation navigation.",
        difficultyLevel: "intermediate",
        estimatedTime: "60 minutes"
      }
    ]
  },
  {
    id: "avia-propulsion",
    pathId: "aviation",
    title: "Propulsion Systems",
    description: "Engines and thrust",
    order: 5,
    content: "Exploring the physics of aircraft propulsion systems.",
    learningObjectives: [
      "Compare different propulsion systems used in aviation",
      "Analyze thrust generation in jet and propeller engines",
      "Evaluate efficiency and performance factors in propulsion"
    ],
    keyTerms: ["Thrust", "Propeller", "Jet Engine", "Compression", "Combustion", "Newton's Third Law"],
    stemActivities: [
      {
        id: "avia-propulsion-act1",
        title: "Balloon Jet Propulsion Lab",
        description: "Create a balloon-powered thrust demonstration with measurements and modifications.",
        materials: ["Balloons", "Fishing line or string (10+ feet)", "Straw", "Tape", "Stopwatch", "Measuring tape", "Various nozzle materials (paper, plastic)"],
        steps: [
          "Thread a fishing line through a straw",
          "Secure the line horizontally across the room",
          "Attach a balloon to the straw with the opening facing backward",
          "Mark start and finish positions on the line",
          "Inflate the balloon and release it to travel along the line",
          "Time the balloon's journey and calculate velocity",
          "Experiment with different balloon sizes and nozzle shapes",
          "Graph the relationship between air volume and distance/speed"
        ],
        expectedOutcome: "Quantitative data showing the relationship between air pressure, nozzle shape, and resulting thrust performance.",
        scienceConnection: "This activity demonstrates Newton's Third Law, the principle behind all jet propulsion systems. It shows how the expulsion of mass (air) in one direction creates thrust in the opposite direction—the fundamental physics behind how jet engines generate the thrust that powers modern aircraft.",
        difficultyLevel: "intermediate",
        estimatedTime: "60 minutes"
      }
    ]
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
