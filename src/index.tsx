import React from 'react';
import { motion as m } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  initial: any;
  animated: any;
}

const Animated: React.FC<Props> = ({ initial, animated, children }) => {
  const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true });
  const animateVariants = {
    hide: initial,
    show: animated,
  };

  return (
    <m.div
      ref={ref}
      initial="hide"
      animate={inView ? 'show' : 'hide'}
      variants={animateVariants}
      transition={{ duration: 1 }}
    >
      {children}
    </m.div>
  );
};

export default Animated;
