import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import metalImg from "../assets/metal.jpg";
import industrialImg from "../assets/industrial.jpg";
import structuralImg from "../assets/rail-3.jpg";
import railImg from "../assets/rail-8.jpg";
import steelImg from "../assets/steel.jpg";
import maintenanceImg from "../assets/maintanance.jpg";
import welderImg from "../assets/gate-5.jpg";
import carImg from "../assets/car-park.jpg";
import tankImg from "../assets/tank-4.jpg";
import roofImg from "../assets/welder.png";

const projects = [
{ image: metalImg, title: "Metal Fabrication" },
{ image: tankImg, title: "Tank Stand Construction" },
{ image: carImg, title: "Car Park Construction" },
{ image: industrialImg, title: "Industrial Welding" },
{ image: structuralImg, title: "Structural Welding" },
{ image: railImg, title: "Rails Construction" },
{ image: steelImg, title: "Steel Construction" },
{ image: maintenanceImg, title: "Maintenance & Repairs" },
{ image: welderImg, title: "Professional Welding" },
{ image: roofImg, title: "Steel Roofing Construction" },
];

const sliderProjects = [
...projects,
...projects,
...projects,
];

export default function ProjectsInfiniteSlider() {
const [currentIndex, setCurrentIndex] = useState(0);

const slideWidth =
window.innerWidth >= 768 ? 360 : 340;

useEffect(() => {
const timer = setInterval(() => {
setCurrentIndex((prev) => prev + 1);
}, 4000);


return () => clearInterval(timer);


}, []);

const nextSlide = () => {
setCurrentIndex((prev) => prev + 1);
};

const prevSlide = () => {
setCurrentIndex((prev) =>
prev > 0 ? prev - 1 : 0
);
};

return ( <section className="relative py-20 bg-black overflow-hidden"> <div className="w-full">


    <div className="relative overflow-hidden">

      <motion.div
        className="flex gap-5"
        animate={{
          x: -(currentIndex * slideWidth),
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      >
        {sliderProjects.map((project, index) => (
          <div
            key={index}
            className="
              relative
              min-w-[320px]
              md:min-w-85
              h-56
              md:h-64
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
              loading="lazy"
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
              "
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-lg md:text-xl font-bold text-white">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </motion.div>

      <button
        onClick={prevSlide}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          z-20
          w-12
          h-12
          rounded-full
          bg-black/80
          border
          border-white/10
          text-white
          flex
          items-center
          justify-center
          hover:bg-orange-500
          transition
        "
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          z-20
          w-12
          h-12
          rounded-full
          bg-black/80
          border
          border-white/10
          text-white
          flex
          items-center
          justify-center
          hover:bg-orange-500
          transition
        "
      >
        <ChevronRight />
      </button>

    </div>

  </div>
</section>


);
}
