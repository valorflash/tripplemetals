import { motion } from "framer-motion";
import {
  Users,
  Star,
  Package,
  Clock,
  ShieldCheck,
  DollarSign,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Skilled Professionals",
    desc: "Certified welders and fabricators with decades of combined industry experience.",
  },
  {
    icon: Star,
    title: "Quality Craftsmanship",
    desc: "Every weld, every joint, and every finish is executed with unmatched precision.",
  },
  {
    icon: Package,
    title: "Premium Materials",
    desc: "We source only high-grade steel and durable materials for long-lasting performance.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Projects are completed efficiently and delivered according to schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Strict safety standards and compliance procedures on every project site.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    desc: "Affordable rates without sacrificing quality, durability, or workmanship.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-100 h-100 bg-orange-500/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-orange-500/10 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm uppercase tracking-[0.2em]">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">
            The Tripple Metals
            <span className="text-orange-500"> Advantage</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-400">
            We combine expertise, innovation, and premium craftsmanship to
            deliver welding and fabrication solutions that exceed expectations.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border border-white/10
                  bg-white/3
                  backdrop-blur-md
                  p-8
                  transition-all duration-500
                  hover:border-orange-500/40
                  hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]
                "
              >
                {/* Glow Hover Effect */}
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-br
                    from-orange-500/0
                    via-orange-500/0
                    to-orange-500/10
                    opacity-0
                    group-hover:opacity-100
                    transition duration-500
                  "
                />

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  className="
                    relative
                    w-16 h-16
                    rounded-2xl
                    bg-orange-500/10
                    border border-orange-500/20
                    flex items-center justify-center
                    mb-6
                  "
                >
                  <Icon className="w-8 h-8 text-orange-500" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {reason.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {reason.desc}
                </p>

                {/* Bottom Accent Line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-0
                    bg-orange-500
                    transition-all duration-500
                    group-hover:w-full
                  "
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}