import FadeIn from './FadeIn';
import { ExternalLink, Mail, Phone } from 'lucide-react';

const SOCIAL = [
  {
    label: 'GitHub',
    href: 'https://github.com/wajoud',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/wajoud-noorani-7b6054118/',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@wajoudnoorani59',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.88 0-3.4-2.88-3.4-6.42s1.52-6.42 3.4-6.42 3.38 2.88 3.38 6.42zm3.04 0c0 3.25-.4 5.88-.9 5.88-.5 0-.9-2.63-.9-5.88s.4-5.88.9-5.88c.5 0 .9 2.63.9 5.88z"/>
      </svg>
    ),
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-16 relative"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#B600A8]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Heading */}
      <FadeIn delay={0} y={40} className="mb-12 sm:mb-16 md:mb-20">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12 sm:gap-16 relative z-10">

        {/* Quote */}
        <FadeIn delay={0.1} y={20}>
          <blockquote
            className="text-[#D7E2EA] font-light italic text-center leading-relaxed opacity-70"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}
          >
            "Some people want it to happen, some wish it would happen,<br className="hidden sm:block" />
            others make it happen."
            <footer className="mt-2 not-italic font-medium opacity-60 text-sm tracking-widest uppercase">
              — Michael Jordan
            </footer>
          </blockquote>
        </FadeIn>

        {/* ── Get In Touch Card ── */}
        <FadeIn delay={0.2} y={30} className="w-full max-w-2xl">
          <div
            className="w-full bg-[#141414]/70 border border-white/5 p-8 sm:p-12 rounded-[30px] sm:rounded-[40px] flex flex-col items-center gap-6 text-center"
            style={{
              boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.02)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div>
              <h3 className="text-[#D7E2EA] uppercase tracking-widest font-black text-lg mb-3">
                Let's Work Together
              </h3>
              <p className="text-[#D7E2EA]/40 font-light text-sm max-w-sm mx-auto leading-relaxed">
                Have a project in mind, a collaboration idea, or just want to say hi?
                Reach out directly — I'd love to connect.
              </p>
            </div>

            <a
              href="mailto:wajoudnoorani59@gmail.com?subject=Let's%20Connect"
              className="rounded-full font-medium uppercase tracking-widest text-white cursor-pointer px-10 py-4 text-sm flex items-center gap-2 transition-all duration-300 hover:opacity-90"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 10px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                outline: '2px solid white',
                outlineOffset: '-3px',
              }}
            >
              <Mail className="w-4 h-4" />
              Send Me an Email
            </a>

            {/* Fallback — visible email for copy/paste */}
            <p className="text-[#D7E2EA]/30 text-xs font-light">
              or reach me directly at{' '}
              <a
                href="mailto:wajoudnoorani59@gmail.com"
                className="text-[#D7E2EA]/60 hover:text-[#D7E2EA] underline underline-offset-4 decoration-dotted transition-colors duration-200"
              >
                wajoudnoorani59@gmail.com
              </a>
            </p>
          </div>
        </FadeIn>

        {/* Contact Cards */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <FadeIn delay={0.25} y={20}>
            <a
              href="mailto:wajoudnoorani59@gmail.com"
              className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-[#D7E2EA]/20
                text-[#D7E2EA] hover:border-[#D7E2EA]/60 hover:bg-[#D7E2EA]/5
                transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 opacity-70 group-hover:opacity-100" />
              <span className="font-light tracking-wide" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}>
                wajoudnoorani59@gmail.com
              </span>
            </a>
          </FadeIn>
          <FadeIn delay={0.3} y={20}>
            <a
              href="tel:+919590010102"
              className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-[#D7E2EA]/20
                text-[#D7E2EA] hover:border-[#D7E2EA]/60 hover:bg-[#D7E2EA]/5
                transition-all duration-300 group"
            >
              <Phone className="w-5 h-5 opacity-70 group-hover:opacity-100" />
              <span className="font-light tracking-wide" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}>
                +91 9590010102
              </span>
            </a>
          </FadeIn>
        </div>

        {/* Social links */}
        <FadeIn delay={0.35} y={20} className="flex gap-4 flex-wrap justify-center">
          {SOCIAL.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#D7E2EA]/30
                text-[#D7E2EA] font-semibold tracking-wide
                hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10
                transition-all duration-300 group"
              style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)' }}
            >
              {icon}
              <span className="uppercase tracking-widest text-xs">{label}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </FadeIn>

        {/* Divider + copyright */}
        <FadeIn delay={0.4} y={10} className="w-full">
          <div className="border-t border-[#D7E2EA]/10 pt-8 flex flex-wrap justify-between items-center gap-4">
            <p
              className="text-[#D7E2EA] font-black uppercase tracking-widest hero-heading"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.8rem)' }}
            >
              Wajoud H Noorani
            </p>
            <p
              className="text-[#D7E2EA] font-light opacity-50 tracking-wide"
              style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)' }}
            >
              © {new Date().getFullYear()} · All Rights Reserved
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;
