import {
  Layers,
  Flame,
  Wrench,
  Building2,
  DoorOpen,
  Construction,
} from "lucide-react";

import welderImage from "../assets/welder.jpg";

import metalImg from "../assets/metal.jpg";
import industrialImg from "../assets/industrial.jpg";
import structuralImg from "../assets/structural.jpg";
import gateImg from "../assets/gate-5.jpg";
import steelImg from "../assets/steel.jpg";
import maintenanceImg from "../assets/maintanance.jpg";

const services = [
  {
    icon: Layers,
    title: "Metal Fabrication",
    desc: "Custom metal fabrication for industrial, commercial, and residential projects.",
    image: metalImg,
  },
  {
    icon: Flame,
    title: "Industrial Welding",
    desc: "Professional MIG, TIG, and Stick welding services for heavy-duty applications.",
    image: industrialImg,
  },
  {
    icon: Building2,
    title: "Structural Welding",
    desc: "Structural steel fabrication, erection, and reinforcement solutions.",
    image: structuralImg,
  },
  {
    icon: DoorOpen,
    title: "Gates & Fencing",
    desc: "Premium security gates, fences, railings, and custom metal designs.",
    image: gateImg,
  },
  {
    icon: Construction,
    title: "Steel Construction",
    desc: "Complete steel construction projects from design to installation.",
    image: steelImg,
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    desc: "Equipment repairs, welding maintenance, and emergency support services.",
    image: maintenanceImg,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-black py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm font-semibold tracking-widest uppercase">
            Our Services
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">
            Premium Welding &
            <span className="text-orange-500"> Fabrication</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg">
            Delivering industrial-grade welding and fabrication solutions with
            precision craftsmanship, durability, and engineering excellence.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="relative h-162.5 rounded-3xl overflow-hidden border border-white/10">
            <img
              src={welderImage}
              alt="Professional Welding Service"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

            <div className="absolute bottom-8 left-8">
              <h3 className="text-4xl font-black text-white">
                20+ Years
              </h3>

              <p className="text-orange-500 uppercase tracking-[3px] mt-2">
                Industry Experience
              </p>
            </div>
          </div>

          {/* Services Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border border-white/10
                    h-80
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-orange-500/40
                    hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]
                  "
                >
                  {/* Background Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all duration-500" />

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className="w-16 h-16 rounded-2xl bg-orange-500/20 backdrop-blur-md flex items-center justify-center mb-5">
                      <Icon
                        size={30}
                        className="text-orange-500"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}