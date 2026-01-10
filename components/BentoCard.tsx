import MotionCard from './MotionCard';
import { HTMLAttributes } from 'react';

export default function BentoCard({ children, className = '', ...props }: HTMLAttributes<HTMLDivElement> & { className?: string }){
  return (
    <MotionCard className={`rounded-lg p-4 shadow-sm border border-black/5 ${className}`} {...props}>
      {children}
    </MotionCard>
  );
}
