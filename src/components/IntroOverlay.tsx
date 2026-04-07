import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import initialsLogo from "@/assets/initialsLogo.png";

const IntroOverlay = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  useEffect(() => {
    // Show Bismillah for 3s
    const t1 = setTimeout(() => setStep(2), 3200);
    
    // Show Initials for 2.5s -> then trigger exit state
    const t2 = setTimeout(() => setStep(3), 5700);

    // Completely unmount and call onComplete after exit animation finishes
    const t3 = setTimeout(() => onComplete(), 7200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {step < 3 && (
        <motion.div
          key="overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cream overflow-hidden"
        >
          {/* Subtle marble BG */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(30,20%,92%)_0%,hsl(30,25%,95%)_50%,hsl(25,20%,88%)_100%)] opacity-70" />

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="bismillah"
                initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)", transition: { duration: 0.8 } }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center justify-center text-center px-4"
              >
                <h1 
                  className="text-4xl md:text-5xl lg:text-7xl text-gold-dark drop-shadow-sm mb-6"
                  style={{ fontFamily: "'Amiri', 'Noto Naskh Arabic', serif", lineHeight: 1.6 }}
                >
                  بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                </h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1.2 }}
                  className="font-display text-lg md:text-xl lg:text-2xl text-gold-dark/80 max-w-lg mx-auto"
                >
                  "In the name of Allah, the Most Gracious, the Most Merciful"
                </motion.p>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="initials"
                initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.15, filter: "blur(10px)", transition: { duration: 0.8, ease: "easeIn" } }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="relative z-10 flex items-center justify-center p-6"
              >
                <motion.img 
                  src={initialsLogo} 
                  alt="A S Initials" 
                  className="w-[22rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] h-auto drop-shadow-2xl"
                  animate={{ scale: [1, 1.06] }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroOverlay;
