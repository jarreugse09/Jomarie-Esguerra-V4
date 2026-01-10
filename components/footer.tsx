import MotionCard from './MotionCard';

export default function Footer() {
  return (
    <MotionCard className="w-full border-t mt-16 bg-[var(--color-light)]">
      <div className="container text-sm text-center text-black/70 py-6">
        <div className="flex items-center justify-center gap-4 mb-2">
          <a href="#" aria-label="Twitter" className="hover:underline transition text-[var(--color-primary)]">Twitter</a>
          <a href="#" aria-label="LinkedIn" className="hover:underline transition text-[var(--color-primary)]">LinkedIn</a>
          <a href="#" aria-label="Github" className="hover:underline transition text-[var(--color-primary)]">GitHub</a>
        </div>
        <div>© {new Date().getFullYear()} Jomarie Esguerra. All rights reserved.</div>
      </div>
    </MotionCard>
  );
}
