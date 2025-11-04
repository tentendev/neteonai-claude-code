import Image from "next/image";
import { Check } from "lucide-react";

export function AscentModels() {
  const models = [
    {
      name: "DeepSeek R1",
      description: "AI inference optimized up to 70B parameters",
    },
    {
      name: "Llama 3.1",
      description: "Up to 405B parameters with dual-GX10 setup",
    },
    {
      name: "Meta & Google Models",
      description: "Broad compatibility with industry frameworks",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#01A982]/10 text-[#01A982] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            AI MODELS
          </div>
          <h2 className="text-4xl font-bold mb-6">Train the Models That Matter</h2>
          <p className="text-xl text-gray-600">
            From DeepSeek to Llama, run the latest AI models without compromise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="https://dlcdnwebimgs.asus.com/files/media/202506/5c0fb57c-4e48-4e96-8c97-04bf8df2677c/v1/img/pic_models.jpg"
              alt="AI Models"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Support for 200B Parameter Models</h3>
            <p className="text-lg text-gray-600 mb-8">
              Fine-tune and run inference on the latest reasoning models right on your desk. Need
              more? Stack two GX10 systems to handle models up to 405B parameters like Llama 3.1.
            </p>

            <div className="space-y-4">
              {models.map((model, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-[#01A982] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-lg mb-1">{model.name}</div>
                    <p className="text-gray-600">{model.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
