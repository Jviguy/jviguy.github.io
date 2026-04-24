import { useEffect, useState } from "react";
import { motion } from "motion/react";

const bootLines = [
  { t: "0.00", msg: "init::runtime" },
  { t: "0.12", msg: "identity = jeremy.ianne" },
  { t: "0.34", msg: "school   = clemson.cs" },
  { t: "0.57", msg: "langs    = rust / c++ / go" },
  { t: "0.81", msg: "focus    = protocols + netcode" },
  { t: "1.02", msg: "experience = ~8y" },
];

export function BootSequence() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShown((s) => (s >= bootLines.length ? s : s + 1));
    }, 320);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative font-mono text-[11px] leading-relaxed text-fg-dim sm:text-xs">
      {bootLines.slice(0, shown).map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex items-baseline gap-2.5"
        >
          <span className="shrink-0 text-fg-dimmer tabular-nums">[{line.t}]</span>
          <span className="min-w-0 text-fg-muted whitespace-pre">{line.msg}</span>
        </motion.div>
      ))}
    </div>
  );
}
