import Link from "next/link";
import {
  Cpu,
  Shield,
  Zap,
  TrendingUp,
  Globe,
  Settings,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />

        <div className="container relative z-10 px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent md:text-6xl lg:text-7xl">
              Leading the Future of
              <br />
              Edge AI & Automation
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl lg:text-2xl">
              Committed to advancing intelligent, connected systems across industries.
              High-performance, application-oriented designs that power the next generation of edge
              computing.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="min-w-[200px]">
                <Link href="/products">
                  Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[200px]">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-secondary/30 py-16">
        <div className="container px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">+38%</div>
              <p className="text-sm text-muted-foreground">Deployment Speed</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">99.99%</div>
              <p className="text-sm text-muted-foreground">Uptime Guarantee</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">-40°~70°C</div>
              <p className="text-sm text-muted-foreground">Operating Range</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">24/7</div>
              <p className="text-sm text-muted-foreground">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-12">
        <div className="container px-4">
          <p className="mb-8 text-center text-sm text-muted-foreground">
            Trusted by engineering teams worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale transition-all hover:opacity-80 hover:grayscale-0">
            {["IndustrialTech", "AutoDrive Systems", "SmartFactory", "SecureView", "EdgeCloud"].map(
              (company) => (
                <div key={company} className="text-xl font-bold text-muted-foreground">
                  {company}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Engineering-Grade Solutions</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Built for performance, designed for scale, optimized for your workflow
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>High-Performance Edge Computing</CardTitle>
                <CardDescription>
                  Deploy AI models at the edge with millisecond latency. Optimized for real-time
                  inference and decision-making in industrial environments.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Industrial-Grade Reliability</CardTitle>
                <CardDescription>
                  MIL-STD-810G certified systems designed for extreme environments. Fanless cooling,
                  wide temperature range, and 24/7 operation capability.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Advanced AI Acceleration</CardTitle>
                <CardDescription>
                  Support for NVIDIA GPU, Intel Movidius, and Google Coral accelerators. Flexible
                  expansion for evolving AI workloads.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Scalable Architecture</CardTitle>
                <CardDescription>
                  From edge devices to centralized servers. Modular design allows seamless scaling
                  from prototype to production deployment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Industry-Specific Solutions</CardTitle>
                <CardDescription>
                  Tailored platforms for manufacturing, transportation, surveillance, and smart
                  cities. Pre-configured for rapid deployment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Comprehensive Support</CardTitle>
                <CardDescription>
                  Expert technical support, extensive documentation, and customization services.
                  From design-in to after-sales maintenance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-secondary/30 py-20">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Product Categories</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Specialized computing platforms for demanding edge AI applications
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="group overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">Edge AI Computing</CardTitle>
                <CardDescription className="text-base">
                  GPU-accelerated platforms for deep learning inference at the edge. Support for
                  multiple AI frameworks and flexible I/O expansion.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="group-hover:translate-x-1">
                  <Link href="/products/edge-ai-computing">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">Industrial Automation</CardTitle>
                <CardDescription className="text-base">
                  Ruggedized systems for factory automation, machine vision, and quality inspection.
                  Fanless operation and wide temperature range.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="group-hover:translate-x-1">
                  <Link href="/products/industrial-automation">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">Intelligent Transportation</CardTitle>
                <CardDescription className="text-base">
                  In-vehicle computing for ADAS, autonomous driving, and fleet management.
                  Automotive-grade reliability with 9-48V ignition power control.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="group-hover:translate-x-1">
                  <Link href="/products/intelligent-transportation">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">Smart Surveillance</CardTitle>
                <CardDescription className="text-base">
                  AI-powered video analytics platforms with support for up to 32 IP cameras. Real-time
                  object detection, tracking, and behavior analysis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="group-hover:translate-x-1">
                  <Link href="/products/smart-surveillance">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Highlights */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Core Technologies</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Proprietary innovations that set our platforms apart
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-4 text-2xl font-bold">Patented Thermal Management</h3>
              <p className="mb-6 text-muted-foreground">
                Advanced fanless cooling technology enabling high-performance computing in confined
                spaces. Support for 300W+ GPU cards without active cooling.
              </p>
              <ul className="space-y-2">
                {[
                  "Patented heatsink design with optimized airflow",
                  "Support for extreme ambient temperatures",
                  "Zero moving parts for maximum reliability",
                  "Compliant with MIL-STD-810G shock and vibration",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="ghost" className="mt-6">
                <Link href="/technologies/thermal-management">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-4 text-2xl font-bold">Intelligent Power Systems</h3>
              <p className="mb-6 text-muted-foreground">
                Flexible power input options with intelligent management. Wide-range DC input, ATX
                power supply support, and battery backup integration.
              </p>
              <ul className="space-y-2">
                {[
                  "9-48V wide-range DC input with ignition control",
                  "Intelligent power sequencing and monitoring",
                  "Over-voltage and over-current protection",
                  "Remote power on/off and wake-on-LAN",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="ghost" className="mt-6">
                <Link href="/technologies/power-systems">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-accent py-20 text-white">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Transform Your Edge AI Deployment?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Join hundreds of engineering teams building the future with Neteon AI platforms
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="min-w-[200px] bg-white text-primary hover:bg-white/90"
            >
              <Link href="/contact">Request a Demo</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-w-[200px] border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
