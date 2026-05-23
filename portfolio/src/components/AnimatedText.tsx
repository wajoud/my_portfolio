import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

import type { CSSProperties } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

function CharSpan({ char, progress, index, total }: {
  char: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  // Staggered overlap logic: each letter fades in over 20% of the scroll track for a smooth feather wave effect
  const windowSize = 0.2;
  const start = (index / total) * (1 - windowSize);
  const end = start + windowSize;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  if (char === ' ') {
    return <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>;
  }

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ visibility: 'hidden' }}>{char}</span>
      <motion.span
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          opacity,
        }}
      >
        {char}
      </motion.span>
    </span>
  );
}

const AnimatedText = ({ text, className, style }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.3'],
  });

  const chars = text.split('');

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <CharSpan
          key={i}
          char={char}
          progress={scrollYProgress}
          index={i}
          total={chars.length}
        />
      ))}
    </p>
  );
};

export default AnimatedText;
