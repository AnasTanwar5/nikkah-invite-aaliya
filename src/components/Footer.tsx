const Footer = () => (
  <footer className="py-10 text-center bg-cream">
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="h-px w-10 bg-gold/40" />
      <span className="text-gold text-sm">☪</span>
      <div className="h-px w-10 bg-gold/40" />
    </div>
    <p className="font-body text-xs text-muted-foreground mt-2 tracking-widest uppercase mb-8">
      8 May 2026
    </p>

    <div className="flex flex-col items-center justify-center mt-6">
      <p className="font-body text-xs md:text-sm text-gold-dark/70 tracking-[0.2em] uppercase mb-2">
        With Regards
      </p>
      <p className="font-display text-4xl md:text-5xl lg:text-6xl text-gold-dark font-light drop-shadow-sm">
        Qureshi Family
      </p>
    </div>
  </footer>
);

export default Footer;
