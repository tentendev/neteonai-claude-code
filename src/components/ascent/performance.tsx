import Image from "next/image";
import "../../app/ascent-gx10/styles.css";

export function AscentPerformance() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#00543C] to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              PERFORMANCE
            </div>
            <h2 className="text-4xl font-bold mb-6">1 PetaFLOP of AI Power</h2>
            <p className="text-xl text-gray-300 mb-8">
              The NVIDIA GB10 Grace Blackwell Superchip delivers desktop AI performance that was
              impossible just a year ago. Train, fine-tune, and run inference on models you couldn't
              dream of running locally.
            </p>

            {/* Performance Metrics */}
            <div className="space-y-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">AI Training (FP4)</span>
                  <span className="text-[#01A982] font-bold">1 petaFLOP</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-[#01A982] h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Unified Memory</span>
                  <span className="text-[#01A982] font-bold">128GB LPDDR5x</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-[#01A982] h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Model Size Support</span>
                  <span className="text-[#01A982] font-bold">200B Parameters</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-[#01A982] h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>

            <button className="bg-white text-[#00543C] px-8 py-4 rounded font-bold hover:bg-gray-100 transition">
              View Technical Specs
            </button>
          </div>

          <div className="hidden lg:block">
            <Image
              src="/images/ascent/pic_ai.jpg"
              alt="AI Performance"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
