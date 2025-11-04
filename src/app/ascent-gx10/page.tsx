import type { Metadata } from "next";
import { AscentHero } from "@/components/ascent/hero";
import { AscentTrustBar } from "@/components/ascent/trust-bar";
import { AscentFeatures } from "@/components/ascent/features";
import { AscentPerformance } from "@/components/ascent/performance";
import { AscentModels } from "@/components/ascent/models";
import { AscentConnectivity } from "@/components/ascent/connectivity";
import { AscentSoftware } from "@/components/ascent/software";
import { AscentApplications } from "@/components/ascent/applications";
import { AscentSpecs } from "@/components/ascent/specs";
import { AscentCTA } from "@/components/ascent/cta";

export const metadata: Metadata = {
  title: "Ascent GX10 | Desktop AI Supercomputer",
  description:
    "1 petaFLOP AI performance in a compact desktop. Powered by NVIDIA GB10 Grace Blackwell. The AI supercomputer that doesn't need its own room.",
  keywords: [
    "AI supercomputer",
    "desktop AI",
    "NVIDIA Grace Blackwell",
    "GB10",
    "petaflop",
    "AI training",
    "deep learning",
    "edge AI",
  ],
};

export default function AscentGX10Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AscentHero />
      <AscentTrustBar />
      <AscentFeatures />
      <AscentPerformance />
      <AscentModels />
      <AscentConnectivity />
      <AscentSoftware />
      <AscentApplications />
      <AscentSpecs />
      <AscentCTA />
    </div>
  );
}
