import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";
import palace from "../assets/image/couple2.jpg";

const heroConfig = {
  id: "wedding-hero-1",
  groomName: "Kabir",
  brideName: "Naina",
  date: "12 · DECEMBER · 2025",
  location: "Udaipur, Rajasthan",
  title: "Wedding Invitation",
  backgroundImage: palace,
  colors: {
    primary: "#f7ddb0",
    secondary: "#f1f8f4",
    muted: "#cfe6da",
    accent: "#b8d6c7",
    frameFrom: "#f2c97d",
    frameVia: "#d9a441",
    frameTo: "#b8872f",
    cardBg: "#143a2b",
  },
  animations: {
    background: {
      scale: 1.05,
      opacity: 0.15,
      duration: 10,
    },
    particles: {
      count: 6,
      durationBase: 4,
    },
  },
};

const Hero = ({ config = heroConfig }) => {
  const controls = useAnimationControls();
  const cardRef = useRef(null);

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-[#0f241c] overflow-hidden">
      {/* Animated Background with Parallax - EXACT SAME */}
      <motion.img
        src={config.backgroundImage}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        alt="Palace"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: config.animations.background.scale, opacity: config.animations.background.opacity }}
        transition={{ duration: config.animations.background.duration, ease: "easeInOut", repeat: Infinity }}
      />
      
      {/* Floating gold particles - EXACT SAME */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(config.animations.particles.count)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#f7ddb0] rounded-full opacity-40"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: config.animations.particles.durationBase + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Outer Gold Frame with shimmer - EXACT SAME */}
      <motion.div
        ref={cardRef}
        className="relative z-10 max-w-5xl w-full rounded-[2.5rem] p-[6px] bg-gradient-to-br from-[#f2c97d] via-[#d9a441] to-[#b8872f] shadow-2xl"
        variants={{
          initial: { scale: 0.9, rotateX: -10, opacity: 0 },
          animate: { 
            scale: 1, 
            rotateX: 0, 
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: 0.3,
            }
          },
        }}
        initial="initial"
        animate={controls}
        whileHover={{ 
          scale: 1.02,
          rotateX: 2,
          boxShadow: "0 50px 100px rgba(242, 201, 125, 0.4)"
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Inner Card - EXACT SAME */}
        <motion.div 
          className="rounded-[2.2rem] bg-[#143a2b]/95 px-12 py-14 text-center border border-[#f7ddb0] backdrop-blur-sm"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.p 
            className="font-para font-bold text-xs tracking-[0.4em] uppercase text-[#f7ddb0] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {config.title}
          </motion.p>

          <motion.h1 
            className="font-head text-5xl md:text-6xl text-[#f1f8f4] leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
          >
            {config.groomName}
            <motion.span 
              className="block font-light text-2xl my-4 text-[#f7ddb0]"
              animate={{ 
                scale: [1, 1.05, 1],
                textShadow: ["0 0 10px rgba(247, 221, 176, 0.5)", "none"]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              &amp;
            </motion.span>
            {config.brideName}
          </motion.h1>

          <motion.div 
            className="flex justify-center items-center my-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.3, type: "spring" }}
          >
            <motion.span className="w-20 h-px bg-[#f7ddb0]" 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.4 }}
            />
            <span className="mx-4 text-[#f7ddb0]">✦</span>
            <motion.span className="w-20 h-px bg-[#f7ddb0]" 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.45 }}
            />
          </motion.div>

          <motion.p 
            className="font-serif tracking-widest text-[#cfe6da]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            {config.date}
          </motion.p>

          <motion.p 
            className="font-para font-bold mt-3 text-sm text-[#b8d6c7]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            {config.location}
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
