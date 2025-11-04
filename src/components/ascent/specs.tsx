export function AscentSpecs() {
  const specs = [
    {
      title: "Computing Power",
      items: [
        { label: "GPU", value: "NVIDIA Blackwell" },
        { label: "CPU", value: "20-Core Arm Processor" },
        { label: "AI Performance", value: "1 petaFLOP (FP4)" },
        { label: "Memory", value: "128GB LPDDR5x Unified" },
        { label: "Interconnect", value: "NVLink C2C" },
      ],
    },
    {
      title: "Connectivity",
      items: [
        { label: "Network", value: "ConnectX-7 NIC" },
        { label: "Ethernet", value: "10 GbE LAN" },
        { label: "Display", value: "HDMI 2.1b" },
        { label: "USB", value: "4x USB 3.2 Gen 2x2 Type-C" },
        { label: "Power Delivery", value: "180W EPR PD3.1" },
      ],
    },
    {
      title: "Physical",
      items: [
        { label: "Dimensions", value: "150 x 150 x 51mm" },
        { label: "Cooling", value: "Dual-fan + Vapor Chamber" },
        { label: "Form Factor", value: "Ultra-compact Desktop" },
        { label: "Certification", value: "MIL-STD 810H" },
        { label: "Security", value: "Kensington Lock Slot" },
      ],
    },
    {
      title: "Software Stack",
      items: [
        { label: "OS", value: "NVIDIA DGX OS (Ubuntu)" },
        { label: "Frameworks", value: "PyTorch, TensorFlow" },
        { label: "Libraries", value: "CUDA, TensorRT" },
        { label: "Tools", value: "Jupyter, Ollama" },
        { label: "AI Stack", value: "NVIDIA NIMs & Blueprints" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#01A982]/10 text-[#01A982] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            SPECIFICATIONS
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Excellence</h2>
          <p className="text-xl text-gray-600">
            Every detail engineered for maximum AI performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {specs.map((spec, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{spec.title}</h3>
              <div className="space-y-4">
                {spec.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-center ${
                      idx < spec.items.length - 1 ? "pb-4 border-b border-gray-200" : ""
                    }`}
                  >
                    <span className="font-semibold text-gray-900">{item.label}</span>
                    <span className="text-gray-700">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#01A982] text-white px-10 py-4 rounded font-bold hover:bg-[#00543C] transition">
            Download Full Datasheet
          </button>
        </div>
      </div>
    </section>
  );
}
