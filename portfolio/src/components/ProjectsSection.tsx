import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';
import { ExternalLink, X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const PROJECTS = [
  {
    num: '01',
    name: 'Smart Lane Change Detection AI',
    category: 'Computer Vision',
    tags: ['YOLO', 'PyTorch', 'OpenCV', 'Deep Learning'],
    github: 'https://github.com/wajoud/Car-Lane-Change-Detection-',
    description:
      "Real-time automated lane change detection system using deep learning. The system scans road markings to identify lanes, monitors vehicle movements, and triggers safety alerts when a lane change is detected — built for driver awareness and road safety.",
    cover: '/portfolio/Smart-Lane-Change-Detection-AI/image.webp',
    images: [
      '/portfolio/Smart-Lane-Change-Detection-AI/image_1.webp',
      '/portfolio/Smart-Lane-Change-Detection-AI/imgae_2.jpg',
      '/portfolio/Smart-Lane-Change-Detection-AI/image.webp',
    ],
    accent: '#38BDF8',
  },
  {
    num: '02',
    name: 'Next Gen NLP',
    category: 'Natural Language Processing',
    tags: ['HuggingFace', 'Transformers', 'LLMs', 'Python'],
    github: 'https://github.com/wajoud/NextGenNLP',
    description:
      'A hub for pioneering Natural Language Processing technologies. Projects focus on advanced LLM techniques, transformer pipelines, and sequence tagging to enhance machine understanding of human language and foster intuitive AI communications.',
    cover: '/portfolio/NextGenNLP/cover_resize.webp',
    images: [
      '/portfolio/NextGenNLP/image_1.webp',
      '/portfolio/NextGenNLP/image_2.webp',
      '/portfolio/NextGenNLP/cover_resize.webp',
    ],
    accent: '#A78BFA',
  },
  {
    num: '03',
    name: 'Vision AI Explorer',
    category: 'Computer Vision',
    tags: ['Edge AI', 'Real-time', 'Neural Nets', 'Streaming'],
    github: 'https://github.com/wajoud/VisionAIExplore',
    description:
      'Cutting-edge Computer Vision advancements hub. Explore, learn, and contribute to projects that leverage the latest AI technologies to transform how machines interpret and understand visual data from the world around us.',
    cover: '/portfolio/VisionAIExplore/cover_resize.webp',
    images: [
      '/portfolio/VisionAIExplore/image_1.webp',
      '/portfolio/VisionAIExplore/image_2.webp',
      '/portfolio/VisionAIExplore/cover_resize.webp',
    ],
    accent: '#34D399',
  },
  {
    num: '04',
    name: 'ML Innovate Hub',
    category: 'Machine Learning',
    tags: ['scikit-learn', 'XGBoost', 'Feature Eng', 'Dashboard'],
    github: 'https://github.com/wajoud/MLInnovateHub',
    description:
      'Experimental dashboard showcasing tabular classifiers, regressors, and feature engineering loops. A comprehensive hub for innovative ML experiments across diverse datasets.',
    cover: '/portfolio/MLInnovateHub/cover_resize.webp',
    images: [
      '/portfolio/MLInnovateHub/cover_resize.webp',
      '/portfolio/MLInnovateHub/image_1.webp',
      '/portfolio/MLInnovateHub/image_2.webp',
      '/portfolio/MLInnovateHub/image_3.webp',
    ],
    accent: '#FB923C',
  },
  {
    num: '05',
    name: 'Deep Learning Sphere',
    category: 'Deep Learning',
    tags: ['PyTorch', 'TensorFlow', 'Neural Nets', 'Benchmarks'],
    github: 'https://github.com/wajoud/DeepLearningSphere',
    description:
      'Interactive weights inspection, neural net overlays, and pre-trained benchmarks. A deep dive into deep learning architectures and their practical applications.',
    cover: '/portfolio/DeepLearningSphere/cover_resize.webp',
    images: [
      '/portfolio/DeepLearningSphere/cover_resize.webp',
      '/portfolio/DeepLearningSphere/image_1.webp',
      '/portfolio/DeepLearningSphere/image_2.webp',
      '/portfolio/DeepLearningSphere/image_3.webp',
    ],
    accent: '#F472B6',
  },
];

type Project = typeof PROJECTS[0];

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const [activeImg, setActiveImg] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl" />

      {/* Close */}
      <button
        onClick={onClose}
        className="fixed top-5 right-5 z-[210] p-2.5 rounded-full bg-white/5 border border-white/10
          text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
      >
        <X className="w-5 h-5" />
      </button>

      <motion.div
        initial={{ scale: 0.93, y: 24, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', damping: 28, stiffness: 220 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-[210] w-full max-w-5xl max-h-[90vh] overflow-y-auto
          bg-[#111]/95 border border-white/8 rounded-[28px] shadow-2xl
          flex flex-col md:flex-row gap-0 overflow-hidden"
      >
        {/* Left — Image viewer */}
        <div className="w-full md:w-[55%] flex-none bg-[#0a0a0a] flex flex-col">
          {/* Main image */}
          <div className="relative w-full aspect-[16/10] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImg}
                src={project.images[activeImg]}
                alt={project.name}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            {/* Nav arrows (only if multiple images) */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={() => setActiveImg(i => (i - 1 + project.images.length) % project.images.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 
                    backdrop-blur-sm border border-white/10 text-white hover:bg-black/70 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveImg(i => (i + 1) % project.images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50
                    backdrop-blur-sm border border-white/10 text-white hover:bg-black/70 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
            {/* Accent glow */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{ background: `linear-gradient(to top, ${project.accent}22, transparent)` }}
            />
          </div>

          {/* Thumbnails */}
          {project.images.length > 1 && (
            <div className="flex gap-2 p-3 overflow-x-auto">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-20 aspect-video rounded-xl overflow-hidden border-2 transition-all cursor-pointer
                    ${activeImg === i ? 'border-white/60 opacity-100' : 'border-transparent opacity-40 hover:opacity-70'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right — Project info */}
        <div className="flex-1 flex flex-col gap-6 p-7 md:p-9">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span
                className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border"
                style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}12` }}
              >
                {project.category}
              </span>
              <span className="text-[#D7E2EA]/30 text-xs font-mono">{project.num}</span>
            </div>
            <h3 className="hero-heading font-black text-2xl md:text-3xl uppercase tracking-tight leading-tight text-[#D7E2EA]">
              {project.name}
            </h3>
            <p className="text-[#D7E2EA]/60 font-light leading-relaxed text-sm md:text-base">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-full
                  bg-white/[0.04] border border-white/8 text-[#D7E2EA]/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-2xl font-bold
                uppercase tracking-widest text-sm text-[#0C0C0C] bg-[#D7E2EA]
                hover:bg-white transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    onClick={onClick}
    className="group relative w-full cursor-pointer rounded-[24px] overflow-hidden border border-white/6
      bg-[#111]/80 hover:border-white/15 transition-all duration-500"
    style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
  >
    {/* Cover image */}
    <div className="relative w-full overflow-hidden" style={{ height: 'clamp(180px, 26vw, 320px)' }}>
      <img
        src={project.cover}
        alt={project.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80" />

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div
          className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm uppercase tracking-widest backdrop-blur-md border"
          style={{ background: `${project.accent}20`, borderColor: `${project.accent}50`, color: project.accent }}
        >
          <ExternalLink className="w-3.5 h-3.5" />
          View Project
        </div>
      </div>

      {/* Number badge */}
      <div className="absolute top-4 left-4">
        <span className="font-black text-[#D7E2EA]/20 font-mono text-5xl leading-none select-none">
          {project.num}
        </span>
      </div>

      {/* Category badge */}
      <div className="absolute top-4 right-4">
        <span
          className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border backdrop-blur-sm"
          style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}15` }}
        >
          {project.category}
        </span>
      </div>
    </div>

    {/* Card body */}
    <div className="p-5 sm:p-6 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <h3
          className="font-black uppercase tracking-tight leading-tight text-[#D7E2EA] group-hover:text-white transition-colors duration-300"
          style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.35rem)' }}
        >
          {project.name}
        </h3>
        <ArrowUpRight
          className="w-5 h-5 text-[#D7E2EA]/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5
            transition-all duration-300 flex-shrink-0 mt-0.5"
        />
      </div>

      <p className="text-[#D7E2EA]/45 font-light text-xs sm:text-sm leading-relaxed line-clamp-2">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full
              bg-white/[0.04] border border-white/6 text-[#D7E2EA]/40"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 z-10 relative
        px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-24">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {/* Featured first card — spans 2 cols on lg */}
        <div className="lg:col-span-2">
          <ProjectCard project={PROJECTS[0]} index={0} onClick={() => setSelectedProject(PROJECTS[0])} />
        </div>
        <div>
          <ProjectCard project={PROJECTS[1]} index={1} onClick={() => setSelectedProject(PROJECTS[1])} />
        </div>
        {PROJECTS.slice(2).map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i + 2}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
