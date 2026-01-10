'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type MotionCardProps = HTMLMotionProps<'div'> & { className?: string };

export default function MotionCard({ className = '', children, ...props }: MotionCardProps) {
  return (
    <motion.div
      {...props}
      whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`card p-6 rounded-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}
