// src/components/Features.jsx
const features = [
  { title: "Professional Teaching", color: "bg-green-100" },
  { title: "Kids Equipment", color: "bg-yellow-100" },
  { title: "Fun & Activities", color: "bg-blue-100" },
  { title: "Culture & Values", color: "bg-purple-100" },
];

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className={`${f.color} text-center p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300`}
          >
            <h2 className="font-semibold text-base sm:text-lg">{f.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
