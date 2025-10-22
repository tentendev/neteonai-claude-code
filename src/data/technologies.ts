import { Technology } from "@/types";

export const technologies: Technology[] = [
  {
    id: "thermal-management",
    name: "Advanced Thermal Management",
    slug: "thermal-management",
    description: "Patented cooling solutions for high-performance computing in harsh environments",
    longDescription:
      "Our patented thermal management technology represents a breakthrough in fanless cooling design. By combining advanced heat pipe layouts, optimized fin geometries, and intelligent thermal distribution, we enable passively-cooled systems to handle GPU cards consuming over 300W. This eliminates a major reliability concern in industrial deployments where dust, debris, and continuous operation make fan-based systems prone to failure.",
    benefits: [
      "Fanless operation eliminates moving parts and maintenance requirements",
      "Support for high-power GPU cards (300W+) without active cooling",
      "Extended component lifespan through consistent temperature management",
      "Silent operation ideal for noise-sensitive environments",
      "Proven reliability in extreme temperature ranges (-40°C to 70°C)",
      "Reduced total cost of ownership with zero fan replacement",
    ],
    technicalDetails: [
      {
        title: "Patented Heat Sink Design",
        content:
          "Our exclusive heat sink design features precisely engineered fin spacing and orientation to maximize natural convection efficiency. Strategic placement of heat pipes ensures optimal thermal distribution from high-power components to the entire chassis surface area, effectively turning the system enclosure into a massive passive radiator.",
      },
      {
        title: "Thermal Distribution Architecture",
        content:
          "Heat pipes with sintered copper powder wicks provide exceptional thermal conductivity (>10,000 W/m·K effective). Multiple heat pipes work in parallel to distribute heat from GPU and CPU hotspots across the entire heat sink array, preventing localized thermal bottlenecks that limit fanless system performance.",
      },
      {
        title: "Chassis Integration",
        content:
          "The aluminum chassis is designed as an integral part of the thermal solution, with optimized wall thickness and surface area to enhance heat dissipation. Thermal interface materials and mechanical pressure distribution ensure efficient heat transfer from internal components to the chassis surface.",
      },
      {
        title: "Performance Validation",
        content:
          "Every thermal design undergoes extensive CFD (Computational Fluid Dynamics) simulation and thermal chamber testing. We validate performance across the entire operating temperature range under worst-case computational loads, ensuring reliable operation in field conditions.",
      },
    ],
    applications: [
      "Factory automation in dust-heavy manufacturing environments",
      "Outdoor deployments where fan failure risks system downtime",
      "Clean rooms and laboratories requiring particle-free operation",
      "Transportation applications subject to vibration and shock",
      "Telecommunications infrastructure with remote locations",
    ],
    relatedProducts: ["nai-8000-series", "nai-6000-series", "nia-5000-series"],
    image: "/images/technologies/thermal.jpg",
  },
  {
    id: "power-systems",
    name: "Intelligent Power Systems",
    slug: "power-systems",
    description: "Efficient power delivery and management for mission-critical applications",
    longDescription:
      "Our intelligent power management systems go beyond simple voltage conversion. They provide comprehensive power monitoring, protection, and control features essential for industrial and mobile deployments. From wide-range DC inputs to sophisticated ignition control, our power systems ensure reliable operation across diverse installation scenarios.",
    benefits: [
      "Wide-range DC input (9-48V) accommodates various power sources",
      "Automotive-grade ignition control for vehicle installations",
      "Intelligent power sequencing protects sensitive components",
      "Real-time power monitoring and alerting capabilities",
      "Over-voltage, over-current, and reverse polarity protection",
      "Remote power management via software interfaces",
    ],
    technicalDetails: [
      {
        title: "Wide-Range DC Input",
        content:
          "Our DC-DC power converters accept input voltages from 9V to 48V, making them compatible with 12V automotive, 24V industrial, and 48V telecommunications power systems. Advanced switch-mode regulation maintains >90% efficiency across the entire input range while providing clean, stable power to system components.",
      },
      {
        title: "Ignition Power Control",
        content:
          "For vehicle installations, our ignition power control provides intelligent power-up and shutdown sequences. The system can be configured to power on with vehicle ignition, delay shutdown to complete critical operations, and provide wake-on-event capabilities for fleet management applications.",
      },
      {
        title: "Protection Mechanisms",
        content:
          "Comprehensive protection circuitry guards against over-voltage (up to 60V surge protection), over-current, under-voltage, and reverse polarity conditions. These protections are critical in industrial environments where power quality may be poor or where connection errors could occur during installation.",
      },
      {
        title: "Power Monitoring",
        content:
          "Built-in power monitoring provides real-time feedback on input voltage, current consumption, and system power state. This data can be logged for predictive maintenance or used to trigger alerts when power conditions deviate from normal operating parameters.",
      },
    ],
    applications: [
      "Vehicle computing with automotive power systems",
      "Remote installations with solar or battery power",
      "Industrial automation with 24V DC infrastructure",
      "Telecommunications systems with 48V DC backup",
      "Mobile and portable computing platforms",
    ],
    relatedProducts: ["nvt-7000-series", "nia-5000-series"],
    image: "/images/technologies/power.jpg",
  },
  {
    id: "rugged-design",
    name: "Rugged System Design",
    slug: "rugged-design",
    description: "MIL-STD-810G certified systems for extreme operating conditions",
    longDescription:
      "Industrial and military applications demand computing platforms that operate reliably in conditions that would destroy commercial systems. Our rugged design methodology encompasses mechanical, thermal, and electrical design practices proven through MIL-STD-810G certification testing. Every system is engineered to withstand shock, vibration, extreme temperatures, and electromagnetic interference.",
    benefits: [
      "MIL-STD-810G certification for shock, vibration, and temperature",
      "Conformal coating protects against moisture and contaminants",
      "Shock-mounted storage prevents data loss from impacts",
      "EMI/EMC compliance for industrial environments",
      "Corrosion-resistant materials for outdoor installations",
      "Extended operational lifespan in harsh conditions",
    ],
    technicalDetails: [
      {
        title: "MIL-STD-810G Compliance",
        content:
          "Our systems undergo rigorous testing per MIL-STD-810G standards including Method 514.6 (vibration), Method 516.6 (shock), and Method 501.5/502.5 (temperature extremes). This ensures reliable operation in transportation, industrial, and military applications where mechanical stress and environmental extremes are routine.",
      },
      {
        title: "Mechanical Design",
        content:
          "Heavy-duty aluminum chassis construction provides both EMI shielding and mechanical protection. Internal components are secured with industrial-grade fasteners and shock-isolation mounts. PCB designs follow IPC-6012 Class 3 standards for high-reliability applications with enhanced copper thickness and via reinforcement.",
      },
      {
        title: "Environmental Protection",
        content:
          "Conformal coating on PCB assemblies provides protection against moisture, dust, and chemical contaminants. All external connectors feature industrial-grade specifications with locking mechanisms and ingress protection. Cable routing and strain relief prevent connection failures from vibration.",
      },
      {
        title: "Electromagnetic Compatibility",
        content:
          "Comprehensive EMI/EMC design includes multilayer PCB ground planes, filtered power inputs, and shielded I/O interfaces. Systems meet FCC Class A, CE, and industrial EMC standards, ensuring reliable operation in electrically noisy environments with heavy machinery and power switching.",
      },
    ],
    applications: [
      "Transportation systems (rail, maritime, automotive)",
      "Factory automation and robotics",
      "Oil & gas exploration and production",
      "Military and defense applications",
      "Outdoor infrastructure and smart city deployments",
    ],
    relatedProducts: ["nai-8000-series", "nvt-7000-series", "nia-5000-series"],
    image: "/images/technologies/rugged.jpg",
  },
  {
    id: "ai-acceleration",
    name: "AI Acceleration",
    slug: "ai-acceleration",
    description: "Optimized hardware and software for deep learning inference at the edge",
    longDescription:
      "Edge AI requires more than just adding a GPU to a computer. Our platforms are specifically optimized for AI inference workloads with careful attention to memory bandwidth, I/O throughput, and power efficiency. We support major AI frameworks and provide reference implementations for common computer vision and natural language processing tasks.",
    benefits: [
      "Support for NVIDIA, Intel, and Google AI accelerators",
      "Optimized drivers and frameworks for inference performance",
      "Pre-configured AI development environments",
      "Reference implementations for common use cases",
      "Multi-accelerator support for scaling performance",
      "Comprehensive software support and documentation",
    ],
    technicalDetails: [
      {
        title: "GPU Acceleration",
        content:
          "Support for NVIDIA RTX and professional GPUs enables high-throughput deep learning inference. Our thermal designs accommodate GPU TDP up to 350W while systems remain passively cooled. PCIe Gen 4 x16 interfaces ensure maximum bandwidth for data transfer to/from GPU memory.",
      },
      {
        title: "Framework Support",
        content:
          "Pre-validated support for TensorFlow, PyTorch, ONNX Runtime, and TensorRT. We provide Docker containers with optimized framework builds and example models for object detection, segmentation, and classification tasks. Integration with MLOps tools simplifies model deployment and updates.",
      },
      {
        title: "Multi-Accelerator Architecture",
        content:
          "High-end platforms support multiple GPU cards or combinations of GPU, VPU, and TPU accelerators. This enables heterogeneous computing where different models run on optimal hardware, or load balancing across multiple inference engines for maximum throughput.",
      },
      {
        title: "Performance Optimization",
        content:
          "Beyond raw compute power, our systems optimize the entire inference pipeline including data ingestion, preprocessing, inference, and post-processing. High-bandwidth networking, NVMe storage, and sufficient system RAM ensure GPU utilization remains high without I/O bottlenecks.",
      },
    ],
    applications: [
      "Real-time video analytics and object detection",
      "Autonomous vehicle perception systems",
      "Quality inspection and defect detection",
      "Natural language processing at the edge",
      "Facial recognition and biometric authentication",
    ],
    relatedProducts: ["nai-8000-series", "nai-6000-series", "nvr-9000-series"],
    image: "/images/technologies/ai.jpg",
  },
];

// Helper functions
export function getTechnologyBySlug(slug: string): Technology | undefined {
  return technologies.find((t) => t.slug === slug);
}

export function getAllTechnologySlugs(): string[] {
  return technologies.map((t) => t.slug);
}
