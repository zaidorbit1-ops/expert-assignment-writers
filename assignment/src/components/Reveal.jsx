import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Reveal = ({ children, className = '', delay = 0, direction = 'up', once = true }) => {
  const reduceMotion = useReducedMotion();
  const offset = direction === 'left' ? { x: -24 } : direction === 'right' ? { x: 24 } : { y: 24 };

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.16 }}
      transition={reduceMotion ? undefined : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
