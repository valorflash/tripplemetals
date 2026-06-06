import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// IMAGES
import gate1 from "../assets/gate-1.jpg";
import gate3 from "../assets/gate-3.jpg";
import gate5 from "../assets/gate-5.jpg";
import gate6 from "../assets/gate-6.jpg";

import rail1 from "../assets/rail-img.jpg";
import rail2 from "../assets/rail-2.jpg";
import rail3 from "../assets/rail-3.jpg";
import rail4 from "../assets/rail-4.jpg";
import rail5 from "../assets/rail-5.jpg";
import rail6 from "../assets/rail-6.jpg";
import rail8 from "../assets/rail-8.jpg";

import door3 from "../assets/door-3.jpg";
import door5 from "../assets/door-5.jpg";

import tank1 from "../assets/tank-1.jpg";
import tank2 from "../assets/tank-2.jpg";
import tank3 from "../assets/tank-3.jpg";
import tank4 from "../assets/tank-4.jpg";

import welder from "../assets/welder.jpg";
import welder2 from "../assets/welder-2.jpg";

import protector from "../assets/protector-img.jpg";
import aboutImage from "../assets/about-image.jpg";
import carPark from "../assets/car-park.jpg";

const projects = [
  {
    image: gate1,
    title: "Security Gate Installation",
    category: "Gates",
    desc: "Premium security gate with precision fabrication.",
  },
  {
    image: gate3,
    title: "Luxury Entrance Gate",
    category: "Gates",
    desc: "Custom-designed gate with durable steel framework.",
  },
  {
    image: gate5,
    title: "Industrial Sliding Gate",
    category: "Gates",
    desc: "Heavy-duty access control solution.",
  },
  {
    image: gate6,
    title: "Estate Security Gate",
    category: "Gates",
    desc: "Elegant and secure steel fabrication.",
  },

  {
    image: rail1,
    title: "Modern Stair Rail",
    category: "Railings",
    desc: "Stylish indoor railing installation.",
  },
  {
    image: rail2,
    title: "Commercial Railing",
    category: "Railings",
    desc: "Durable steel railing for commercial buildings.",
  },
  {
    image: rail3,
    title: "Custom Balcony Rail",
    category: "Railings",
    desc: "Elegant balcony protection system.",
  },
  {
    image: rail4,
    title: "Steel Handrail",
    category: "Railings",
    desc: "Premium finishing and installation.",
  },
  {
    image: rail5,
    title: "Industrial Rail System",
    category: "Railings",
    desc: "Heavy-duty industrial fabrication.",
  },
  {
    image: rail6,
    title: "Architectural Railings",
    category: "Railings",
    desc: "Modern steel design solutions.",
  },
  {
    image: rail8,
    title: "Luxury Rail Design",
    category: "Railings",
    desc: "Custom luxury railing project.",
  },

  {
    image: door3,
    title: "Steel Security Door",
    category: "Doors",
    desc: "Fabricated steel security door.",
  },
  {
    image: door5,
    title: "Industrial Door Project",
    category: "Doors",
    desc: "Heavy-duty steel door installation.",
  },

  {
    image: tank1,
    title: "Storage Tank Fabrication",
    category: "Tanks",
    desc: "Precision-built industrial storage tank.",
  },
  {
    image: tank2,
    title: "Steel Tank Construction",
    category: "Tanks",
    desc: "Heavy-duty fabrication project.",
  },
  {
    image: tank3,
    title: "Industrial Tank System",
    category: "Tanks",
    desc: "High-capacity steel fabrication.",
  },
  {
    image: tank4,
    title: "Custom Tank Design",
    category: "Tanks",
    desc: "Specialized engineering solution.",
  },

  {
    image: welder,
    title: "Precision Welding",
    category: "Welding",
    desc: "Professional welding workmanship.",
  },
  {
    image: welder2,
    title: "Industrial Welding",
    category: "Welding",
    desc: "Certified welding operation.",
  },

  {
    image: protector,
    title: "Protective Fabrication",
    category: "Custom",
    desc: "Custom-built steel protection system.",
  },
  {
    image: aboutImage,
    title: "Steel Structure Project",
    category: "Custom",
    desc: "Premium fabrication and installation.",
  },
  {
    image: carPark,
    title: "Car Park Structure",
    category: "Structural",
    desc: "Large-scale structural steel work.",
  },
];

const categories = [
  "All",
  "Gates",
  "Railings",
  "Doors",
  "Tanks",
  "Welding",
  "Structural",
  "Custom",
];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((item) => item.category === active);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-125 h-125 bg-orange-500/10 blur-[200px]" />
      <div className="fixed bottom-0 right-0 w-125 h-125 bg-orange-500/10 blur-[200px]" />

      {/* HERO */}
      <section className="relative pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* <Link
            to="/"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition mb-8"
          >
            <ArrowLeft size={18} />
            Back Home
          </Link> */}

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black"
          >
            OUR
            <span className="text-orange-500"> PROJECTS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mt-6 text-xl text-gray-400"
          >
            Explore our completed welding, fabrication, structural,
            railing, gate, tank, and custom steel projects.
          </motion.p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-3xl">
            <div>
              <h3 className="text-4xl font-black text-orange-500">
                {projects.length}+
              </h3>
              <p className="text-gray-400">Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-orange-500">
                20+
              </h3>
              <p className="text-gray-400">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-orange-500">
                98%
              </h3>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-3 rounded-full transition-all duration-300
              ${
                active === cat
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((project, index) => (
              <motion.div
                layout
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4 }}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border border-white/10
                  bg-white/3
                  backdrop-blur-md
                  hover:border-orange-500/40
                  hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]
                "
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full h-full object-cover
                      transition duration-700
                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />

                  <div
                    className="
                      absolute top-4 right-4
                      w-12 h-12 rounded-full
                      bg-orange-500
                      flex items-center justify-center
                      opacity-0 scale-75
                      transition-all duration-300
                      group-hover:opacity-100
                      group-hover:scale-100
                    "
                  >
                    <ExternalLink size={18} />
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-orange-500 text-xs uppercase tracking-[0.25em]">
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-bold mt-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mt-3 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}