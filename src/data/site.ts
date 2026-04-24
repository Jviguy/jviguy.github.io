export const site = {
  name: "Jeremy Ianne",
  role: "Systems & Networking Engineer",
  tagline:
    "Low-level systems programming, networking, and protocol design. Self-taught since 14, now a CS student at Clemson.",
  github: "https://github.com/Jviguy",
  linkedin: "https://www.linkedin.com/in/jeremy-ianne-5a3621201/",
} as const;

export const skills = {
  Languages: ["Rust", "C++", "Go", "TypeScript", "Python", "Bash"],
  Networking: ["TCP/IP", "UDP", "HTTP/S", "DNS", "Packet Analysis", "Cisco IOS"],
  "Cloud & DevOps": ["AWS", "CloudFormation", "Docker", "Kubernetes"],
  Interests: ["Distributed Systems", "Game Servers", "Reverse Engineering", "Cryptography"],
} as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  stack?: string[];
};

export const experience: Experience[] = [
  {
    company: "D'Skills",
    role: "Cloud Solutions Architect (Contractor)",
    period: "Mar 2024 - Present",
    location: "Remote",
    points: [
      "Designed a Virtual Machine Infrastructure platform so students could reach AI tools otherwise blocked by school networks.",
      "Shipped it to schools in Hawaii and Michigan, where it now backs the D'Skills AI curriculum as their core product.",
    ],
  },
  {
    company: "Kashmir World Foundation",
    role: "Lead Backend / DevOps Engineer",
    period: "Jun 2023 - Jun 2025",
    location: "Remote",
    points: [
      "Led a team of 7-10 developers building an offline-first data collection app for wildlife researchers.",
      "Designed a lightweight syncing protocol assuming the user is usually offline, and integrated drones, camera stations, and research computers.",
      "Owned architecture decisions, tech stack, and CI/CD release pipelines.",
    ],
    stack: ["TypeScript", "Expo", "React Native"],
  },
  {
    company: "Code Ninjas",
    role: "Code Sensei",
    period: "Jan 2022 - Mar 2024",
    location: "Tega Cay, SC",
    points: [
      "Taught students ages 5-15 from foundational programming through senior-level C# and Unity.",
      "Mentored the location's first cohort of \"Black Belt\" graduates from concept to finished games.",
      "Continued mentoring a former student through the release of their first independent game on Steam and itch.io.",
    ],
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  location: string;
  note?: string;
};

export const education: Education[] = [
  {
    school: "Clemson University",
    degree: "B.E. Computer Science",
    period: "2025 - 2028",
    location: "Clemson, SC",
  },
  {
    school: "Virginia Polytechnic State University",
    degree: "B.E. Computer Science",
    period: "2024 - 2025",
    location: "Blacksburg, VA",
  },
  {
    school: "York Technical College",
    degree: "Cybersecurity & Networking Certificate",
    period: "2022 - 2024",
    location: "Fort Mill, SC",
    note: "Completed as a Dual Enrollment student during high school.",
  },
];

export type Project = {
  title: string;
  description: string;
  url?: string;
  tech?: string[];
};

export const projects: Project[] = [
  {
    title: "Axolotl Stack",
    description:
      "Modular Minecraft Bedrock server stack in Rust, 500k+ lines across a set of crates: an async RakNet transport (tokio-raknet) and a newer WebRTC-based Nethernet transport (tokio-nethernet), a PrismarineJS-driven protocol code generator (valentine), the full protocol engine with encryption/compression/auth (jolyne), an Xbox Live auth library (axolotl-xbl), and the server implementation itself (unastar). Built Axelerator on top of it to fix a long-standing Bedrock limitation (consoles can't join non-featured servers) by running a local Nethernet session and advertising it as a friend session through the Xbox Live API, so anyone can join via the friends tab.",
    url: "https://github.com/axolotl-stack/axolotl-stack",
    tech: ["Rust", "Tokio", "RakNet", "WebRTC", "Protocols", "Xbox Live"],
  },
  {
    title: "Rsquery",
    description:
      "Published Rust library for querying Minecraft Bedrock servers over the GameSpy protocol. 2.8k+ downloads on crates.io, used by developers in the Dragonfly server ecosystem.",
    url: "https://github.com/jviguy/rsquery",
    tech: ["Rust", "crates.io", "GameSpy", "Networking"],
  },
  {
    title: "Trading Infrastructure",
    description:
      "Latency-sensitive Rust bots for Polymarket and Hyperliquid DEX arbitrage, plus a Jito sniper stack for Solana MEV. Hot paths are zero-alloc, zero-clone. Repos are private.",
    tech: ["Rust", "DeFi", "MEV", "Low-latency"],
  },
  {
    title: "Embedded Rust · RP2040",
    description:
      "Bare-metal Rust on the RP2040. Multi-core scheduling for real-time input handling across rotary encoders and other configurable peripherals.",
    url: "https://github.com/Jviguy/led_light_up",
    tech: ["Rust", "RP2040", "Bare metal", "Embedded"],
  },
  {
    title: "Ternary Computer Emulator",
    description:
      "Balanced-ternary computer emulator with a custom RISC-like ISA. Originally written in C++, rewritten in Rust.",
    url: "https://github.com/Jviguy/Triode",
    tech: ["Rust", "C++", "ISA design"],
  },
];
