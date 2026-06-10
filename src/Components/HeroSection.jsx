import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function HeroSection() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8 }}
        className="absolute inset-0"
      >
        <img
          src={HERO_IMAGE}
          alt="Precision Welding"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/40" />
      </motion.div>

      {/* Animated Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-0 w-100 h-100 bg-orange-500/20 rounded-full blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-112.5 h-112.5 bg-orange-600/10 rounded-full blur-[150px]"
      />

      {/* Floating Sparks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full"
            initial={{
              x: Math.random() * 1000,
              y: 1200,
            }}
            animate={{
              y: -200,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 pt-40 lg:pt-48 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  mb-8
                  rounded-full
                  border
                  border-orange-500/30
                  bg-orange-500/10
                  backdrop-blur-xl
                  text-orange-400
                "
              >
                <Sparkles size={16} />

                <span className="uppercase tracking-[4px] text-xs md:text-sm font-semibold">
                  ISO-9001 Certified Workshop
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  xl:text-8xl
                  font-black
                  uppercase
                  leading-[0.9]
                  text-white
                "
              >
                Precision

                <br />

                <span className="text-orange-500">
                  Welding
                </span>

                <br />

                & Fabrication
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="
                  mt-8
                  text-lg
                  md:text-xl
                  text-gray-300
                  max-w-2xl
                  leading-relaxed
                "
              >
                Delivering industrial-grade welding and premium metal
                fabrication with unmatched precision, engineering
                excellence, and over two decades of expertise.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-5 mt-10"
              >
               <Link
                to="/contact"
                className="
                    group
                    flex
                    items-center
                    justify-center
                    gap-3
                    px-8
                    py-5
                    rounded-2xl
                    bg-orange-500
                    text-white
                    font-semibold
                    hover:bg-orange-600
                    hover:scale-105
                    transition-all
                    duration-300
                    shadow-[0_0_35px_rgba(249,115,22,0.4)]
                "
                >
                Get a Quote

                <ArrowRight
                    className="
                    w-5
                    h-5
                    transition-transform
                    group-hover:translate-x-2
                    "
                />
                </Link>

                <Link
                  to="/projects"
                  className="
                    group
                    flex
                    items-center
                    justify-center
                    gap-3
                    px-8
                    py-5
                    rounded-2xl
                    border
                    border-white/20
                    bg-white/10
                    backdrop-blur-xl
                    text-white
                    font-semibold
                    hover:bg-white/20
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  <Play
                    className="
                      w-5
                      h-5
                      transition-transform
                      group-hover:scale-125
                    "
                  />

                  View Projects
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="
                  grid
                  grid-cols-3
                  gap-6
                  mt-16
                "
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="
                      border-l
                      border-orange-500/30
                      pl-4
                    "
                  >
                    <h2 className="text-3xl md:text-5xl font-black text-orange-500">
                      {stat.value}
                    </h2>

                    <p className="mt-2 text-[10px] md:text-xs uppercase tracking-[3px] text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT SIDE DECORATION */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:flex justify-center"
            >
              <div
                className="
                  w-125
                  h-125
                  rounded-full
                  border
                  border-orange-500/20
                  bg-linear-to-br
                  from-orange-500/10
                  to-transparent
                  backdrop-blur-xl
                "
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          z-20
        "
      >
        <div className="w-7 h-12 border border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-orange-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}