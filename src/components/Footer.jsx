import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";
import MandalaWatermark from "./MandalaWatermark";

const Footer = () => {
  return (
    <footer className="relative bg-[#143a2b]/95 py-7 px-4 overflow-hidden">
      {/* Darkened Mandala with gentle pulse */}
      <motion.div
        className="absolute inset-0 opacity-5 z-0"
        initial={{ scale: 0.9 }}
        animate={{ 
          scale: [0.9, 1.1, 0.9],
          opacity: [0.04, 0.08, 0.04]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <MandalaWatermark position="center" />
      </motion.div>

      {/* Full-page animated dots background */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(60)].map((_, i) => (
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
              duration: 5 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.03
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
          Save The Date
        </motion.h2>

        <motion.div 
          animate={{ 
            scale: [1, 1.03, 1],
            rotate: [-0.5, 0.5, -0.5]
          }} 
          transition={{ duration: 3, repeat: Infinity }}
        >
          <SectionDivider color="#d9a441" />
        </motion.div>

        <motion.p 
          className="font-para font-bold mt-8 text-sm md:text-base text-[#5f7f71] leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          We look forward to celebrating with you
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
            12 · DECEMBER · 2025
          </p>
        </motion.div>

        {/* Copyright line */}
        <p className="mt-8 text-[11px] sm:text-xs text-[#5f7f71]">
          © {new Date().getFullYear()} StarX Innovation and IT Solution. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
