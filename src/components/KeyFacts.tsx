
interface Fact {
  number: string;
  label: string;
}

const facts: Fact[] = [
  { number: "35", label: "years of expertise" },
  { number: "750+", label: "IT professionals" },
  { number: "4K", label: "success stories" },
  { number: "30+", label: "industries covered" },
];

export default function KeyFacts() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-neutral-100 mb-10 relative flex justify-center items-center ">
        <span className="bg-black text-4xl font-semibold bg-gradient-to-br from-neutral-500 via-neutral-300 to-neutral-700 bg-clip-text text-transparent px-3 py-1 -ml-4">Key Facts About ScienceSoft</span>
      </h2>

      <div className="flex justify-between gap-15 text-center text-gray-900">
        {facts.map(({ number, label }) => (
          <div key={number} className="flex flex-col items-center border-r last:border-r-0 border-neutral-500 px-4">
            <span className="text-4xl font-bold text-neutral-300">{number}</span>
            <span className="mt-1 text-base text-neutral-400">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
