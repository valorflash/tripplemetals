import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mr Benson",
    role: "MD Uzoani Table Water",
    company: "Uzoani Table Water",
    text: "TrippleMetals delivered our structural steel framework ahead of schedule and under budget. Their precision welding is unmatched in the industry.",
    rating: 5,
  },
  {
    name: "Chief Chukwudi Dikko",
    role: "Facility Manager",
    company: "De Glen Hotel and Suites",
    text: "The stainless steel fabrication work exceeded our expectations. Their team delivered flawless results with exceptional professionalism.",
    rating: 5,
  },
  {
    name: "Mr Christain Nwosu",
    role: "Architect",
    company: "Thompson Design Studio",
    text: "From custom railings to ornamental gates, they transformed our design vision into reality. Outstanding craftsmanship.",
    rating: 5,
  },
  {
    name: "Engr Maro",
    role: "CEO Mara Maro ",
    company: "CEO Mara Maro Nig Ltd.",
    text: "Emergency repair support was exceptional. Fast response, quality workmanship, and complete professionalism.",
    rating: 5,
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
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-28 lg:py-36 bg-black overflow-hidden"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-125 h-125 bg-orange-500/10 rounded-full blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-125 h-125 bg-orange-600/10 rounded-full blur-[180px]"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-orange-500 rounded-full"
            initial={{
              x: Math.random() * 1600,
              y: 1000,
            }}
            animate={{
              y: -200,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
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
              tracking-[0.3em]
              font-semibold
              backdrop-blur-xl
            "
          >
            Testimonials
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black text-white">
            What Our
            <span className="text-orange-500"> Clients Say</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-400">
            Trusted by contractors, architects, facility managers, and
            industrial companies for exceptional welding and fabrication
            services.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="
                group
                relative
                overflow-hidden
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/3
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-orange-500/40
                hover:shadow-[0_0_50px_rgba(249,115,22,0.2)]
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  top-0
                  right-0
                  w-40
                  h-40
                  bg-orange-500/10
                  rounded-full
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-700
                "
              />

              {/* Quote Icon */}
              <Quote
                size={90}
                className="
                  absolute
                  top-4
                  right-4
                  text-orange-500/10
                  group-hover:text-orange-500/20
                  transition-all
                  duration-500
                "
              />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: i * 0.1,
                    }}
                  >
                    <Star
                      size={18}
                      className="fill-orange-500 text-orange-500"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 leading-relaxed text-lg mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Client */}
              <div className="flex items-center gap-4 relative z-10">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="
                    w-16
                    h-16
                    rounded-full
                    bg-orange-500/10
                    border
                    border-orange-500/20
                    flex
                    items-center
                    justify-center
                    text-orange-500
                    font-bold
                    text-xl
                  "
                >
                  {testimonial.name.charAt(0)}
                </motion.div>

                <div>
                  <h4 className="font-bold text-white text-lg">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-gray-400">
                    {testimonial.role}
                  </p>

                  <p className="text-sm text-orange-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8 mt-24"
        >
          {[
            {
              value: "500+",
              label: "Projects Completed",
            },
            {
              value: "98%",
              label: "Client Satisfaction",
            },
            {
              value: "20+",
              label: "Years Experience",
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -10 }}
              className="
                text-center
                p-8
                rounded-3xl
                border
                border-white/10
                bg-white/3
                backdrop-blur-xl
              "
            >
              <h3 className="text-5xl font-black text-orange-500">
                {stat.value}
              </h3>

              <p className="text-gray-400 uppercase tracking-[4px] mt-3 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}