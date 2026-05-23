import { useRef, useEffect } from 'react';
import type { ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

const Magnet = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      const isNear =
        Math.abs(distX) < rect.width / 2 + padding &&
        Math.abs(distY) < rect.height / 2 + padding;

      if (isNear) {
        el.style.transform = `translate3d(${distX / strength}px, ${distY / strength}px, 0)`;
        el.style.transition = activeTransition;
      } else {
        el.style.transform = 'translate3d(0, 0, 0)';
        el.style.transition = inactiveTransition;
      }
    };

    const handleMouseLeave = () => {
      el.style.transform = 'translate3d(0, 0, 0)';
      el.style.transition = inactiveTransition;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: 'transform', display: 'inline-block' }}
    >
      {children}
    </div>
  );
};

export default Magnet;
