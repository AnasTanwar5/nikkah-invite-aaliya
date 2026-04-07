import { motion } from "framer-motion";
import chandelierImg from "@/assets/chandelier.png";
import bismillahImg from "@/assets/bismillah.png";
import floralCornerImg from "@/assets/floral-corner-tl.png";
import coupleImg from "@/assets/couple.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-cream">
      {/* Marble-like subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(30,20%,92%)_0%,hsl(30,25%,95%)_50%,hsl(25,20%,88%)_100%)]" />

      {/* ===== CORNER FLORALS ===== */}
      {/* Top-Left - natural orientation, tucked into corner */}
      <motion.img
        src={floralCornerImg}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 w-40 sm:w-56 md:w-72 lg:w-80 pointer-events-none z-20"
      />
      {/* Top-Right - flipped horizontally */}
      <motion.img
        src={floralCornerImg}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.15 }}
        className="absolute top-0 right-0 w-40 sm:w-56 md:w-72 lg:w-80 pointer-events-none z-20"
        style={{ transform: "scaleX(-1)" }}
      />
      {/* Bottom-Left - flipped vertically */}
      <motion.img
        src={floralCornerImg}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 pointer-events-none z-20"
        style={{ transform: "scaleY(-1)" }}
      />
      {/* Bottom-Right - flipped both */}
      <motion.img
        src={floralCornerImg}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.65 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute bottom-0 right-0 w-40 sm:w-56 md:w-72 lg:w-80 pointer-events-none z-20"
        style={{ transform: "scale(-1, -1)" }}
      />

      {/* ===== COUPLE - bottom right ===== */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-0 right-2 sm:right-6 md:right-12 w-44 sm:w-60 md:w-72 lg:w-80 pointer-events-none z-10"
      >
        <img src={coupleImg} alt="Couple illustration" className="w-full h-auto" />
      </motion.div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 flex flex-col items-center w-full min-h-screen px-4 sm:px-6 text-center">
        
        {/* CHANDELIER - Hangs from very top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-32 sm:w-40 md:w-48 lg:w-56 animate-float-glow shrink-0"
        >
          <img src={chandelierImg} alt="Chandelier" className="w-full h-auto" />
        </motion.div>

        {/* BISMILLAH - directly below chandelier tightly */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="w-28 sm:w-36 md:w-48 lg:w-56 mt-2 sm:mt-4 shrink-0"
        >
          <img src={bismillahImg} alt="Bismillah" className="w-full h-auto drop-shadow-md" />
        </motion.div>

        {/* Flexible spacer to push the text towards the middle */}
        <div className="flex-1 min-h-[2vh] max-h-[6vh]" />

        {/* TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-4 sm:space-y-6 flex flex-col items-center z-20 shrink-0"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-body text-xs sm:text-sm tracking-[0.35em] uppercase text-gold-dark"
          >
            Request the honour of your presence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12 w-full pt-4 pb-2"
          >
            {/* Bride */}
            <div className="flex flex-col items-center">
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-gold-dark gold-glow">
                Aaliya
              </h1>
              <p className="font-body text-[10px] sm:text-xs md:text-sm text-gold-dark/80 mt-1 md:mt-2 tracking-[0.2em] text-center max-w-[280px]">
                D/o Anwar Qureshi {"&"} Dolat Qureshi
              </p>
            </div>

            {/* Ampersand */}
            <span className="font-display text-4xl sm:text-5xl md:text-6xl text-burgundy my-2 md:my-0">
              {"&"}
            </span>

            {/* Groom */}
            <div className="flex flex-col items-center">
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-gold-dark gold-glow">
                Sameer
              </h1>
              <p className="font-body text-[10px] sm:text-xs md:text-sm text-gold-dark/80 mt-1 md:mt-2 tracking-[0.2em] text-center max-w-[280px]">
                S/o Aleem Barudgar {"&"} Umme Hanni Barudgar
              </p>
            </div>
          </motion.div>

          {/* Elegant divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center justify-center gap-3 py-2"
          >
            <div className="h-px w-16 bg-gold" />
            <span className="text-gold text-xl">☪</span>
            <div className="h-px w-16 bg-gold" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="font-heading text-lg sm:text-xl md:text-2xl tracking-widest uppercase text-foreground/70"
          >
            Nikkah Ceremony
          </motion.p>

          {/* Quranic Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
            className="font-display text-sm sm:text-base md:text-lg italic text-gold-dark/80 pt-4 max-w-md mx-auto"
          >
            "And We created you in pairs"
            <span className="block text-xs sm:text-sm not-italic mt-1 text-muted-foreground">
              — Quran 78:8
            </span>
          </motion.p>
        </motion.div>

        {/* Bottom spacer to pad out text and keep it comfortably above corners */}
        <div className="flex-1 min-h-[22vh] sm:min-h-[25vh] max-h-[35vh]" />
      </div>
    </section>
  );
};

export default HeroSection;
