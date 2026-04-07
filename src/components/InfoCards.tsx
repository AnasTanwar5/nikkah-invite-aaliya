import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const cards = [
  {
    icon: Calendar,
    title: "Date",
    value: (
      <>
        Friday, 8 May 2026<br />
        <span className="text-sm mt-1 block text-muted-foreground">21 Dhū al-Qaʿdah 1447 AH</span>
      </>
    ),
  },
  {
    icon: Clock,
    title: "Nikkah",
    value: (
      <>
        After Namaz-e-Jummah<br />
        <span className="text-sm mt-1 block text-muted-foreground">Rajasthani Masjid, Santacruz</span>
      </>
    ),
    link: "https://maps.app.goo.gl/UXhTSpc4bJH2W8CE7",
  },
  {
    icon: MapPin,
    title: "Dinner",
    value: (
      <>
        7:30 pm onwards<br />
        <span className="text-sm mt-1 block text-muted-foreground">Kohinoor Marriage Lawn, Andheri West, Mumbai</span>
      </>
    ),
    link: "https://maps.app.goo.gl/RrtEHvdUUCVA74dT7",
  },
];

const InfoCards = () => {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl text-gold-dark">
            Ceremony Details
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="h-px w-12 bg-gold/50" />
            <span className="text-gold text-sm">✦</span>
            <div className="h-px w-12 bg-gold/50" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const cardClasses = "group relative rounded-xl border border-gold/30 bg-card/80 backdrop-blur-sm p-8 text-center hover:border-gold/60 hover:shadow-lg hover:shadow-gold/10 transition-all duration-500 flex flex-col items-center h-full justify-center";
            
            const Content = (
              <>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-gold/40 mb-5 group-hover:bg-gold/10 transition-colors duration-300">
                  <card.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  {card.title}
                </h3>
                <div className="font-display text-lg md:text-xl text-foreground flex-1 flex flex-col justify-center">
                  {card.value}
                </div>
                {card.link && (
                  <span className="font-body text-[10px] sm:text-xs text-gold mt-4 tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                    Tap for location
                  </span>
                )}
              </>
            );

            if (card.link) {
              return (
                <motion.a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className={`${cardClasses} cursor-pointer hover:-translate-y-1 block`}
                >
                  {Content}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className={cardClasses}
              >
                {Content}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
