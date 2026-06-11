import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const faqs = [
  {
    q: "What types of welding services do you offer?",
    a: "We provide MIG, TIG, Stick, and Flux-Core welding for structural, industrial, and decorative applications. Our certified welders handle carbon steel, stainless steel, aluminum, and specialty alloys.",
  },
  {
    q: "Are your welders certified?",
    a: "Yes. All our welders hold industry-recognized certifications and follow strict quality-control procedures to ensure every project meets the highest standards.",
  },
  {
    q: "Do you provide on-site welding services?",
    a: "Absolutely. Our mobile welding units are fully equipped to handle repairs, fabrication, and emergency welding services directly on-site.",
  },
  {
    q: "What is the typical turnaround time?",
    a: "Most fabrication projects take between 2–4 weeks depending on project size and complexity. Expedited services are available when needed.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. We provide free consultations and detailed project quotations to help clients plan their projects effectively.",
  },
  {
    q: "What safety standards do you follow?",
    a: "We follow OSHA safety regulations, welding best practices, and strict internal safety procedures to maintain a safe working environment.",
  },
  {
    q: "Can you work from architectural drawings?",
    a: "Yes. We regularly fabricate directly from architectural and engineering drawings and can also assist with shop drawings when required.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="
              inline-block
              px-5 py-2
              rounded-full
              border border-orange-500/30
              bg-orange-500/10
              text-orange-500
              text-sm
              uppercase
              tracking-[0.2em]
            "
          >
            FAQ
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">
            Frequently Asked
            <span className="text-orange-500"> Questions</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-lg text-gray-400">
            Everything you need to know about our welding, fabrication,
            installation, and maintenance services.
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="space-y-5"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="
                border border-white/10
                rounded-3xl
                bg-white/3
                backdrop-blur-sm
                px-6
                transition-all
                duration-300
                hover:border-orange-500/30
                data-[state=open]:border-orange-500/50
                data-[state=open]:shadow-[0_0_30px_rgba(249,115,22,0.1)]
              "
            >
              <AccordionTrigger
                className="
                  py-6
                  text-left
                  text-lg
                  font-semibold
                  text-white
                  hover:no-underline
                "
              >
                {faq.q}
              </AccordionTrigger>

              <AccordionContent
                className="
                  pb-6
                  text-gray-400
                  leading-relaxed
                  text-base
                "
              >
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA */}
        <div
          className="
            mt-16
            text-center
            p-10
            rounded-3xl
            border border-orange-500/20
            bg-orange-500/5
          "
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>

          <p className="text-gray-400 mb-6">
            Contact our team today for expert advice and a free consultation.
          </p>

          <a
            href="https://wa.me/2348110094343?text=Hello%20TrippleMetals,%20I%20would%20like%20to%20make%20an%20enquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                rounded-xl
                bg-orange-500
                text-white
                font-semibold
                transition-all
                duration-300
                hover:bg-orange-600
                hover:scale-105
            "
            >
            Contact Us
            </a>
        </div>
      </div>
    </section>
  );
}