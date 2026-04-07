import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  { text: "And We created you in pairs", ref: "Quran 78:8" },
  { text: "He placed between you love and mercy", ref: "Quran 30:21" },
  { text: "They are clothing for you and you are clothing for them", ref: "Quran 2:187" },
  { text: "And of His signs is that He created for you from yourselves mates that you may find tranquility in them", ref: "Quran 30:21" },
];

const QuotesCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 bg-cream-dark relative overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <div className="w-full h-full border-t-2 border-l-2 border-gold rounded-tl-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
        <div className="w-full h-full border-b-2 border-r-2 border-gold rounded-br-3xl" />
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10"
        >
          Words of the Almighty
        </motion.p>

        <div className="relative h-40 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="font-display text-xl md:text-2xl italic text-gold-dark leading-relaxed px-4">
                "{quotes[current].text}"
              </p>
              <span className="block text-sm text-muted-foreground mt-4 font-body">
                — {quotes[current].ref}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-gold w-6" : "bg-gold/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesCarousel;
