import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import rituals from "../assets/image/Gallery1.jpg";
import SectionDivider from "./SectionDivider";
import MandalaWatermark from "./MandalaWatermark";

const Events = () => {
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

  const eventCardVariants = {
    hidden: { x: 50, scale: 0.9, opacity: 0 },
    visible: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 }
    }
  };

  return (
    <section className="relative bg-[#0f241c] py-24 px-6 overflow-hidden">
      {/* Pulsing Mandala background - darkened */}
      <motion.div
        className="absolute inset-0 opacity-50 z-0"  // Darkened from opacity-10
        initial={{ rotate: -180 }}
        animate={{ 
          rotate: 360,
          scale: [0.9, 1.15, 0.9]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <MandalaWatermark position="center" />
      </motion.div>

      {/* Full-page animated dots background */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#f7ddb0]/30 rounded-full"
            style={{
              left: `${(i % 12) * 9}%`,
              top: `${Math.floor(i / 12) * 8 + (i % 3) * 3}%`,
            }}
            animate={{
              y: [0, -8, 0],
              x: [-2, 2, -2],
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.05
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
        {/* Glowing title */}
        <motion.h2 
          className="text-center font-adelio text-4xl md:text-6xl text-[#f1f8f4] mb-15"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            textShadow: "0 0 25px rgba(241, 248, 244, 0.6)"
          }}
          animate={{ 
            y: [0, -4, 0],
            textShadow: ["none", "0 0 15px rgba(247, 221, 176, 0.4)", "none"]
          }}
          transition={{ 
            y: { duration: 2.5, repeat: Infinity },
            textShadow: { duration: 2.5, repeat: Infinity }
          }}
        >
          Wedding Celebrations
        </motion.h2>

        <motion.div variants={itemVariants}>
          <SectionDivider color="#f7ddb0" />
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-12 items-center mt-12" variants={itemVariants}>
          {/* Ritual image with cinematic entrance */}
          <motion.img
            src={rituals}
            className="rounded-3xl shadow-2xl object-cover h-96 border-4 border-[#f7ddb0]/70"
            alt="Wedding Rituals"
            initial={{ x: -60, rotateY: -15, scale: 0.9 }}
            animate={{ x: 0, rotateY: 0, scale: 1 }}
            whileHover={{ 
              scale: 1.08,
              rotateY: 8,
              boxShadow: "0 35px 70px rgba(247, 221, 176, 0.5)",
              z: 30
            }}
            transition={{ 
              type: "spring", 
              stiffness: 180, 
              delay: 0.6 
            }}
          />

          {/* Timeline cards with countdown shimmer */}
          <div className="font-para space-y-6">
            {[
              "Haldi – 10 December, Morning",
              "Mehendi & Sangeet – 11 December, Evening",
              "Wedding Ceremony – 12 December, Evening",
              "Reception – 13 December, Night",
            ].map((event, i) => (
              <motion.div
                key={i}
                className="rounded-2xl p-[2px] bg-gradient-to-r from-[#f7ddb0] via-[#d9a441] to-[#f7ddb0] cursor-default"
                variants={eventCardVariants}
                transition={{ delay: 1 + i * 0.12 }}
                whileHover={{
                  scale: 1.025,
                  y: -8,
                  boxShadow: "0 25px 50px rgba(247, 221, 176, 0.35)"
                }}
              >
                <motion.div 
                  className="rounded-2xl p-6 bg-[#143a2b]/95 relative overflow-hidden group"
                  whileHover="hover"
                >
                  {/* Sequential shimmer sweep */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1.2 }}
                  />
                  
                  {/* Date badge */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-12 h-12 bg-[#d9a441] rounded-full flex items-center justify-center text-xs font-bold text-[#143a2b] shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.2 + i * 0.12, type: "spring" }}
                  >
                    {10 + i}
                  </motion.div>
                  
                  <p className="text-sm tracking-widest text-[#cfe6da] relative z-10 leading-relaxed font-light">
                    {event}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Events;
