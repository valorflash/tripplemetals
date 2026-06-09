import { useState, useEffect } from "react";
import { Menu, X, Flame, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "/services", route: true },
  { label: "Projects", href: "/projects", route: true },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact", route: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.filter(
        (item) => !item.route
      ).map((item) => item.href.replace("#", ""));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);

        if (
          section &&
          section.getBoundingClientRect().top <= 150
        ) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href) => {
    setIsOpen(false);

    // If not on homepage, go home first
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const element = document.getElementById(
          href.replace("#", "")
        );

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);

      return;
    }

    const element = document.getElementById(
      href.replace("#", "")
    );

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-orange-500/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
         <Link
            to="/"
            className="flex items-center gap-3 cursor-pointer group"
            >
            <div
                className="
                w-12 h-12
                rounded-2xl
                bg-orange-500/10
                border border-orange-500/20
                flex items-center justify-center
                transition-all duration-300
                group-hover:scale-110
                group-hover:rotate-6
                "
            >
                <Flame
                size={24}
                className="text-orange-500"
                />
            </div>

            <div className="text-left">
                <h2 className="text-white font-black text-xl">
                TRIPPLE
                </h2>

                <p className="text-orange-500 text-[11px] tracking-[0.25em]">
                METALS
                </p>
            </div>
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              if (item.route) {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="
                      relative
                      px-4 py-2
                      text-gray-300
                      hover:text-orange-500
                      transition-all duration-300
                      cursor-pointer
                    "
                  >
                    {item.label}
                  </Link>
                );
              }

              const isActive =
                activeSection ===
                item.href.replace("#", "");

              return (
                <button
                  key={item.href}
                  onClick={() =>
                    handleClick(item.href)
                  }
                  className={`
                    relative
                    px-4 py-2
                    cursor-pointer
                    font-medium
                    transition-all duration-300
                    ${
                      isActive
                        ? "text-orange-500"
                        : "text-gray-300 hover:text-white"
                    }
                  `}
                >
                  {item.label}

                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute left-0 bottom-0 h-0.5 w-full bg-orange-500"
                    />
                  )}
                </button>
              );
            })}

            {/* CTA Button */}
            <button
              onClick={() =>
                handleClick("#contact")
              }
              className="
                ml-4
                px-6 py-3
                rounded-xl
                bg-orange-500
                text-white
                font-semibold
                flex items-center gap-2
                cursor-pointer
                transition-all duration-300
                hover:bg-orange-600
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]
              "
            >
              Get Quote
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="
              lg:hidden
              p-2
              text-white
              cursor-pointer
              transition-transform duration-300
              hover:scale-110
            "
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              lg:hidden
              bg-black/95
              backdrop-blur-xl
              border-t border-orange-500/20
            "
          >
            <div className="p-6 space-y-3">
              {NAV_ITEMS.map((item) =>
                item.route ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() =>
                      setIsOpen(false)
                    }
                    className="
                      block
                      w-full
                      text-left
                      px-5 py-4
                      rounded-xl
                      text-gray-300
                      cursor-pointer
                      transition-all duration-300
                      hover:bg-orange-500/10
                      hover:text-orange-500
                    "
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() =>
                      handleClick(item.href)
                    }
                    className="
                      block
                      w-full
                      text-left
                      px-5 py-4
                      rounded-xl
                      text-gray-300
                      cursor-pointer
                      transition-all duration-300
                      hover:bg-orange-500/10
                      hover:text-orange-500
                    "
                  >
                    {item.label}
                  </button>
                )
              )}

              <button
                onClick={() =>
                  handleClick("#contact")
                }
                className="
                  w-full
                  mt-4
                  py-4
                  rounded-xl
                  bg-orange-500
                  text-white
                  font-semibold
                  cursor-pointer
                  transition-all duration-300
                  hover:bg-orange-600
                "
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}