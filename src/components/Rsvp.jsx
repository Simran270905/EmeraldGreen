import { motion } from "framer-motion";
import { useState } from "react";
import SectionDivider from "./SectionDivider";
import MandalaWatermark from "./MandalaWatermark";

const Rsvp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: ""
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 }
    }
  };

  const inputVariants = {
    focus: { 
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(217, 164, 65, 0.3)"
    },
    hover: { scale: 1.01 }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("RSVP submitted:", formData);
  };

  return (
    <section className="relative bg-[#143a2b]/95 py-24 px-6 overflow-hidden">
      {/* Darkened Mandala with gentle pulse */}
      <motion.div
        className="absolute inset-0 opacity-5 z-0"
        initial={{ scale: 0.9 }}
        animate={{ 
          scale: [0.9, 1.1, 0.9],
          opacity: [0.04, 0.08, 0.04]
        }}
        transition={{ 
          duration: 6,
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
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating title with shimmer */}
        <motion.h2 
          className="font-serif text-3xl md:text-4xl text-[#f1f8f4] mb-6"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            textShadow: "0 0 25px rgba(241, 248, 244, 0.6)"
          }}
          animate={{ 
            y: [0, -5, 0],
            textShadow: ["none", "0 0 20px rgba(247, 221, 176, 0.4)", "none"]
          }}
          transition={{ 
            y: { duration: 3, repeat: Infinity },
            textShadow: { duration: 3, repeat: Infinity }
          }}
        >
          RSVP
        </motion.h2>

        <motion.div variants={itemVariants}>
          <SectionDivider color="#d9a441" />
        </motion.div>

        {/* Subtle description */}
        <motion.p 
          className="text-sm md:text-base text-[#5f7f71] leading-relaxed mb-8 px-4"
          variants={itemVariants}
        >
          Kindly let us know if you will be able to attend our special day.
        </motion.p>

        {/* Animated RSVP Form with gold frame */}
        <motion.form 
          className="relative bg-gradient-to-br from-[#f7ddb0]/5 via-transparent to-[#d9a441]/5 backdrop-blur-xl rounded-3xl p-2 border-2 border-[#f7ddb0]/30 shadow-2xl max-w-lg mx-auto overflow-hidden group"
          onSubmit={handleSubmit}
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
        >
          <motion.div 
            className="rounded-[1.6rem] p-8 bg-[#143a2b]/95 border border-[#f7ddb0]/20 relative overflow-hidden"
            whileHover="hover"
          >
            {/* Shimmer overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              animate={{ x: "150%" }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Form fields with floating labels */}
            <div className="space-y-6 relative z-10">
              <div className="text-left">
                <motion.label 
                  className="block text-[#f1f8f4] font-medium mb-3 tracking-wide"
                  htmlFor="name"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  Full Name
                </motion.label>
                <motion.input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-5 py-3 bg-[#0f241c]/50 border-2 border-[#d9a441]/50 rounded-xl focus:outline-none focus:border-[#d9a441] focus:bg-[#0f241c]/70 text-[#f1f8f4] placeholder-[#5f7f71]/70 transition-all duration-300"
                  variants={inputVariants}
                  whileFocus="focus"
                  whileHover="hover"
                />
              </div>

              <div className="text-left">
                <motion.label 
                  className="block text-[#f1f8f4] font-medium mb-3 tracking-wide"
                  htmlFor="email"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Email
                </motion.label>
                <motion.input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-5 py-3 bg-[#0f241c]/50 border-2 border-[#d9a441]/50 rounded-xl focus:outline-none focus:border-[#d9a441] focus:bg-[#0f241c]/70 text-[#f1f8f4] placeholder-[#5f7f71]/70 transition-all duration-300"
                  variants={inputVariants}
                  whileFocus="focus"
                  whileHover="hover"
                />
              </div>

              <div className="text-left">
                <motion.label 
                  className="block text-[#f1f8f4] font-medium mb-3 tracking-wide"
                  htmlFor="attending"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Will you attend?
                </motion.label>
                <motion.select
                  id="attending"
                  value={formData.attending}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-[#0f241c]/50 border-2 border-[#d9a441]/50 rounded-xl focus:outline-none focus:border-[#d9a441] focus:bg-[#0f241c]/70 text-[#f1f8f4] appearance-none cursor-pointer transition-all duration-300"
                  variants={inputVariants}
                  whileFocus="focus"
                  whileHover="hover"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes, I will attend ✨</option>
                  <option value="no">No, unfortunately</option>
                </motion.select>
              </div>

              <div className="text-left">
                <motion.label 
                  className="block text-[#f1f8f4] font-medium mb-3 tracking-wide"
                  htmlFor="guests"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Number of Guests
                </motion.label>
                <motion.input
                  id="guests"
                  type="number"
                  value={formData.guests}
                  onChange={handleChange}
                  min="1"
                  placeholder="1"
                  className="w-full px-5 py-3 bg-[#0f241c]/50 border-2 border-[#d9a441]/50 rounded-xl focus:outline-none focus:border-[#d9a441] focus:bg-[#0f241c]/70 text-[#f1f8f4] placeholder-[#5f7f71]/70 transition-all duration-300"
                  variants={inputVariants}
                  whileFocus="focus"
                  whileHover="hover"
                />
              </div>

              {/* Animated submit button */}
              <motion.button
                type="submit"
                className="w-full relative bg-gradient-to-r from-[#f7ddb0] to-[#d9a441] text-[#143a2b] font-semibold py-4 rounded-xl shadow-xl hover:shadow-2xl hover:from-[#f2c97d] hover:to-[#c1993a] transition-all duration-500 overflow-hidden group/form"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(247, 221, 176, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative z-10">Submit RSVP</div>
                {/* Button shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </div>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Rsvp;
