import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

// ─── Skills / Services from Wajoud's old portfolio ───────────────
const SERVICES = [
  {
    num: '01',
    name: 'Generative AI & Agentic Systems',
    desc: 'Designing autonomous agents, advanced RAG pipelines, and self-healing research environments. Specializing in orchestrating local SLMs, custom tool-use layers, and real-time LLM integrations using LangChain and open-source ecosystems.',
    tags: ['LangChain', 'LlamaIndex', 'Local SLMs', 'Agentic AI', 'Vector DBs', 'Custom Tool-Use'],
  },
  {
    num: '02',
    name: 'Graph Intelligence & ML Pipelines',
    desc: 'Building unified intelligence layers with metadata knowledge graphs (Neo4j) for complex cross-domain entity retrieval and reasoning. Engineering end-to-end ML pipelines for fraud detection, user profiling, and hybrid recommendation engines using PyTorch, CatBoost, and Scikit-Learn.',
    tags: ['Neo4j', 'Knowledge Graphs', 'PyTorch', 'CatBoost', 'Fraud Detection', 'Recommendation Systems'],
  },
  {
    num: '03',
    name: 'High-Throughput Data Engineering',
    desc: 'Architecting robust, real-time streaming pipelines and distributed data infrastructure using Kafka, NATS Jetstream, and Polars. Designing scalable storage strategies across Graph, Vector, NoSQL, and relational databases including Neo4j, Chroma, MongoDB, and PostgreSQL.',
    tags: ['Apache Kafka', 'NATS Jetstream', 'Polars', 'ChromaDB', 'PostgreSQL', 'MongoDB'],
  },
  {
    num: '04',
    name: 'Computer Vision & Edge AI',
    desc: 'Developing decentralized, real-time surveillance architectures, human activity recognition (3D ResNets), and object detection pipelines. Deploying optimized models on edge hardware like Jetson Nano utilizing P2P data flows with GStreamer.',
    tags: ['OpenCV', 'YOLO', '3D ResNets', 'GStreamer', 'Jetson Nano', 'Edge Computing'],
  },
  {
    num: '05',
    name: 'Cloud Infrastructure & DevOps',
    desc: 'Containerizing and orchestrating production-grade distributed workloads using Docker and Kubernetes. Managing secure, scalable deployments across AWS, GCP, and Azure utilizing modern CI/CD pipelines and microservices architecture.',
    tags: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'CI/CD Pipelines', 'Microservices'],
  },
];

const ServicesSection = () => {
  return (
    <section
      id="resume"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center text-[#0C0C0C] leading-none tracking-tight
            mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      {/* Skill list */}
      <ul className="max-w-5xl mx-auto">
        {SERVICES.map((svc, i) => (
          <FadeIn key={svc.num} delay={i * 0.1} y={30}>
            <motion.li
              whileHover="hover"
              initial="initial"
              className="relative flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12 px-4 sm:px-6 rounded-3xl transition-all duration-300 cursor-default overflow-hidden group"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              {/* Soft Gradient Hover Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#7621B0]/[0.04] to-[#BE4C00]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Animated Number */}
              <motion.span
                variants={{
                  initial: { x: 0, color: '#0C0C0C' },
                  hover: { x: 12, color: '#7621B0' },
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="font-black leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
              >
                {svc.num}
              </motion.span>

              {/* Name + Description + Staggered Badges */}
              <div className="flex flex-col gap-2 pt-2">
                <span
                  className="font-medium uppercase text-[#0C0C0C] leading-tight"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {svc.name}
                </span>
                <span
                  className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.6,
                  }}
                >
                  {svc.desc}
                </span>

                {/* Staggered Technology Pill Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border border-black/10 rounded-full text-xs font-medium text-black/75 bg-black/[0.02] group-hover:bg-black/[0.04] group-hover:border-black/20 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          </FadeIn>
        ))}
      </ul>

      {/* ── Experience Timeline ── */}
      <div className="max-w-5xl mx-auto mt-20 sm:mt-28 md:mt-32">
        <FadeIn delay={0} y={40}>
          <h3
            className="font-black uppercase text-center text-[#0C0C0C] leading-none tracking-tight mb-16"
            style={{ fontSize: 'clamp(2rem, 7vw, 90px)' }}
          >
            Experience
          </h3>
        </FadeIn>

        {[
          {
            role: 'Data Scientist',
            company: 'Jar',
            period: 'Feb 2023 — Present',
            bullets: [
              'Graph Fraud Module: Neo4j risk scoring.',
              'Autonomous LLM Layers: OpenAI Whisper insights.',
              'Real-Time Analytics: Kafka expense tracking.',
              'Churn Mitigation: CatBoost risk scoring.',
              'Recommendation Engines: Hybrid financial filtering.',
            ],
          },
          {
            role: 'Associate Data Scientist',
            company: 'Happymonk AI Labs',
            period: 'Jul 2021 — Jan 2023',
            bullets: [
              'Decentralized Streaming: NATS & GStreamer.',
              'Activity Recognition: 3D ResNets.',
              'Edge Vision: Jetson Nano deployment.',
            ],
          },
          {
            role: 'Research Intern',
            company: 'Nokia Networks',
            period: 'Aug 2020 — Jul 2021',
            bullets: [
              '5G Telemetry: Parameter processing modules.',
              'Network Optimization: Genetic algorithm routing.',
            ],
          },
        ].map((job, i) => (
          <FadeIn key={job.role} delay={i * 0.12} y={30}>
            <div
              className="py-8 sm:py-10 md:py-12"
              style={{ borderBottom: '1px solid rgba(12,12,12,0.15)', borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined }}
            >
              <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                <div>
                  <p className="font-black text-[#0C0C0C] uppercase tracking-tight" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2rem)' }}>
                    {job.role}
                  </p>
                  <p className="font-medium text-[#0C0C0C]" style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.3rem)', opacity: 0.7 }}>
                    {job.company}
                  </p>
                </div>
                <span
                  className="font-light uppercase tracking-widest text-[#0C0C0C] px-4 py-1.5 border border-[rgba(12,12,12,0.3)] rounded-full"
                  style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.95rem)' }}
                >
                  {job.period}
                </span>
              </div>
              <ul className="flex flex-col gap-1 mt-4 pl-1">
                {job.bullets.map((b) => {
                  const parts = b.split(':');
                  const hasColon = parts.length > 1;
                  return (
                    <li key={b} className="flex items-start gap-2 text-[#0C0C0C]" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)', opacity: 0.6 }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0C0C0C] flex-shrink-0" />
                      <span>
                        {hasColon ? (
                          <>
                            <strong className="font-semibold text-black">{parts[0]}:</strong>{parts.slice(1).join(':')}
                          </>
                        ) : (
                          b
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </FadeIn>
        ))}

        {/* ── Education ── */}
        <FadeIn delay={0} y={40}>
          <h3
            className="font-black uppercase text-center text-[#0C0C0C] leading-none tracking-tight mt-20 mb-16"
            style={{ fontSize: 'clamp(2rem, 7vw, 90px)' }}
          >
            Education
          </h3>
        </FadeIn>
        {[
          { degree: 'ME in Big Data & Data Analytics', school: 'MAHE, Manipal Institute of Technology', period: '2019 – 2021' },
          { degree: 'B.Tech (Hons) in Mechatronics Engineering', school: 'MAHE, Manipal Institute of Technology', period: '2016 – 2019' },
        ].map((edu, i) => (
          <FadeIn key={edu.degree} delay={i * 0.1} y={30}>
            <div
              className="py-8 sm:py-10"
              style={{ borderBottom: '1px solid rgba(12,12,12,0.15)', borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined }}
            >
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <p className="font-black text-[#0C0C0C] uppercase tracking-tight" style={{ fontSize: 'clamp(1rem, 2.2vw, 1.8rem)' }}>
                    {edu.degree}
                  </p>
                  <p className="font-medium text-[#0C0C0C]" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.2rem)', opacity: 0.65 }}>
                    {edu.school}
                  </p>
                </div>
                <span
                  className="font-light uppercase tracking-widest text-[#0C0C0C] px-4 py-1.5 border border-[rgba(12,12,12,0.3)] rounded-full"
                  style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.95rem)' }}
                >
                  {edu.period}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
