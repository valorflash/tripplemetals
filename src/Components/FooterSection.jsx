import { Flame, ArrowUp } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const quickLinks = [
  "Home",
  "About",
  "Services",
  "Projects",
  "Testimonials",
  "FAQ",
  "Contact",
];

const services = [
  "Metal Fabrication",
  "Industrial Welding",
  "Structural Welding",
  "Gates & Railings",
  "Steel Construction",
  "Custom Metal Works",
];

export default function FooterSection() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <Flame className="text-orange-500" size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">
                  TRIPPLE
                </h3>
                <p className="text-orange-500 text-sm tracking-[0.25em]">
                  METALS
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Delivering premium welding, fabrication, steel construction,
              and custom metal solutions with exceptional craftsmanship,
              durability, and reliability.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/40 transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/40 transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/40 transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/40 transition-all duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() =>
                      scrollTo(link.toLowerCase())
                    }
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">
              Services
            </h4>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">
              Contact Info
            </h4>

            <div className="space-y-4 text-gray-400">
              <p>
                Imo, Nigeria
                <br />
                Industrial & Commercial Metal Solutions
              </p>

              <p>+234 811009433</p>

              <p>michealkinggodwin@gmail.com</p>

              <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} TrippleMetals. All Rights
              Reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-sm text-gray-500 hover:text-orange-500 transition-colors"
              >
                Terms of Service
              </a>
            </div>

            {/* Back To Top */}
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                w-12 h-12
                rounded-xl
                bg-orange-500
                text-white
                flex items-center justify-center
                hover:bg-orange-600
                transition-all duration-300
                hover:scale-110
              "
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}