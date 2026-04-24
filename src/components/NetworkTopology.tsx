import { memo } from "react";
import { motion } from "motion/react";

type Node = { id: string; x: number; y: number; label?: string };

// viewBox is 200 x 100 (2:1 wide) so labels and rings don't stretch on the hero.
const nodes: Node[] = [
  { id: "n0", x: 14, y: 18, label: "AUTH" },
  { id: "n1", x: 52, y: 9 },
  { id: "n2", x: 96, y: 22, label: "RELAY" },
  { id: "n3", x: 148, y: 11 },
  { id: "n4", x: 186, y: 28 },
  { id: "n5", x: 172, y: 52 },
  { id: "n6", x: 128, y: 58, label: "NODE·06" },
  { id: "n7", x: 78, y: 54 },
  { id: "n8", x: 34, y: 40, label: "CORE" },
  { id: "n9", x: 10, y: 72 },
  { id: "n10", x: 72, y: 82 },
  { id: "n11", x: 142, y: 80, label: "SINK" },
  { id: "n12", x: 188, y: 70 },
];

const nodeById = Object.fromEntries(nodes.map((n) => [n.id, n]));

const edges: [string, string][] = [
  ["n0", "n1"], ["n1", "n2"], ["n2", "n3"], ["n3", "n4"],
  ["n4", "n5"], ["n5", "n6"], ["n6", "n7"], ["n7", "n8"],
  ["n8", "n0"], ["n8", "n9"], ["n9", "n10"], ["n10", "n11"],
  ["n11", "n12"], ["n12", "n5"], ["n7", "n2"], ["n6", "n10"],
  ["n1", "n8"], ["n3", "n5"], ["n8", "n7"], ["n0", "n8"],
];

const packetEdges: { from: string; to: string; duration: number; delay: number }[] = [
  { from: "n0", to: "n1", duration: 3.2, delay: 0 },
  { from: "n2", to: "n3", duration: 2.6, delay: 1.1 },
  { from: "n4", to: "n5", duration: 3.8, delay: 2.3 },
  { from: "n6", to: "n7", duration: 2.9, delay: 0.7 },
  { from: "n8", to: "n0", duration: 4.1, delay: 1.8 },
  { from: "n9", to: "n10", duration: 3.4, delay: 0.4 },
  { from: "n11", to: "n12", duration: 2.7, delay: 2.1 },
  { from: "n7", to: "n2", duration: 3.6, delay: 1.5 },
  { from: "n5", to: "n6", duration: 2.4, delay: 3.0 },
  { from: "n1", to: "n8", duration: 3.9, delay: 0.9 },
];

export const NetworkTopology = memo(function NetworkTopology({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 200 100"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="packet-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="node-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#c74e1d" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c74e1d" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Edges */}
        {edges.map(([a, b], i) => {
          const from = nodeById[a];
          const to = nodeById[b];
          return (
            <line
              key={`e-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#6b3520"
              strokeWidth="0.12"
              strokeOpacity="0.45"
            />
          );
        })}

        {/* Node halo — pulsing */}
        {nodes.map((n, i) => (
          <motion.circle
            key={`halo-${n.id}`}
            cx={n.x}
            cy={n.y}
            r={2.2}
            fill="url(#node-core)"
            animate={{ opacity: [0.12, 0.35, 0.12], scale: [0.8, 1.15, 0.8] }}
            transition={{
              duration: 3 + (i % 5) * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i * 0.3) % 4,
            }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
        ))}

        {/* Node core ring */}
        {nodes.map((n) => (
          <g key={`node-${n.id}`}>
            <circle cx={n.x} cy={n.y} r={0.55} fill="#f5e9dc" fillOpacity="0.75" />
            <circle
              cx={n.x}
              cy={n.y}
              r={1.05}
              fill="none"
              stroke="#c74e1d"
              strokeWidth="0.18"
              strokeOpacity="0.7"
            />
          </g>
        ))}

        {/* Packets */}
        {packetEdges.map((p, i) => {
          const from = nodeById[p.from];
          const to = nodeById[p.to];
          return (
            <motion.circle
              key={`pkt-${i}`}
              r={0.5}
              fill="#f59e0b"
              filter="url(#packet-glow)"
              initial={{ cx: from.x, cy: from.y, opacity: 0 }}
              animate={{
                cx: [from.x, to.x],
                cy: [from.y, to.y],
                opacity: [0, 1, 1, 0.9, 0],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                repeatDelay: 0.8 + (i % 3) * 0.4,
                ease: "easeInOut",
                times: [0, 0.15, 0.7, 0.85, 1],
              }}
            />
          );
        })}

        {/* Node labels */}
        {nodes
          .filter((n) => n.label)
          .map((n) => (
            <text
              key={`lbl-${n.id}`}
              x={n.x + 1.8}
              y={n.y - 1.3}
              fontSize="1.3"
              fontFamily="IBM Plex Mono, monospace"
              fill="#7a6a5e"
              opacity="0.8"
              letterSpacing="0.05em"
            >
              {n.label}
            </text>
          ))}
      </svg>
    </div>
  );
});
