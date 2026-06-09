import { motion } from "framer-motion";

import metalImg from "../assets/metal.jpg";
import industrialImg from "../assets/industrial.jpg";
import structuralImg from "../assets/rail-3.jpg";
import railImg from "../assets/rail-8.jpg";
import steelImg from "../assets/steel.jpg";
import maintenanceImg from "../assets/maintanance.jpg";
import welderImg from "../assets/gate-5.jpg";
import carImg from "../assets/car-park.jpg";
import tankImg from "../assets/tank-4.jpg"

const projects = [
  {
    image: metalImg,
    title: "Metal Fabrication",
  },
  {
    image: tankImg,
    title: "Tank stand construction",
  },
  {
    image: carImg,
    title: "Car Park Construction",
  },
  {
    image: industrialImg,
    title: "Industrial Welding",
  },
  {
    image: structuralImg,
    title: "Structural Welding",
  },
  {
    image: railImg,
    title: "Rails construction",
  },
  {
    image: steelImg,
    title: "Steel Construction",
  },
  {
    image: maintenanceImg,
    title: "Maintenance & Repairs",
  },
  {
    image: welderImg,
    title: "Professional Welding",
  },
];

export default function ProjectsInfiniteSlider() {
  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Header */}
      {/* <div className="text-center mb-12">
        <span className="inline-block px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm uppercase tracking-[3px]">
          Our Projects
        </span>

        <h2 className="mt-5 text-4xl md:text-5xl font-black text-white">
          Featured
          <span className="text-orange-500"> Work</span>
        </h2>
      </div> */}

      {/* Infinite Slider */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-5 w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              className="
                relative
                min-w-[320px]
                md:min-w-87.5
                h-55
                md:h-62.5
                rounded-2xl
                overflow-hidden
                border
                border-white/10
                group
                shrink-0
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}