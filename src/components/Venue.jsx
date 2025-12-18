import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import venue from "../assets/image/Gallery2.jpg";
import SectionDivider from "./SectionDivider";
import MandalaWatermark from "./MandalaWatermark";

const Venue = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="relative bg-[#0f241c] py-24 px-6 overflow-hidden">
      {/* Darkened Mandala background */}
      <motion.div
        className="absolute inset-0 opacity-50 z-0"
        initial={{ rotate: 0, scale: 0.8 }}
        animate={{ 
          rotate: 360, 
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{ 
          rotate: { duration: 22, repeat: Infinity, ease: "linear" },
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
        className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Text Section with elegant reveal */}
        <motion.div variants={itemVariants}>
          <motion.h2 
            className="font-adelio font-bold text-center md:text-left text-4xl md:text-6xl text-[#f1f8f4] mb-2"
            whileHover={{ 
              scale: 1.03,
              textShadow: "0 0 20px rgba(241, 248, 244, 0.5)"
            }}
            animate={{ 
              y: [0, -3, 0],
              textShadow: ["none", "0 0 15px rgba(247, 221, 176, 0.4)", "none"]
            }}
            transition={{ 
              y: { duration: 2.8, repeat: Infinity },
              textShadow: { duration: 2.8, repeat: Infinity }
            }}
          >
            Venue
          </motion.h2>

          <div className="flex justify-center md:justify-start mb-4">
          <SectionDivider color="#f7ddb0" />
        </div>
            

          <motion.p 
            className="font-para text-sm md:text-base text-[#cfe6da] leading-relaxed mt-6 px-2"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.span 
              className="block font-para font-bold text-[#f7ddb0] text-xl mb-2"
              animate={{ 
                scale: [1, 1.05, 1],
                textShadow: ["none", "0 0 10px rgba(247, 221, 176, 0.6)", "none"]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              The Royal Heritage Palace
            </motion.span>
            Lake Pichola Road<br />
            Udaipur, Rajasthan
          </motion.p>
        </motion.div>

        {/* Venue image with dramatic entrance */}
        <motion.div variants={itemVariants}>
          <motion.img
            src={venue}
            alt="Venue"
            className="rounded-3xl shadow-2xl object-cover w-full h-96 border-4 border-[#f7ddb0]/70 hover:border-[#f7ddb0]"
            initial={{ x: 60, rotateY: 15, scale: 0.9 }}
            animate={{ x: 0, rotateY: 0, scale: 1 }}
            whileHover={{ 
              scale: 1.06,
              rotateY: -8,
              boxShadow: "0 40px 80px rgba(247, 221, 176, 0.5)",
              y: -10,
              z: 30
            }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              delay: 0.4 
            }}
          />
          
          {/* Image overlay shimmer */}
          <motion.div
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#f7ddb0]/20 via-transparent/0 to-[#d9a441]/20 -z-10 opacity-0 group-hover:opacity-100"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Floating venue particles */}
      <div className="absolute top-1/3 right-12 hidden xl:block pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-[#f7ddb0]/40 rounded-full"
            style={{ top: `${i * 20}px`, right: `${i * 10}px` }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 90, 180],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 4.5 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Venue;
