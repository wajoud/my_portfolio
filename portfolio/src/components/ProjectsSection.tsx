import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

const PROJECTS = [
  {
    num: '01',
    name: 'Smart Lane Change Detection AI',
    category: 'Computer Vision',
    client: 'Personal Project',
    github: 'https://github.com/wajoud/Car-Lane-Change-Detection-',
    description: "The system scans road markings to identify lanes, then monitors the vehicle's movements. If a lane change is detected, it triggers an alert to ensure driver awareness and safety.",
    col1: [
      '/assets/img/portfolio/Smart-Lane-Change-Detection-AI/image_1.webp',
      '/assets/img/portfolio/Smart-Lane-Change-Detection-AI/imgae_2.jpg',
    ],
    col2: '/assets/img/portfolio/Smart-Lane-Change-Detection-AI/image.webp',
  },
  {
    num: '02',
    name: 'NextGenNLP',
    category: 'Natural Language Processing',
    client: 'Personal Project',
    github: 'https://github.com/wajoud/NextGenNLP',
    description: 'Explore NextGenNLP: a hub for pioneering Natural Language Processing technologies. Our projects focus on advanced LLM techniques to enhance machine understanding of human language, fostering more intuitive AI communications.',
    col1: [
      '/assets/img/portfolio/NextGenNLP/image_1.webp',
      '/assets/img/portfolio/NextGenNLP/image_2.webp',
    ],
    col2: '/assets/img/portfolio/NextGenNLP/cover_resize.webp',
  },
  {
    num: '03',
    name: 'VisionAIExplore',
    category: 'Computer Vision',
    client: 'Personal Project',
    github: 'https://github.com/wajoud/VisionAIExplore',
    description: 'VisionAIExplore is your hub for cutting-edge Computer Vision advancements. Dive into our repository to explore, learn, and contribute to projects that leverage the latest AI technologies to transform how machines interpret and understand visual data from the world around us.',
    col1: [
      '/assets/img/portfolio/VisionAIExplore/image_1.webp',
      '/assets/img/portfolio/VisionAIExplore/image_2.webp',
    ],
    col2: '/assets/img/portfolio/VisionAIExplore/cover_resize.webp',
  },
];

const TOTAL = PROJECTS.length;
const BORDER_RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

interface ProjectCardProps {
  project: (typeof PROJECTS)[0];
  index: number;
  totalCards: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  onSelect: () => void;
}

const ProjectCard = ({ project, index, totalCards, progress, onSelect }: ProjectCardProps) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(
    progress,
    [index / totalCards, 1],
    [1, targetScale]
  );

  return (
    <div
      className="h-[85vh] flex items-start justify-center"
      style={{ position: 'sticky', top: `${96 + index * 28}px` }}
    >
      <motion.div
        style={{ scale, transformOrigin: 'top center' }}
        className={`w-full ${BORDER_RADIUS} border-2 border-[#D7E2EA] bg-[#0C0C0C]
          p-4 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-6`}
      >
        {/* Card top row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-row items-center gap-4 sm:gap-6">
            <span
              className="font-black leading-none hero-heading animate-pulse-subtle"
              style={{ fontSize: 'clamp(2.2rem, 8vw, 110px)', lineHeight: 1 }}
            >
              {project.num}
            </span>
            <div className="flex flex-col gap-0.5">
              <span
                className="uppercase text-[#D7E2EA] font-semibold tracking-widest opacity-60 animate-fade-in"
                style={{ fontSize: 'clamp(0.6rem, 1.1vw, 0.85rem)' }}
              >
                {project.category}
              </span>
              <span
                className="uppercase text-[#D7E2EA] font-bold tracking-tight"
                style={{ fontSize: 'clamp(0.85rem, 2vw, 1.8rem)', lineHeight: 1.1 }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton onClick={(e) => { e.preventDefault(); onSelect(); }} />
        </div>

        {/* Card image grid */}
        <div className="flex gap-3 md:gap-4 cursor-pointer w-full" onClick={onSelect}>
          {/* Left column (40%) — 2 stacked images (hidden on mobile to prevent clutter) */}
          <div className="hidden sm:flex flex-col gap-3 md:gap-4" style={{ flex: '0 0 40%' }}>
            <img
              src={project.col1[0]}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className={`w-full object-cover ${BORDER_RADIUS}`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1[1]}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className={`w-full object-cover ${BORDER_RADIUS}`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          {/* Right column (60% on desktop, 100% on mobile) — 1 tall image */}
          <div className="w-full sm:w-[60%]" style={{ flex: '1 1 auto' }}>
            <img
              src={project.col2}
              alt={`${project.name} main`}
              loading="lazy"
              className={`w-full h-full object-cover ${BORDER_RADIUS}`}
              style={{ height: 'clamp(200px, 35vw, 570px)' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectDetailsModal = ({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) => {
  const images = [project.col1[0], project.col1[1], project.col2];
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#0C0C0C]/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      {/* Close Button (Fixed on screen top-right, avoids scroll cutoff and navbar overlap) */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 md:top-8 md:right-8 text-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:scale-110 
          transition-all duration-200 cursor-pointer z-[110] bg-[#141414]/80 backdrop-blur-md p-2.5 rounded-full border border-white/10"
        aria-label="Close details"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <motion.div
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 0, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-5xl bg-[#141414]/95 border border-white/10 rounded-[32px] 
          shadow-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Column: Image Viewer */}
        <div className="w-full flex-none md:flex-1 flex flex-col gap-4">
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-[#0C0C0C]">
            <img src={activeImg} alt={project.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-3 overflow-x-auto py-1">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(img)}
                className={`w-24 aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-200 flex-shrink-0
                  ${activeImg === img ? 'border-[#38BDF8] scale-95 shadow-[0_0_10px_rgba(56,189,248,0.3)]' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Project Info */}
        <div className="w-full flex-none md:flex-1 flex flex-col justify-between gap-6 md:pt-4">
          <div className="flex flex-col gap-4">
            <span className="text-[#38BDF8] font-bold uppercase tracking-widest text-sm">{project.category}</span>
            <h3 className="hero-heading font-black text-3xl md:text-4xl uppercase tracking-tight leading-tight">{project.name}</h3>
            
            <div className="w-full h-[1px] bg-white/10 my-2" />
            
            <p className="text-[#D7E2EA]/85 font-light leading-relaxed text-base md:text-lg">
              {project.description}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4 text-sm bg-white/[0.02] border border-white/5 rounded-2xl p-4">
              <div>
                <span className="block text-[#D7E2EA]/40 uppercase tracking-wider text-xs">Client</span>
                <span className="font-semibold text-[#D7E2EA]">{project.client}</span>
              </div>
              <div>
                <span className="block text-[#D7E2EA]/40 uppercase tracking-wider text-xs">Source Platform</span>
                <span className="font-semibold text-[#D7E2EA]">GitHub</span>
              </div>
            </div>

            <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full">
              <button className="w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-[#0C0C0C] bg-[#D7E2EA] 
                hover:bg-white transition-all duration-200 shadow-[0_0_20px_rgba(215,226,234,0.15)] hover:scale-[1.01] cursor-pointer">
                View Source Code on GitHub
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[0] | null>(null);

  // Lock scroll and tag body when project details modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('data-modal-open', 'true');
    } else {
      document.body.style.overflow = 'unset';
      document.body.removeAttribute('data-modal-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.removeAttribute('data-modal-open');
    };
  }, [selectedProject]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 z-10 relative
        px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-28">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      {/* Sticky stacking cards */}
      <div className="flex flex-col">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            totalCards={TOTAL}
            progress={scrollYProgress}
            onSelect={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modern Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
