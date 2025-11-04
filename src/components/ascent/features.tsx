import { Zap, Cpu, Wrench, Database, Cloud, Box } from "lucide-react";
import "../../app/ascent-gx10/styles.css";

export function AscentFeatures() {
  const features = [
    {
      icon: Zap,
      title: "Extreme AI Performance",
      description:
        "1 petaFLOP of AI compute with NVIDIA GB10 Grace Blackwell. Train and fine-tune models up to 200B parameters locally.",
      badge: "FP4 Support",
      gradient: "from-[#01A982] to-[#00543C]",
    },
    {
      icon: Cpu,
      title: "Unified Memory Architecture",
      description:
        "128GB coherent unified system memory. Work with larger datasets and complex models without bottlenecks.",
      badge: "LPDDR5x",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Wrench,
      title: "Developer-Optimized",
      description:
        "Full NVIDIA AI software stack included. PyTorch, TensorFlow, CUDA—everything pre-configured and ready to go.",
      badge: "DGX OS",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Database,
      title: "Scalable Architecture",
      description:
        "Stack two GX10 systems with ConnectX-7. Handle models up to 405B parameters like Llama 3.1.",
      badge: "NVLink C2C",
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: Cloud,
      title: "Advanced Thermal Design",
      description:
        "Dual-fan with 7-level control and vapor chamber cooling. 1.6× more efficient than comparable systems.",
      badge: "QuietFlow",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: Box,
      title: "Compact Design",
      description:
        "Ultra-small form factor fits on any desk. Perfect for labs, offices, and edge deployments.",
      badge: "150 x 150 x 51mm",
      gradient: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section id="ascent" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#01A982]/10 text-[#01A982] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            ASCENT GX10
          </div>
          <h2 className="section-title text-gray-900 mb-6">AI Supercomputing, Reimagined</h2>
          <p className="text-xl text-gray-600">
            Everything you need to develop, fine-tune, and deploy AI models—right on your desk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 card-hover">
              <div
                className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-6`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="spec-badge">{feature.badge}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
