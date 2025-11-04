import "../../app/ascent-gx10/styles.css";

export function AscentCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#00543C] to-[#01A982] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Ready to Supercharge Your AI Development?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join researchers, developers, and data scientists who are pushing AI boundaries with
          desktop supercomputing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="cta-button relative bg-white text-[#00543C] px-10 py-4 rounded font-bold hover:bg-gray-100 transition">
            Contact Sales Team
          </button>
          <button className="enterprise-badge text-white px-10 py-4 rounded font-bold hover:bg-white/20 transition">
            Request Demo
          </button>
        </div>
        <p className="mt-8 text-sm text-white/70">
          Available for education, research, and enterprise deployments
        </p>
      </div>
    </section>
  );
}
