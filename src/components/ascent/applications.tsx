import Image from "next/image";
import { Check } from "lucide-react";
import "../../app/ascent-gx10/styles.css";

export function AscentApplications() {
  const applications = [
    {
      image:
        "https://dlcdnwebimgs.asus.com/files/media/202506/5c0fb57c-4e48-4e96-8c97-04bf8df2677c/v1/img/application-1.jpg",
      title: "Rapid Prototyping",
      description: "Test ideas quickly without waiting for cloud resources. Iterate faster, ship better.",
    },
    {
      image:
        "https://dlcdnwebimgs.asus.com/files/media/202506/5c0fb57c-4e48-4e96-8c97-04bf8df2677c/v1/img/application-2.jpg",
      title: "Model Fine-Tuning",
      description:
        "Customize pre-trained models for your specific use case. Keep your data local and private.",
    },
    {
      image:
        "https://dlcdnwebimgs.asus.com/files/media/202506/5c0fb57c-4e48-4e96-8c97-04bf8df2677c/v1/img/application-3.jpg",
      title: "Data Science",
      description: "Analyze massive datasets with ease. Run complex analytics and ML workflows locally.",
    },
  ];

  return (
    <section id="applications" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#01A982]/10 text-[#01A982] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            APPLICATIONS
          </div>
          <h2 className="text-4xl font-bold mb-6">Built for Real AI Work</h2>
          <p className="text-xl text-gray-600">
            From prototyping to production deployment, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {applications.map((app, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
              <Image src={app.image} alt={app.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cloud Integration */}
        <div className="bg-gradient-to-br from-[#00543C] to-gray-900 text-white rounded-2xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Seamless Cloud Integration</h3>
              <p className="text-lg text-gray-300 mb-8">
                Develop locally, deploy anywhere. Move your models to DGX Cloud or any accelerated
                infrastructure with minimal code changes.
              </p>
              <div className="space-y-4">
                {[
                  "Same software stack as DGX Cloud",
                  "Cost-effective local experimentation",
                  "Free up cluster resources for production",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-[#01A982] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src="https://dlcdnwebimgs.asus.com/files/media/202506/5c0fb57c-4e48-4e96-8c97-04bf8df2677c/v1/img/pic_deployment.jpg"
                alt="Cloud Integration"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
