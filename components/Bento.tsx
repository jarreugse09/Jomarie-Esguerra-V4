import MotionCard from './MotionCard';

export default function Bento() {
  const items = [
    { label: 'Design', color: 'bg-[var(--color-primary)] text-[var(--color-light)]' },
    { label: 'Frontend', color: 'bg-[var(--color-secondary)] text-[var(--color-light)]' },
    { label: 'Backend', color: 'bg-[var(--color-accent)] text-[var(--color-light)]' },
    { label: 'Tooling', color: 'bg-[var(--color-dark)] text-[var(--color-light)]' },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((it) => (
        <MotionCard
          key={it.label}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`p-4 text-center ${it.color}`}
        >
          <div className="font-medium">{it.label}</div>
        </MotionCard>
      ))}
    </div>
  );
}
