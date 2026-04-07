import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Petal = {
  id: number;
  xOriginal: number; 
  xOffset1: number;
  xOffset2: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  isGreen: boolean;
};

const FallingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate static petals once on mount to avoid react re-renders resetting animations
    const generatedPetals: Petal[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      xOriginal: Math.random() * 100, // random start horizontal %
      xOffset1: (Math.random() - 0.5) * 15, // left/right sway limits
      xOffset2: (Math.random() - 0.5) * 15,
      size: Math.random() * 5 + 6, // size between 6px and 11px
      duration: Math.random() * 8 + 15, // fall duration between 15s and 23s (very gentle/soft)
      delay: Math.random() * -25, // negative delay means they are already scattered falling from the start
      rotation: Math.random() * 360, // starting angle
      isGreen: Math.random() > 0.6, // 40% chance of vivid red, 60% chance burgundy petal
    }));
    setPetals(generatedPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute top-[-5%]" // Start just above the screen
          animate={{
            y: ["0vh", "110vh"], // Drop past the screen
            x: [
              `calc(${petal.xOriginal}vw)`,
              `calc(${petal.xOriginal + petal.xOffset1}vw)`,
              `calc(${petal.xOriginal + petal.xOffset2}vw)`
            ], // Gentle swaying left and right
            rotate: [petal.rotation, petal.rotation + 360 * (petal.id % 2 === 0 ? 1 : -1)], // lazy tumble
            opacity: [0, 0.7, 0.7, 0], // slow fade in, stay visible, fade out at very end
          }}
          transition={{
            y: { duration: petal.duration, repeat: Infinity, ease: "linear", delay: petal.delay },
            x: { duration: petal.duration, repeat: Infinity, ease: "easeInOut", delay: petal.delay },
            rotate: { duration: petal.duration, repeat: Infinity, ease: "linear", delay: petal.delay },
            opacity: { duration: petal.duration, repeat: Infinity, ease: "easeInOut", delay: petal.delay },
          }}
        >
          {/* Petal Shape - Leafy tear-drop */}
          <div 
            style={{
              width: petal.size,
              height: petal.size * 1.2, 
              borderTopRightRadius: '100%',
              borderBottomLeftRadius: '100%',
              borderTopLeftRadius: '40%', 
              borderBottomRightRadius: '40%',
              backgroundColor: petal.isGreen ? 'hsl(var(--burgundy))' : '#A31C30', // Deep burgundy and vivid rose red
              opacity: 0.65,
              filter: 'blur(1px)', // Soft watercolor/depth effect matching the logo theme
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FallingPetals;
