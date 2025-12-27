import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";
import MandalaWatermark from "./MandalaWatermark";

const footerConfig = {
  id: "wedding-footer-1",
  title: "Save The Date",
  subtitle: "We look forward to celebrating with you",
  date: "12 · DECEMBER · 2025",
  company: "StarX Innovation and IT Solution",
  colors: {
    primary: "#f7ddb0",
    secondary: "#d9a441",
    text: "#f1f8f4",
    muted: "#5f7f71",
    background: "#143a2b",
  },
  animations: {
    mandala: {
      scaleDuration: 8,
      opacityRange: [0.04, 0.08, 0.04],
    },
    dots: {
      count: 60,
      duration: 5,
      delayIncrement: 0.03,
    },
  },
};

const Footer = ({ config = footerConfig }) => {
  return (
    <footer className="relative bg-[#143a2b]/95 py-7 px-4 overflow-hidden">
      {/* ✅ FIXED: Mandala FIRST + z-20 + opacity-12 */}
      <motion.div
        className="absolute inset-0 opacity-12 z-20"
        initial={{ scale: 0.9 }}
        animate={{ 
          scale: [0.9, 1.1, 0.9],
          opacity: config.animations.mandala.opacityRange
        }}
        transition={{ 
          duration: config.animations.mandala.scaleDuration,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <MandalaWatermark position="center" />
      </motion.div>

      {/* EXACT SAME - Full-page animated dots background */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(config.animations.dots.count)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#f7ddb0]/25 rounded-full"
            style={{
              left: `${(i % 12) * 9}%`,
              top: `${Math.floor(i / 12) * 8 + (i % 3) * 3}%`,
            }}
            animate={{
              y: [0, -6, 0],
              x: [-1, 1, -1],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.7, 1.1, 0.7]
            }}
            transition={{
              duration: config.animations.dots.duration + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * config.animations.dots.delayIncrement
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.h2 
          className="font-adelio font-bold text-4xl md:text-6xl text-[#f1f8f4] mb-8 px-4"
          animate={{ 
            y: [0, -8, 0],
            textShadow: [
              "none", 
              "0 0 20px rgba(247, 221, 176, 0.4)", 
              "0 0 30px rgba(247, 221, 176, 0.6)",
              "none"
            ]
          }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            textShadow: { duration: 4, repeat: Infinity }
          }}
        >
          {config.title}
        </motion.h2>

        <motion.div 
          animate={{ 
            scale: [1, 1.03, 1],
            rotate: [-0.5, 0.5, -0.5]
          }} 
          transition={{ duration: 3, repeat: Infinity }}
        >
          <SectionDivider color={config.colors.secondary} />
        </motion.div>

        <motion.p 
          className="font-para font-bold mt-8 text-sm md:text-base text-[#5f7f71] leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {config.subtitle}
        </motion.p>

        <motion.div 
          className="mt-6"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            textShadow: ["none", "0 0 15px rgba(247, 221, 176, 0.5)", "none"]
          }}
          transition={{ 
            delay: 1,
            duration: 0.8,
            textShadow: { duration: 3, repeat: Infinity }
          }}
        >
          <p className="text-2xl font-serif text-[#f7ddb0] tracking-widest">
            {config.date}
          </p>
        </motion.div>

        {/* Copyright line - FIXED */}
        <p className="mt-8 text-[11px] sm:text-xs text-[#5f7f71]">
          © {new Date().getFullYear()} {config.company}. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
