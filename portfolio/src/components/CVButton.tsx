import { Download } from 'lucide-react';

interface CVButtonProps {
  className?: string;
}

const CVButton = ({ className }: CVButtonProps) => {
  return (
    <a
      href="https://drive.google.com/file/d/1EnWuC_rSwB3pmdb1PutijU5rGJPvn9ov/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <button
        className={`rounded-full font-medium uppercase tracking-widest text-[#D7E2EA] cursor-pointer
          px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
          text-xs sm:text-sm md:text-base
          flex items-center gap-2 border border-[#D7E2EA]/30
          bg-transparent hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]
          transition-all duration-300
          ${className ?? ''}`}
      >
        <Download className="w-4 h-4 sm:w-5 h-5 opacity-80" />
        Download CV
      </button>
    </a>
  );
};

export default CVButton;
