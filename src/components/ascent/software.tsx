import { CheckCircle2, Code2, Package } from "lucide-react";

export function AscentSoftware() {
  const softwareCategories = [
    {
      icon: CheckCircle2,
      title: "Preloaded & Ready",
      gradient: "from-purple-50 to-blue-50",
      iconBg: "bg-purple-600",
      items: [
        "NVIDIA DGX OS (Ubuntu)",
        "Complete AI software stack",
        "Pre-configured frameworks",
        "Instant deployment",
      ],
    },
    {
      icon: Code2,
      title: "Optimized Tools",
      gradient: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-600",
      items: ["PyTorch & TensorFlow", "CUDA & TensorRT", "Jupyter notebooks", "NVIDIA NIMs & Blueprints"],
    },
    {
      icon: Package,
      title: "Model Support",
      gradient: "from-green-50 to-emerald-50",
      iconBg: "bg-green-600",
      items: ["DeepSeek R1 (70B)", "Llama 3.1 (405B)", "Meta & Google models", "Custom frameworks"],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#01A982]/10 text-[#01A982] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            SOFTWARE
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Everything You Need, Ready to Go</h2>
          <p className="text-xl text-gray-600">
            Complete AI development environment pre-configured and optimized.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {softwareCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${category.gradient} p-8 rounded-xl border border-gray-200`}
            >
              <div className={`w-14 h-14 ${category.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2 text-gray-600">
                {category.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
