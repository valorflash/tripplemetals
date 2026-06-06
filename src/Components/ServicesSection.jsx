import {
  Layers,
  Flame,
  Wrench,
  Building2,
  DoorOpen,
  Construction,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";
import welderImage from "../assets/welder.jpg";

const services = [
  {
    icon: Layers,
    title: "Metal Fabrication",
    desc: "Custom metal fabrication for industrial, commercial, and residential projects.",
  },
  {
    icon: Flame,
    title: "Industrial Welding",
    desc: "Professional MIG, TIG, and Stick welding services for heavy-duty applications.",
  },
  {
    icon: Building2,
    title: "Structural Welding",
    desc: "Structural steel fabrication, erection, and reinforcement solutions.",
  },
  {
    icon: DoorOpen,
    title: "Gates & Fencing",
    desc: "Premium security gates, fences, railings, and custom metal designs.",
  },
  {
    icon: Construction,
    title: "Steel Construction",
    desc: "Complete steel construction projects from design to installation.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    desc: "Equipment repairs, welding maintenance, and emergency support services.",
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
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-black py-32 overflow-hidden"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 10,
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
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 12,
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span
            className="
              inline-flex
              items-center
              px-6
              py-3
              rounded-full
              border
              border-orange-500/30
              bg-orange-500/10
              text-orange-500
              text-sm
              uppercase
              tracking-[4px]
              font-semibold
            "
          >
            Our Services
          </span>

          <h2
            className="
              mt-8
              text-5xl
              md:text-6xl
              xl:text-7xl
              font-black
              text-white
              uppercase
            "
          >
            Premium Welding &
            <span className="block text-orange-500">
              Fabrication
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-400">
            Delivering industrial-grade welding and fabrication
            solutions with precision craftsmanship, engineering
            excellence, and unmatched durability.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image Section */}
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
            className="relative group"
          >
            <div
              className="
                absolute
                -inset-5
                bg-orange-500/20
                blur-3xl
                rounded-[40px]
                opacity-50
                group-hover:opacity-80
                transition-all
                duration-700
              "
            />

            <div
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
                src={welderImage}
                alt="Professional Welding"
                className="
                  w-full
                  h-175
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

              <motion.div
                animate={{
                  y: [0, -10, 0],
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
                <h3 className="text-5xl font-black text-orange-500">
                  500+
                </h3>

                <p className="text-xs tracking-[3px] uppercase text-gray-300 mt-2">
                  Projects Completed
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Service Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  variants={item}
                  whileHover={{
                    y: -12,
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
                    p-8
                    hover:border-orange-500/40
                    transition-all
                    duration-500
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
                      transition-all
                    "
                  />

                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                    }}
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-orange-500/10
                      border
                      border-orange-500/20
                      flex
                      items-center
                      justify-center
                      mb-6
                      text-orange-500
                    "
                  >
                    <Icon size={30} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-orange-500
                      text-sm
                      font-medium
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                    "
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
          }}
          className="
            grid
            md:grid-cols-3
            gap-10
            mt-28
            text-center
          "
        >
          <div>
            <h3 className="text-6xl font-black text-orange-500">
              20+
            </h3>

            <p className="text-gray-400 uppercase tracking-[4px] mt-3">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-6xl font-black text-orange-500">
              500+
            </h3>

            <p className="text-gray-400 uppercase tracking-[4px] mt-3">
              Projects Completed
            </p>
          </div>

          <div>
            <h3 className="text-6xl font-black text-orange-500">
              98%
            </h3>

            <p className="text-gray-400 uppercase tracking-[4px] mt-3">
              Client Satisfaction
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}