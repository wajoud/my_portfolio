import { useMemo } from 'react';
import type { ElementType, ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { Variants, HTMLMotionProps } from 'framer-motion';

interface FadeInProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
}

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as: Tag = 'div',
  className,
  ...rest
}: FadeInProps) => {
  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const MotionTag = useMemo(() => motion(Tag as ElementType), [Tag]);

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '50px', amount: 0 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default FadeIn;
