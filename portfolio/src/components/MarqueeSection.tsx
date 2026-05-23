import React from 'react';

interface TechItem {
  name: string;
  glowClass: string;
  icon: React.ReactNode;
}

const TECH_ITEMS: TechItem[] = [
  {
    name: 'Python',
    glowClass: 'hover:border-[#3776AB]/50 hover:shadow-[0_0_25px_rgba(55,118,171,0.35)]',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.25.18c.9 0 1.66.76 1.66 1.66v1.6H12.3c-1.8 0-3.27 1.47-3.27 3.27v1.17H6.93a3.27 3.27 0 0 0-3.27 3.27v1.87c0 .9.76 1.66 1.66 1.66h1.6V12.9c0-1.8 1.47-3.27 3.27-3.27h3.6c1.8 0 3.27-1.47 3.27-3.27V4.26c0-.9-.76-1.66-1.66-1.66h-1.6V2.6c0-.9-.76-1.66-1.66-1.66h-1.88z" fill="#3776AB" />
        <path d="M9.75 23.82c-.9 0-1.66-.76-1.66-1.66v-1.6h5.4c1.8 0 3.27-1.47 3.27-3.27v-1.17h2.1c1.8 0 3.27-1.47 3.27-3.27V10.9c0-.9-.76-1.66-1.66-1.66h-1.6V11.1c0 1.8-1.47 3.27-3.27 3.27h-3.6c-1.8 0-3.27 1.47-3.27 3.27v3.6c0 .9.76 1.66 1.66 1.66h1.6v1.66c0 .9.76 1.66 1.66 1.66h1.88z" fill="#FFD343" />
      </svg>
    ),
  },
  {
    name: 'PyTorch',
    glowClass: 'hover:border-[#EE4C2C]/50 hover:shadow-[0_0_25px_rgba(238,76,44,0.35)]',
    icon: (
      <svg className="w-8 h-8 text-[#EE4C2C]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.162-4.5c.348-1.889-.58-3.778-2.088-4.889C7.458 11.667 6 9.889 6 7.722c0-3.055 2.553-5.555 5.688-5.555 3.135 0 5.688 2.5 5.688 5.555 0 2.167-1.458 3.944-2.75 4.889-1.508 1.111-2.436 3-2.088 4.889H10.838z" />
      </svg>
    ),
  },
  {
    name: 'TensorFlow',
    glowClass: 'hover:border-[#FF6F00]/50 hover:shadow-[0_0_25px_rgba(255,111,0,0.35)]',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FF6F00">
        <path d="M12 2L2 7.77v11.54L12 22l10-2.69V7.77L12 2zm-1 15.65v-7.3l-5-2.88V13.8l5 2.88zm2 0l5-2.88V7.47l-5 2.88v7.3z" />
      </svg>
    ),
  },
  {
    name: 'FastAPI',
    glowClass: 'hover:border-[#009688]/50 hover:shadow-[0_0_25px_rgba(0,150,136,0.35)]',
    icon: (
      <svg className="w-8 h-8 text-[#009688]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 22h9l1-8h-5L19 2h-7z" />
      </svg>
    ),
  },
  {
    name: 'AWS',
    glowClass: 'hover:border-[#FF9900]/50 hover:shadow-[0_0_25px_rgba(255,153,0,0.35)]',
    icon: (
      <svg className="w-8 h-8 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.5 16.5c-3.1 0-5.6-1.5-5.6-3.3h1.8c0 1 1.7 1.6 3.8 1.6s3.8-.6 3.8-1.6h1.8c0 1.8-2.5 3.3-5.6 3.3z" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6 11c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    glowClass: 'hover:border-[#2496ED]/50 hover:shadow-[0_0_25px_rgba(36,150,237,0.35)]',
    icon: (
      <svg className="w-8 h-8 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 10h3v3H2v-3zm4 0h3v3H6v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zm-8-4h3v3H6V6zm4 0h3v3h-3V6zm4 0h3v3h-3V6zm0-4h3v3h-3V2zm6 11h-3v-3h3v3zM2 15h20v2H2v-2z" />
      </svg>
    ),
  },
  {
    name: 'Git',
    glowClass: 'hover:border-[#F05032]/50 hover:shadow-[0_0_25px_rgba(240,80,50,0.35)]',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#F05032">
        <path d="M22.6 11.4L12.6 1.4c-.8-.8-2-.8-2.8 0L8 3.2l3 3c.6-.2 1.4-.1 2 .4.6.6.7 1.4.3 2l2.6 2.6c.6-.4 1.4-.3 2 .3.8.8.8 2 0 2.8s-2 .8-2.8 0c-.6-.6-.7-1.4-.3-2L12.2 9c-.4.3-1.1.3-1.6 0-.6-.6-.7-1.4-.3-2L7.3 4 1.4 9.9c-.8.8-.8 2 0 2.8l10 10c.8.8 2 .8 2.8 0l8.4-8.4c.9-.8.9-2 0-2.9z" />
      </svg>
    ),
  },
  {
    name: 'Linux / Bash',
    glowClass: 'hover:border-[#FCC624]/50 hover:shadow-[0_0_25px_rgba(252,198,36,0.35)]',
    icon: (
      <svg className="w-8 h-8 text-[#FCC624]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    name: 'OpenCV',
    glowClass: 'hover:border-[#5C3EE8]/50 hover:shadow-[0_0_25px_rgba(92,62,232,0.35)]',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <circle cx="12" cy="7" r="5" stroke="#F05032" fill="none" />
        <circle cx="7" cy="16" r="5" stroke="#009688" fill="none" />
        <circle cx="17" cy="16" r="5" stroke="#3776AB" fill="none" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    glowClass: 'hover:border-[#47A248]/50 hover:shadow-[0_0_25px_rgba(71,162,72,0.35)]',
    icon: (
      <svg className="w-8 h-8 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C7.5 7 6 12.5 6 16c0 3.5 2.5 6 6 6s6-2.5 6-6c0-3.5-1.5-9-6-14zm0 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    glowClass: 'hover:border-[#336791]/50 hover:shadow-[0_0_25px_rgba(51,103,145,0.35)]',
    icon: (
      <svg className="w-8 h-8 text-[#336791]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    name: 'Kubernetes',
    glowClass: 'hover:border-[#326CE5]/50 hover:shadow-[0_0_25px_rgba(50,108,229,0.35)]',
    icon: (
      <svg className="w-8 h-8 text-[#326CE5]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 6.5v11L12 22l10-4.5v-11L12 2zM12 5.5l7 3.2v6.6l-7 3.2-7-3.2V8.7l7-3.2z" />
      </svg>
    ),
  },
];

const Badge = ({ item }: { item: TechItem }) => {
  return (
    <div
      className={`flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/5 
        bg-white/[0.02] backdrop-blur-md text-[#D7E2EA] font-semibold text-lg tracking-wider
        transition-all duration-300 hover:bg-white/[0.08] hover:scale-105 ${item.glowClass}`}
    >
      {item.icon}
      <span>{item.name}</span>
    </div>
  );
};

const Row = ({ direction, items }: { direction: 'left' | 'right'; items: TechItem[] }) => {
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  return (
    <div className="flex overflow-hidden w-full py-2 select-none relative mask-gradient">
      <div className={`flex gap-6 shrink-0 ${animationClass}`}>
        {/* First set of items */}
        {items.map((item, index) => (
          <Badge key={index} item={item} />
        ))}
        {/* Second identical set of items for seamless loop */}
        {items.map((item, index) => (
          <Badge key={`dup-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
};

const MarqueeSection = () => {
  const row1Items = TECH_ITEMS;
  // Reverse row 2 items for visual variation and opposing scroll flows
  const row2Items = [...TECH_ITEMS].reverse();

  return (
    <section
      style={{ background: '#0C0C0C', overflow: 'hidden' }}
      className="marquee-container pt-20 sm:pt-28 md:pt-32 pb-12 flex flex-col gap-6"
    >
      <Row direction="left" items={row1Items} />
      <Row direction="right" items={row2Items} />
    </section>
  );
};

export default MarqueeSection;
