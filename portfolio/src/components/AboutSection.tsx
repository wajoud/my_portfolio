import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import CVButton from './CVButton';

const CORNER_IMAGES = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    alt: 'Moon 3D icon',
    className: 'hidden sm:block absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    delay: 0.1, x: -80,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    alt: '3D object',
    className: 'hidden sm:block absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]',
    delay: 0.25, x: -80,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    alt: 'Lego 3D icon',
    className: 'hidden sm:block absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    delay: 0.15, x: 80,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    alt: '3D group object',
    className: 'hidden sm:block absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]',
    delay: 0.3, x: 80,
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center
        px-5 sm:px-8 md:px-10 py-20"
      style={{ background: '#0C0C0C' }}
    >
      {/* Corner decorative 3D images */}
      {CORNER_IMAGES.map((img) => (
        <FadeIn
          key={img.alt}
          delay={img.delay}
          x={img.x}
          y={0}
          duration={0.9}
          className={img.className}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="w-full h-auto pointer-events-none select-none"
            draggable={false}
          />
        </FadeIn>
      ))}

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Animated paragraph + button */}
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text="I’m a Senior Data Scientist and LLM Engineer who lives at the intersection of cutting-edge GenAI and heavy-duty data infrastructure. I don't just prompt APIs—I architect autonomous agents, orchestrate local SLMs, and build high-throughput metadata knowledge graphs from the ground up. From shipping real-time, graph-based fraud systems to deploying decentralized computer vision on edge devices, I focus on turning complex technical architecture into production reality. If you love high-execution builder energy and want to push the boundaries of what autonomous systems can do—let’s build something incredible together!"
            className="text-[#D7E2EA] font-light leading-relaxed max-w-[700px] text-center outfit-font"
            style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.45rem)' }}
          />
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <ContactButton />
            <CVButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
