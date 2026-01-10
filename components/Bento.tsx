import MotionCard from "./MotionCard";

export default function Bento() {
  const items = [
    { label: "Design", color: "bg-primary-500 text-white" },
    { label: "Frontend", color: "bg-secondary-500 text-white" },
    { label: "Backend", color: "bg-accent-500 text-white" },
    {
      label: "Tooling",
      color:
        "bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-900",
    },
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
