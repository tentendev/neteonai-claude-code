import Image from "next/image";
import "../../app/ascent-gx10/styles.css";

export function AscentConnectivity() {
  const features = [
    {
      image:
        "https://dlcdnwebimgs.asus.com/files/media/202506/5c0fb57c-4e48-4e96-8c97-04bf8df2677c/v1/img/security-1.jpg",
      title: "Ultra-Fast Data Throughput",
      description:
        "Lightning-fast bandwidth for distributed AI workloads and rapid model synchronization.",
    },
    {
      image:
        "https://dlcdnwebimgs.asus.com/files/media/202506/5c0fb57c-4e48-4e96-8c97-04bf8df2677c/v1/img/security-2.jpg",
      title: "Hardware-Accelerated Security",
      description: "Built-in TLS, IPsec, and MACsec encryption without CPU overhead.",
    },
    {
      image:
        "https://dlcdnwebimgs.asus.com/files/media/202506/5c0fb57c-4e48-4e96-8c97-04bf8df2677c/v1/img/security-3.jpg",
      title: "Precision Time Sync",
      description:
        "IEEE 1588v2 PTP for microsecond-level synchronization in edge computing.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#01A982]/10 text-[#01A982] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            CONNECTIVITY
          </div>
          <h2 className="text-4xl font-bold mb-6">Enterprise-Grade Networking Built In</h2>
          <p className="text-xl text-gray-600">
            NVIDIA ConnectX-7 delivers the speed and security your AI workloads demand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 card-hover text-center">
              <Image
                src={feature.image}
                alt={feature.title}
                width={400}
                height={300}
                className="rounded-lg mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
