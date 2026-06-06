import {
  Shield,
  Award,
  Clock,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

import ABOUT_IMAGE from "../assets/about-image.jpg";

const highlights = [
  {
    icon: Shield,
    label: "Safety First",
    desc: "OSHA compliant operations",
  },
  {
    icon: Award,
    label: "Certified Quality",
    desc: "ISO-9001 industry standards",
  },
  {
    icon: Clock,
    label: "20+ Years",
    desc: "Trusted industry experience",
  },
  {
    icon: Users,
    label: "50+ Experts",
    desc: "Skilled welding professionals",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-32 lg:py-40 bg-black overflow-hidden"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-0
          left-0
          w-125
          h-125
          bg-orange-500/15
          rounded-full
          blur-[180px]
        "
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          right-0
          w-150
          h-150
          bg-orange-600/10
          rounded-full
          blur-[220px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glow */}
            <div
              className="
                absolute
                -inset-6
                bg-orange-500/20
                blur-3xl
                rounded-[50px]
                opacity-60
                group-hover:opacity-90
                transition-all
                duration-700
              "
            />

            {/* Image */}
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
              "
            >
              <img
                src={ABOUT_IMAGE}
                alt="TrippleMetals Workshop"
                className="
                  w-full
                  h-162.5
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

              {/* Floating Experience Card */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  bottom-8
                  left-8
                  bg-black/60
                  backdrop-blur-xl
                  border
                  border-orange-500/30
                  rounded-3xl
                  px-8
                  py-5
                "
              >
                <h3 className="text-6xl font-black text-orange-500">
                  20+
                </h3>

                <p className="text-gray-300 uppercase tracking-[3px] text-xs mt-2">
                  Years Of Excellence
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Tag */}
            <motion.div
              variants={item}
              className="
                inline-flex
                items-center
                px-5
                py-3
                rounded-full
                bg-orange-500/10
                border
                border-orange-500/30
                text-orange-400
                text-sm
                uppercase
                tracking-[4px]
                font-semibold
                mb-8
              "
            >
              About TrippleMetals
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={item}
              className="
                text-5xl
                md:text-6xl
                xl:text-7xl
                font-black
                uppercase
                leading-none
                text-white
                mb-8
              "
            >
              Built On
              <br />

              <span className="text-orange-500">
                Strength
              </span>

              & Precision
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={item}
              className="
                text-lg
                text-gray-300
                leading-relaxed
                mb-6
              "
            >
              TrippleMetals has delivered premium welding,
              fabrication, structural steel and industrial metal
              solutions for over two decades. Our reputation is built
              on craftsmanship, durability, innovation and precision.
            </motion.p>

            <motion.p
              variants={item}
              className="
                text-lg
                text-gray-400
                leading-relaxed
                mb-12
              "
            >
              We combine modern fabrication technology with highly
              skilled professionals to create steel structures,
              railings, gates, tanks and custom metal works that
              exceed expectations.
            </motion.p>

            {/* Highlights */}
            <motion.div
              variants={container}
              className="grid sm:grid-cols-2 gap-5"
            >
              {highlights.map((itemData) => (
                <motion.div
                  key={itemData.label}
                  variants={item}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/4
                    backdrop-blur-xl
                    p-6
                    transition-all
                    duration-300
                    hover:border-orange-500/40
                  "
                >
                  <div
                    className="
                      absolute
                      top-0
                      right-0
                      w-28
                      h-28
                      bg-orange-500/10
                      blur-3xl
                      opacity-0
                      group-hover:opacity-100
                      transition
                    "
                  />

                  <div className="relative flex gap-4">
                    <div
                      className="
                        w-14
                        h-14
                        rounded-2xl
                        bg-orange-500/10
                        border
                        border-orange-500/20
                        flex
                        items-center
                        justify-center
                        text-orange-500
                        shrink-0
                      "
                    >
                      <itemData.icon className="w-7 h-7" />
                    </div>

                    <div>
                      <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                        {itemData.label}

                        <ArrowUpRight
                          size={16}
                          className="
                            text-orange-500
                            opacity-0
                            group-hover:opacity-100
                            transition
                          "
                        />
                      </h3>

                      <p className="text-gray-400 text-sm mt-2">
                        {itemData.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={item}
              className="mt-12"
            >
              <button
                className="
                  group
                  relative
                  overflow-hidden
                  bg-orange-500
                  px-8
                  py-4
                  rounded-2xl
                  text-white
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-105
                  shadow-[0_0_35px_rgba(249,115,22,0.35)]
                "
              >
                <span className="relative z-10">
                  Learn More About Us
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    bg-linear-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    -translate-x-full
                    group-hover:translate-x-full
                    transition-transform
                    duration-700
                  "
                />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}