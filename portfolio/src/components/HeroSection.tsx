import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Magnet from './Magnet';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

const NAV_LINKS = ['About', 'Resume', 'Projects', 'Contact'];

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] sm:h-screen flex flex-col"
      style={{ overflowX: 'clip', background: '#0C0C0C' }}
    >
      {/* ── Navigation Wrapper ── */}
      <div className="nav-wrapper fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        {/* Desktop Navbar */}
        <FadeIn
          delay={0}
          y={-20}
          as="nav"
          className="hidden md:flex bg-[#141414]/75 backdrop-blur-xl border border-white/5
            px-6 py-3 rounded-full w-auto max-w-max justify-center pointer-events-auto
            shadow-[0_15px_35px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.03)]"
        >
          <ul className="flex items-center gap-6 md:gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-[#D7E2EA]/75 font-semibold uppercase tracking-widest
                    text-xs md:text-sm
                    transition-all duration-300 hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Mobile Navbar Pill */}
        <FadeIn
          delay={0}
          y={-20}
          className="flex md:hidden w-full max-w-[400px] items-center justify-between pointer-events-auto
            bg-[#141414]/75 backdrop-blur-xl border border-white/5
            px-5 py-3 rounded-full
            shadow-[0_15px_35px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.03)]"
        >
          <a href="#hero" className="text-white font-bold uppercase tracking-widest text-xs">
            WN.
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#D7E2EA] hover:text-white transition-colors duration-200 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </FadeIn>
      </div>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden fixed inset-0 z-40 bg-[#0C0C0C]/95 backdrop-blur-2xl
              flex flex-col items-center justify-center p-6"
          >
            <ul className="flex flex-col items-center gap-8 text-center">
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[#D7E2EA] text-3xl font-black uppercase tracking-widest
                      hover:text-[#38BDF8] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero Heading ── */}
      <FadeIn delay={0.15} y={40} className="mt-32 sm:mt-24 md:mt-28 px-6 md:px-10 relative z-0">
        <h1
          className="hero-heading font-black uppercase tracking-tighter leading-[0.95] sm:leading-[0.85] flex flex-col w-full text-center
            text-[12vw] sm:text-[14vw] md:text-[15vw] lg:text-[16vw]"
        >
          <span className="block text-center sm:text-left">Hey,</span>
          <span className="block text-center sm:text-right">I&apos;m Wajoud</span>
        </h1>
      </FadeIn>

      {/* ── Bottom Bar ── */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end flex-1 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20 gap-6 sm:gap-0 mt-10 sm:mt-0">
        {/* Left description */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-center sm:text-left text-[#D7E2EA] font-semibold uppercase tracking-wide leading-tight
              max-w-[280px] md:max-w-[320px]"
            style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.4rem)' }}
          >
            Data Scientist &amp; LLM Engineer
            <span className="block font-light text-[#D7E2EA]/60 normal-case tracking-normal mt-2" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1rem)' }}>
              Focused on Agentic AI, RAG, &amp; Distributed Infrastructure.
            </span>
          </p>
        </FadeIn>

        {/* Right CTA */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* ── Portrait (centered absolutely) ── */}
      <FadeIn
        delay={0.6}
        y={30}
        className="relative sm:absolute left-0 right-0 mx-auto z-10
          sm:bottom-0 my-auto sm:my-0
          w-[180px] xs:w-[220px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Wajoud H Noorani portrait"
            className="w-full h-auto object-contain select-none pointer-events-none"
            draggable={false}
          />
        </Magnet>
      </FadeIn>
    </section>
  );
};

export default HeroSection;
