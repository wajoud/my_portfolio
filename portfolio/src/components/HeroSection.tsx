import Magnet from './Magnet';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

const NAV_LINKS = ['About', 'Resume', 'Projects', 'Contact'];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col"
      style={{ overflowX: 'clip', background: '#0C0C0C' }}
    >
      {/* ── Navbar ── */}
      <FadeIn
        delay={0}
        y={-20}
        as="nav"
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50
          bg-[#141414]/75 backdrop-blur-xl border border-white/5
          px-4 py-2.5 sm:px-6 sm:py-3 rounded-full w-[90%] sm:w-auto max-w-max flex justify-center
          shadow-[0_15px_35px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.03)]"
      >
        <ul className="flex items-center gap-3 sm:gap-6 md:gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[#D7E2EA]/75 font-semibold uppercase tracking-widest
                  text-[9px] sm:text-xs md:text-sm
                  transition-all duration-300 hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>

      {/* ── Hero Heading ── */}
      <FadeIn delay={0.15} y={40} className="mt-8 sm:mt-12 md:mt-16 px-6 md:px-10 relative z-0">
        <h1
          className="hero-heading font-black uppercase tracking-tighter leading-[0.85] flex flex-col w-full
            text-[13vw] sm:text-[14vw] md:text-[15vw] lg:text-[16vw]"
        >
          <span className="block text-left">Hey,</span>
          <span className="block text-right">I&apos;m Wajoud</span>
        </h1>
      </FadeIn>

      {/* ── Bottom Bar ── */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end flex-1 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20 gap-6 sm:gap-0">
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
        className="absolute left-1/2 -translate-x-1/2 z-10
          top-[42%] -translate-y-1/2
          sm:top-auto sm:translate-y-0 sm:bottom-0
          w-[240px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
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
