import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

const TESTIMONIALS = [
  {
    name: 'Priyam Chakraborty',
    role: 'Lead Data Scientist',
    image: '/testimonials/Priyam_Chakraborty.jpg',
    linkedin: 'https://www.linkedin.com/in/priyam-chakraborty-10412a86/',
    quote:
      "Wajoud has an all-round passion for machine learning. He has been exceptional with YOLO-based object detection, face re-identification, license plate recognition and PyTorch-based activity recognition. To add, he has experience with video streaming framework (GStreamer), 'New York' map module, NATS messaging passing, APIs and embedded systems. He is meticulous with interns in problem-solving, and I wish him all the best to retain his enthusiasm.",
  },
  {
    name: 'Kakoli Bora',
    role: 'Data Scientist',
    image: '/testimonials/Kakoli_Bora.jpg',
    linkedin: 'https://www.linkedin.com/in/kakoli-bora-261a0315/',
    quote:
      "Wajoud and I worked together for a year in happymonk AI Labs. I found him very knowledgeable, team-player and dynamic in work. He has diverse knowledge in Deep Learning, ML and IoT. He is a good programmer and can manage all the hardware as well as software related problems quickly. Wajoud is a seeker, always ready to learn new technologies.",
  },
  {
    name: 'Rashmi Prabhakar',
    role: 'Product Design Lead at Dhan AI',
    image: '/testimonials/Rashmi_Prabhakar.jpg',
    linkedin: 'https://www.linkedin.com/in/rashmi-prabhakar-10/',
    quote:
      "I worked as Product Designer and collaborated closely with Wajoud as a team at Happymonk.ai, I can confidently attest to his exceptional dedication and insightful approach to his work as a Data Scientist. Wajoud consistently brought a high level of passion and critical thinking to our projects, offering valuable insights that greatly enriched our design process. His commitment to excellence and enthusiasm for his work were evident in every interaction, making him a valuable asset to any team fortunate enough to have him onboard.",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right
  const timerRef = useRef<any>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      handleNext();
    }, 10000); // 10s auto-rotate
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [index]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Animation variants for smooth sliding transitions
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  const activeTestimonial = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 relative overflow-hidden scroll-mt-20"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-[#7621B0]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-[#BE4C00]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Heading */}
      <div className="max-w-5xl mx-auto mb-16 sm:mb-20 text-center">
        <FadeIn delay={0} y={30}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
          >
            Recommendations
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} y={20}>
          <p className="text-[#D7E2EA]/50 font-light mt-4 uppercase tracking-widest text-xs sm:text-sm">
            What my colleagues say about working with me
          </p>
        </FadeIn>
      </div>

      {/* Testimonials Carousel Wrapper */}
      <div className="max-w-4xl mx-auto relative z-10 px-2 min-h-[360px] md:min-h-[300px] flex items-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full bg-[#141414]/80 backdrop-blur-xl border border-white/5 p-6 sm:p-10 md:p-12 rounded-[30px] sm:rounded-[40px] flex flex-col md:flex-row gap-8 items-center md:items-start"
            style={{
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Quote Icon */}
            <div className="absolute top-4 right-6 sm:top-8 sm:right-10 text-white/5 pointer-events-none">
              <Quote className="w-16 h-16 sm:w-24 sm:h-24 fill-current rotate-180" />
            </div>

            {/* Profile Image & Meta */}
            <div className="flex flex-row md:flex-col items-center md:items-start text-left gap-4 flex-shrink-0 w-full md:w-[160px]">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7621B0] to-[#BE4C00] rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500" />
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to initial if image fails
                    e.currentTarget.src = `https://api.dicebear.com/7.x/initials/svg?seed=${activeTestimonial.name}`;
                  }}
                  className="relative w-20 h-20 xs:w-24 xs:h-24 md:w-32 md:h-32 object-cover rounded-full border-2 border-[#0C0C0C]"
                />
              </div>

              <div>
                <a
                  href={activeTestimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#D7E2EA] hover:text-[#B600A8] transition-colors duration-200 mt-2 font-black uppercase tracking-wider text-sm sm:text-base group"
                >
                  {activeTestimonial.name}
                  <svg
                    className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <p className="text-[#D7E2EA]/50 text-xs sm:text-sm font-medium mt-1 leading-tight">
                  {activeTestimonial.role}
                </p>
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="flex-1 flex flex-col justify-between pt-2">
              <p className="text-[#D7E2EA] font-light leading-relaxed text-sm sm:text-base md:text-lg opacity-85 italic">
                "{activeTestimonial.quote}"
              </p>

              {/* Pagination Dots (Mobile) & Controls (Desktop) */}
              <div className="flex items-center justify-between mt-8 border-t border-white/5 pt-4">
                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > index ? 1 : -1);
                        setIndex(i);
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === index ? 'bg-[#B600A8] w-6' : 'bg-white/20'
                        }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Navigators */}
                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    className="p-2 sm:p-2.5 rounded-full bg-white/5 border border-white/10 text-[#D7E2EA] hover:bg-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer"
                    aria-label="Previous recommendation"
                  >
                    <ArrowLeft className="w-4 h-4 sm:w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 sm:p-2.5 rounded-full bg-white/5 border border-white/10 text-[#D7E2EA] hover:bg-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer"
                    aria-label="Next recommendation"
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestimonialsSection;
