import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+234 XXX XXX XXXX",
    sub: "Mon - Sat | 8AM - 6PM",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@tripplemetals.com",
    sub: "Response within 24 hours",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    sub: "Serving clients nationwide",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat",
    sub: "8:00 AM - 6:00 PM",
  },
];

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "https://formspree.io/f/mlgkgyvr",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        toast.success(
          "✅ Message sent successfully! We'll contact you shortly."
        );

        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast.error(
          "❌ Failed to send message. Please try again."
        );
      }
    } catch (error) {
      toast.error(
        "❌ Network error. Please check your connection."
      );
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm uppercase tracking-[0.2em]">
            Contact Us
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">
            Request A
            <span className="text-orange-500"> Quote</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-lg text-gray-400">
            Ready to start your fabrication or welding project?
            Contact our team today for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Cards */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    flex gap-4
                    p-6
                    rounded-3xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-md
                    transition-all duration-300
                    hover:border-orange-500/40
                    hover:-translate-y-2
                    hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]
                  "
                >
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-orange-500/10
                      border border-orange-500/20
                      flex items-center justify-center
                      shrink-0
                    "
                  >
                    <Icon
                      size={24}
                      className="text-orange-500"
                    />
                  </div>

                  <div>
                    <p className="text-orange-500 text-sm uppercase tracking-widest">
                      {item.label}
                    </p>

                    <h4 className="text-white font-semibold mt-1">
                      {item.value}
                    </h4>

                    <p className="text-gray-400 text-sm mt-1">
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form */}
          <div
            className="
              lg:col-span-3
              p-8 md:p-10
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-md
            "
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Get A Free Quote
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  className="
                    w-full
                    bg-black/40
                    border border-white/10
                    rounded-xl
                    px-5 py-4
                    text-white
                    outline-none
                    transition
                    focus:border-orange-500
                  "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  className="
                    w-full
                    bg-black/40
                    border border-white/10
                    rounded-xl
                    px-5 py-4
                    text-white
                    outline-none
                    transition
                    focus:border-orange-500
                  "
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                  className="
                    w-full
                    bg-black/40
                    border border-white/10
                    rounded-xl
                    px-5 py-4
                    text-white
                    outline-none
                    transition
                    focus:border-orange-500
                  "
                />

                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      service: e.target.value,
                    })
                  }
                  className="
                    w-full
                    bg-black/40
                    border border-white/10
                    rounded-xl
                    px-5 py-4
                    text-white
                    outline-none
                    transition
                    focus:border-orange-500
                  "
                >
                  <option value="">Select Service</option>
                  <option>Metal Fabrication</option>
                  <option>Industrial Welding</option>
                  <option>Steel Construction</option>
                  <option>Gates & Railings</option>
                  <option>Maintenance & Repairs</option>
                  <option>Custom Metal Works</option>
                </select>
              </div>

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                className="
                  w-full
                  bg-black/40
                  border border-white/10
                  rounded-xl
                  px-5 py-4
                  text-white
                  outline-none
                  resize-none
                  transition
                  focus:border-orange-500
                  mb-6
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  flex items-center justify-center gap-3
                  py-4
                  rounded-xl
                  bg-orange-500
                  text-white
                  font-semibold
                  transition-all duration-300
                  hover:bg-orange-600
                  hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
              >
                <Send size={18} />

                {loading
                  ? "Sending..."
                  : "Send Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}