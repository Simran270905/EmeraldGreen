// Fully Responsive Story Component
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import flowers from "../assets/image/couple.jpg";
import SectionDivider from "./SectionDivider";
import MandalaWatermark from "./MandalaWatermark";

const Story = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section className="relative bg-[#0f241c] py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-6 overflow-hidden">
      {/* Darkened Mandala */}
      <motion.div
        className="absolute inset-0 opacity-5 z-0"
        initial={{ rotate: 0, scale: 0.8 }}
        animate={{ 
          rotate: 360, 
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <MandalaWatermark position="center" />
      </motion.div>

      {/* Responsive Full-page dots */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(40)].map((_, i) => ( // Reduced for mobile performance
          <motion.div
            key={i}
            className="absolute w-[1.5px] h-[1.5px] sm:w-2 sm:h-2 bg-[#f7ddb0]/30 rounded-full"
            style={{
              left: `${(i % 10) * 10}%`,
              top: `${Math.floor(i / 10) * 10 + (i % 4) * 2.5}%`,
            }}
            animate={{
              y: [0, -6, 0],
              x: [-1, 1, -1],
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.08
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h2 
          className="text-center font-serif text-2xl sm:text-3xl md:text-4xl text-[#f1f8f4] mb-6 px-2"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            textShadow: "0 0 15px rgba(241, 248, 244, 0.5)"
          }}
        >
          Our Story
        </motion.h2>

        <motion.div className="w-full max-w-md mx-auto" variants={itemVariants}>
          <SectionDivider color="#f7ddb0" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center mt-8 md:mt-12 px-2"
          variants={itemVariants}
        >
          {/* Responsive Image */}
          <motion.div className="w-full order-2 lg:order-1">
            <motion.img
              src={flowers}
              className="w-full h-64 sm:h-80 md:h-96 rounded-2xl sm:rounded-3xl shadow-2xl object-cover border border-[#f7ddb0]/60"
              alt="Couple"
              initial={{ x: -30, scale: 0.95, rotateY: -10 }}
              animate={{ x: 0, scale: 1, rotateY: 0 }}
              whileHover={{ 
                scale: 1.03,
                rotateY: 3,
                boxShadow: "0 20px 40px rgba(247, 221, 176, 0.4)",
                z: 10
              }}
              transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
            />
          </motion.div>

          {/* Responsive Story Cards */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 px-2">
            {[
              "What began as a simple friendship, slowly blossomed into a journey of love.",
              "Filled with laughter, shared dreams, and unforgettable memories.",
              "Guided by tradition and family values, we now step into forever together.",
            ].map((text, i) => (
              <motion.div
                key={i}
                className="rounded-xl sm:rounded-2xl p-[1px] sm:p-[2px] bg-gradient-to-r from-[#f7ddb0] via-[#d9a441] to-[#f7ddb0]"
                variants={{ hidden: { x: 30, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                transition={{ delay: 0.8 + i * 0.12 }}
                whileHover={{ scale: 1.015, boxShadow: "0 15px 30px rgba(247, 221, 176, 0.3)" }}
              >
                <motion.div className="rounded-lg sm:rounded-xl p-4 sm:p-5 bg-[#143a2b]/95 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    animate={{ x: ["-100%", "100%", "-100%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <p className="text-xs sm:text-sm tracking-wider text-[#cfe6da] relative z-10 leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Responsive floating elements */}
      <div className="absolute top-16 sm:top-20 right-4 sm:right-10 hidden md:block pointer-events-none">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[10px] h-[10px] sm:w-3 sm:h-3 bg-[#f7ddb0]/30 rounded-full"
            style={{ left: `${i * 25}px`, top: `${i * 15}px` }}
            animate={{ y: [0, -12, 0], rotate: [0, 180, 360], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
    </section>
  );
};

export default Story;
