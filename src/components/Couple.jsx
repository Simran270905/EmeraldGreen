// Fully Responsive Couple Component
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import couple1 from "../assets/image/couple1.jpg";
import couple2 from "../assets/image/couple2.jpg";
import couple3 from "../assets/image/couple3.jpg";
import couple4 from "../assets/image/couple4.jpg";
import SectionDivider from "./SectionDivider";
import MandalaWatermark from "./MandalaWatermark";

const Couple = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const couples = [couple1, couple2, couple3, couple4];
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % couples.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [couples.length]);

  return (
    <section className="relative bg-[#143a2b]/95 py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-6 overflow-hidden">
      {/* Darkened Mandala */}
      <motion.div className="absolute inset-0 opacity-5 z-0">
        <MandalaWatermark position="center" />
      </motion.div>

      {/* Responsive dots */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1.2px] h-[1.2px] sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-[#f7ddb0]/25 rounded-full"
            style={{
              left: `${(i % 10) * 10}%`,
              top: `${Math.floor(i / 10) * 10 + (i % 4) * 2}%`,
            }}
            animate={{
              y: [0, -5, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.7, 1.1, 0.7]
            }}
            transition={{
              duration: 4.5 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.06
            }}
          />
        ))}
      </div>

      <motion.div className="relative z-10 max-w-4xl mx-auto text-center px-2">
        <motion.h2 
          className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#f1f8f4] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Couple
        </motion.h2>

        <motion.div className="w-full max-w-sm sm:max-w-md mx-auto mb-8">
          <SectionDivider color="#d9a441" />
        </motion.div>

        {/* Responsive centered carousel */}
        <div className="relative max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto py-6 px-2">
          <motion.div 
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[8/5] rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-[#f7ddb0]/60 overflow-hidden mx-auto"
            animate={{ 
              opacity: [0.7, 1, 0.7],
              scale: [0.98, 1, 0.98]
            }}
            transition={{ duration: 0.8, repeat: Infinity }}
            key={currentIndex}
          >
            <motion.img
              src={couples[currentIndex]}
              className="w-full h-full object-cover"
              alt={`Couple ${currentIndex + 1}`}
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.01 }}
              transition={{ duration: 1.2 }}
            />
            <motion.div className="absolute inset-0 bg-gradient-to-r from-[#f7ddb0]/10 via-transparent to-[#d9a441]/10" 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 4, repeat: Infinity }} 
            />
            <motion.div className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12">
              <span className="text-xl sm:text-2xl text-[#f7ddb0] animate-pulse block leading-none">💕</span>
            </motion.div>
          </motion.div>

          {/* Responsive navigation dots */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 px-4">
            {couples.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-[#f7ddb0] scale-125 shadow-md" 
                    : "bg-[#f7ddb0]/40 hover:bg-[#f7ddb0]/60"
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Responsive caption */}
          <motion.p className="mt-6 text-xs sm:text-sm md:text-base text-[#5f7f71] px-2">
            <motion.span className="block font-medium text-lg sm:text-xl md:text-2xl text-[#f1f8f4] mb-1"
              animate={{ scale: [1, 1.02, 1], color: ["#f1f8f4", "#f7ddb0", "#f1f8f4"] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              Aditi & Rohan
            </motion.span>
            Moments captured together
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Couple;
