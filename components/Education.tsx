import MotionCard from "./MotionCard";

export default function Education() {
  const schools = [
    {
      school: "University A",
      degree: "B.S. Computer Science",
      years: "2016 — 2020",
    },
    {
      school: "High School B",
      degree: "High School Diploma",
      years: "2012 — 2016",
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-primary-500">
        Education
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {schools.map((s) => (
          <MotionCard
            key={s.school}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-4"
          >
            <div className="font-medium">{s.school}</div>
            <div className="text-sm text-black/60">{s.degree}</div>
            <div className="text-xs text-black/50 mt-1">{s.years}</div>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}
