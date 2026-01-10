import MotionCard from "./MotionCard";
import { HTMLMotionProps } from "framer-motion";

export default function BentoCard({
  children,
  className = "",
  ...props
}: HTMLMotionProps<"div"> & { className?: string }) {
  return (
    <MotionCard
      className={`rounded-lg p-4 shadow-sm border border-neutral-200 dark:border-neutral-700 ${className}`}
      {...props}
    >
      {children}
    </MotionCard>
  );
}
