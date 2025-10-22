import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-001",
    title: "Automotive Assembly Line Quality Inspection",
    slug: "automotive-quality-inspection",
    industry: "Manufacturing",
    client: "Global Automotive Manufacturer",
    summary:
      "Deployed AI-powered visual inspection system across 12 production lines, achieving 99.7% defect detection accuracy and reducing false positives by 85%.",
    challenge:
      "A major automotive manufacturer needed to improve quality control on their engine assembly lines. Traditional vision inspection systems produced too many false positives (>30%), causing unnecessary line stoppages and wasting inspector time. The harsh factory environment (-10°C to 45°C, heavy vibration, dust) made commercial computing solutions unreliable. Existing systems lacked the computational power for deep learning-based inspection, limiting detection accuracy.",
    solution:
      "We deployed 24 units of NAI-6000 edge AI platforms equipped with NVIDIA RTX 3060 GPUs across 12 assembly lines. Each system runs custom-trained YOLOv8 models for real-time defect detection on critical engine components. The fanless design eliminated reliability issues from dust and vibration. Local inference processing reduced network bandwidth requirements by 95% compared to cloud-based solutions. Integration with existing MES and SCADA systems enabled automatic line control and quality reporting.",
    results: [
      "99.7% defect detection accuracy, up from 87% with traditional vision systems",
      "85% reduction in false positives, saving 450 inspector hours per month",
      "Zero system failures due to environmental factors over 18 months of operation",
      "ROI achieved in 8 months through reduced scrap and warranty claims",
      "300ms average inference time enabling 100% inline inspection at production speed",
    ],
    technologies: ["thermal-management", "ai-acceleration", "rugged-design"],
    products: ["nai-6000-series"],
    image: "/images/case-studies/automotive.jpg",
    publishDate: "2024-02-15",
  },
  {
    id: "cs-002",
    title: "Smart City Traffic Management and Surveillance",
    slug: "smart-city-traffic-surveillance",
    industry: "Smart Cities",
    client: "Metropolitan City Government",
    summary:
      "Citywide deployment of 200+ AI-powered surveillance and traffic analysis nodes, processing 800+ camera feeds in real-time for traffic optimization and public safety.",
    challenge:
      "A city of 2.5 million residents needed to modernize their traffic management and public safety infrastructure. Legacy systems couldn't handle the volume of data from 800+ traffic and surveillance cameras. Cloud-based analytics proved too expensive due to bandwidth costs and introduced unacceptable latency for traffic signal optimization. The city required a distributed edge computing solution that could operate reliably in outdoor cabinets with extreme temperature variations and limited maintenance access.",
    solution:
      "We designed a distributed edge AI architecture using 200 NVR-9000 platforms strategically placed across the city. Each node processes 4-8 camera feeds locally, performing vehicle counting, classification, license plate recognition, and incident detection in real-time. The rugged, fanless design enables installation in roadside cabinets without climate control. Intelligent power systems with battery backup ensure continuous operation during grid outages. A central command center aggregates insights from all nodes for city-wide traffic optimization and emergency response coordination.",
    results: [
      "40% reduction in average commute times through AI-optimized traffic signal timing",
      "65% faster incident detection and emergency response dispatch",
      "92% license plate recognition accuracy for automated toll collection and parking enforcement",
      "Zero weather-related system failures across temperature range of -25°C to 50°C",
      "$12M annual savings in bandwidth costs vs. cloud-based alternative",
      "ROI achieved in 22 months",
    ],
    technologies: ["ai-acceleration", "power-systems", "rugged-design"],
    products: ["nvr-9000-series"],
    image: "/images/case-studies/smart-city.jpg",
    publishDate: "2024-01-20",
  },
  {
    id: "cs-003",
    title: "Autonomous Mining Vehicle Fleet",
    slug: "autonomous-mining-vehicles",
    industry: "Mining & Resources",
    client: "International Mining Corporation",
    summary:
      "Enabled autonomous operation of 45 haul trucks in underground mining environment with AI-powered navigation, collision avoidance, and load optimization.",
    challenge:
      "An underground mining operation sought to automate their fleet of 45 haul trucks to improve safety and operational efficiency. The environment presented extreme challenges: complete darkness, temperatures up to 55°C, severe vibration from rough terrain, and zero tolerance for system failures that could endanger workers or halt production. Navigation systems needed to handle GPS-denied environments, while object detection had to work reliably in dusty conditions with varying lighting. Vehicle power systems (24V DC) required intelligent management to prevent battery drain.",
    solution:
      "Each haul truck was equipped with an NVT-7000 platform featuring NVIDIA RTX A4000 GPU for real-time sensor fusion and path planning. The system integrates data from LiDAR, stereo cameras, radar, and IMU sensors to build a 3D map of the tunnel environment and plan collision-free paths. Thermal management enables continuous operation in 55°C ambient temperature without active cooling. Wide-range DC input and intelligent power management work seamlessly with the vehicle's 24V electrical system. Edge AI processing eliminated dependency on unreliable underground wireless networks.",
    results: [
      "45 autonomous haul trucks operating 24/7 with 99.2% availability",
      "78% reduction in collision incidents compared to manual operation",
      "35% increase in material throughput through optimized routing and loading",
      "Zero injuries attributed to autonomous vehicle operation over 2 years",
      "Reliable operation in ambient temperatures up to 55°C and severe vibration environment",
      "ROI achieved in 16 months through labor savings and productivity gains",
    ],
    technologies: ["thermal-management", "ai-acceleration", "power-systems", "rugged-design"],
    products: ["nvt-7000-series"],
    image: "/images/case-studies/mining.jpg",
    publishDate: "2023-11-10",
  },
  {
    id: "cs-004",
    title: "Pharmaceutical Manufacturing Process Control",
    slug: "pharmaceutical-manufacturing",
    industry: "Pharmaceuticals",
    client: "Fortune 500 Pharmaceutical Company",
    summary:
      "AI-enhanced process monitoring and control system for sterile drug manufacturing, achieving 99.99% batch quality and full 21 CFR Part 11 compliance.",
    challenge:
      "A pharmaceutical manufacturer needed to modernize their critical process control systems for sterile drug production. The FDA-regulated environment demanded 100% traceability, validation, and 21 CFR Part 11 compliance. Cleanroom classification (ISO Class 5) prohibited fan-based cooling systems. Real-time process monitoring required integration with 150+ sensors and actuators while maintaining deterministic response times. Any system failure could result in batch loss worth $500K+ and potential regulatory action.",
    solution:
      "We deployed 8 NIA-5000 industrial computing platforms as the foundation of the new process control architecture. The fanless design met cleanroom particle requirements while supporting real-time control workloads. Extensive I/O expansion accommodated all process sensors and control loops. Redundant configurations with automatic failover ensured continuous operation. All software was validated per FDA guidelines with full audit trails. Edge AI models monitor process parameters in real-time, detecting anomalies that could affect batch quality before traditional control systems would respond.",
    results: [
      "99.99% batch quality rate, exceeding previous 98.7% average",
      "67% reduction in out-of-specification batches through predictive anomaly detection",
      "Zero unplanned downtime due to control system failures over 3 years",
      "Full 21 CFR Part 11 compliance with comprehensive audit trails",
      "Successful FDA audit with zero findings related to automation systems",
      "$8M annual savings from reduced batch losses and improved yield",
    ],
    technologies: ["thermal-management", "rugged-design"],
    products: ["nia-5000-series"],
    image: "/images/case-studies/pharmaceutical.jpg",
    publishDate: "2023-09-05",
  },
  {
    id: "cs-005",
    title: "Railway Passenger Safety and Analytics",
    slug: "railway-passenger-analytics",
    industry: "Transportation",
    client: "National Railway Operator",
    summary:
      "AI-powered passenger analytics and safety monitoring across 500+ rail cars, improving safety, optimizing capacity, and enhancing passenger experience.",
    challenge:
      "A national railway operator needed to modernize their passenger monitoring systems across 120 trains (500+ cars). They required real-time passenger counting for capacity management, safety monitoring to detect emergencies, and behavioral analytics to improve service. The railway environment presented unique challenges: extreme temperature variations (-40°C to 50°C seasonal), constant vibration, limited power availability, and zero tolerance for failures that could compromise passenger safety. Existing camera systems lacked the processing power for real-time AI analytics.",
    solution:
      "Each rail car was equipped with an NVT-7000 platform processing 4-6 camera feeds for comprehensive passenger analytics. Computer vision models perform real-time passenger counting, crowd density analysis, abandoned object detection, and unusual behavior identification. The rugged, fanless design withstands railway vibration and temperature extremes. Intelligent power management operates from 24V DC train power with automatic battery backup. Onboard edge processing eliminates bandwidth limitations and ensures real-time response for safety-critical alerts. Central servers aggregate data for route optimization and capacity planning.",
    results: [
      "Real-time passenger counting with 98% accuracy across all 500+ rail cars",
      "75% faster emergency response through automated incident detection",
      "30% improvement in passenger distribution through real-time capacity information",
      "Detection and prevention of 47 potential security incidents in first year",
      "Continuous operation through temperature extremes of -40°C to 50°C",
      "99.7% system uptime despite harsh railway environment",
    ],
    technologies: ["ai-acceleration", "power-systems", "rugged-design"],
    products: ["nvt-7000-series"],
    image: "/images/case-studies/railway.jpg",
    publishDate: "2023-07-22",
  },
];

// Helper functions
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  return caseStudies.filter((cs) => cs.industry === industry);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}

export function getIndustries(): string[] {
  return Array.from(new Set(caseStudies.map((cs) => cs.industry)));
}
