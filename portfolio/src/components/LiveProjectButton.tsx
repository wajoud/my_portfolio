interface LiveProjectButtonProps {
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  label?: string;
}

const LiveProjectButton = ({ className, href, onClick, label = 'View Details' }: LiveProjectButtonProps) => {
  return (
    <a 
      href={href || '#'} 
      onClick={onClick}
      target={onClick ? undefined : "_blank"} 
      rel="noopener noreferrer"
    >
      <button
        className={`rounded-full font-medium uppercase tracking-widest cursor-pointer
          border-2 border-[#D7E2EA] text-[#D7E2EA]
          px-8 py-3 sm:px-10 sm:py-3.5
          text-sm sm:text-base
          transition-all duration-200 hover:bg-[#D7E2EA]/10
          ${className ?? ''}`}
      >
        {label}
      </button>
    </a>
  );
};

export default LiveProjectButton;
