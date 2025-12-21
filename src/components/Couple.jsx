import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import couple1 from "../assets/image/couple1.jpg";
import couple2 from "../assets/image/couple2.jpg";
import couple3 from "../assets/image/couple3.jpg";
import couple4 from "../assets/image/couple4.jpg";
import SectionDivider from "./SectionDivider";
import MandalaWatermark from "./MandalaWatermark";

/* Variants */
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Couple = () => {
  const couples = [couple1, couple2, couple3, couple4];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const intervalRef = useRef(null);

  /* Auto carousel (disabled when View All is ON) */
  useEffect(() => {
    if (viewAll) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % couples.length);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [viewAll, couples.length]);

  return (
    <section className="relative bg-[#143a2b]/95 py-12 sm:py-16 md:py-24 px-4 overflow-hidden">
      {/* Mandala Background */}
      <div className="absolute inset-0 opacity-5 z-0">
        <MandalaWatermark position="center" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          className="font-adelio font-bold text-4xl md:text-6xl text-[#f1f8f4] mb-6"
          variants={itemVariants}
        >
          Our Couple
        </motion.h2>

        <div className="max-w-sm mx-auto mb-6">
          <SectionDivider color="#d9a441" />
        </div>

        {/* TOGGLE BUTTON */}
        <motion.button
          onClick={() => setViewAll(!viewAll)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            mb-10
            px-6 py-2
            rounded-full
            border border-[#f7ddb0]/60
            text-[#f7ddb0]
            hover:bg-[#f7ddb0]/10
            transition
            text-sm
          "
        >
          {viewAll ? "← Back to Slideshow" : "View All Images"}
        </motion.button>

        {/* ===== CAROUSEL VIEW ===== */}
        {!viewAll && (
          <div className="relative max-w-md md:max-w-2xl mx-auto py-6">
            <motion.div
              key={currentIndex}
              className="relative w-full aspect-[4/3] md:aspect-[8/5]
                         rounded-3xl shadow-2xl border-4 border-[#f7ddb0]/60 overflow-hidden"
              initial={{ opacity: 0.6, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={couples[currentIndex]}
                alt={`Couple ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f7ddb0]/10 via-transparent to-[#d9a441]/10" />
            </motion.div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {couples.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#f7ddb0] scale-125"
                      : "bg-[#f7ddb0]/40"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* ===== GRID VIEW (VIEW ALL) ===== */}
        {viewAll && (
          <motion.div
            className="
              grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
              gap-4 mt-6
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {couples.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="
                  rounded-2xl overflow-hidden
                  border-2 border-[#f7ddb0]/50
                  shadow-lg
                "
              >
                <img
                  src={img}
                  alt={`Couple ${index + 1}`}
                  className="w-full h-full object-cover aspect-square"
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Caption */}
        <motion.p className="font-para font-bold mt-10 text-sm md:text-base text-[#5f7f71]">
          <span className="block text-2xl md:text-4xl text-[#f1f8f4] mb-1">
            Kabir & Naina
          </span>
          Moments captured together
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Couple;
