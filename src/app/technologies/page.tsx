import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { technologies } from "@/data/technologies";

export const metadata = {
  title: "Core Technologies - Proprietary Innovations for Edge Computing",
  description:
    "Explore the proprietary technologies that power Neteon AI platforms, from advanced thermal management to AI acceleration.",
};

export default function TechnologiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Proprietary Innovations
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Core Technologies
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Breakthrough innovations that enable high-performance edge AI computing in the most
              demanding environments. Our patented technologies solve the critical challenges of
              thermal management, power delivery, and rugged reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Technology Portfolio</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Four pillars of innovation that differentiate our edge computing platforms
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {technologies.map((tech, index) => (
              <Card key={tech.id} className="group relative overflow-hidden">
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{tech.name}</CardTitle>
                  <CardDescription className="text-base">{tech.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-sm text-muted-foreground">{tech.longDescription}</p>
                  <Button asChild variant="ghost" className="group-hover:translate-x-1">
                    <Link href={`/technologies/${tech.slug}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Benefits */}
      <section className="border-y border-border bg-secondary/30 py-20">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Our Technologies Matter</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Real-world benefits that translate to lower costs and higher reliability
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-4 text-4xl font-bold text-primary">50%</div>
              <h3 className="mb-2 text-xl font-semibold">Lower TCO</h3>
              <p className="text-sm text-muted-foreground">
                Fanless design eliminates maintenance costs and extends system lifespan through
                reduced wear on components
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-4 text-4xl font-bold text-primary">99.9%</div>
              <h3 className="mb-2 text-xl font-semibold">Uptime</h3>
              <p className="text-sm text-muted-foreground">
                Rugged design and comprehensive protection ensure reliable operation in harsh
                industrial environments
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-4 text-4xl font-bold text-primary">3x</div>
              <h3 className="mb-2 text-xl font-semibold">Performance</h3>
              <p className="text-sm text-muted-foreground">
                AI acceleration and optimized thermal management deliver up to 3x the performance
                of standard industrial PCs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-accent p-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">See Our Technologies in Action</h2>
            <p className="mb-8 text-lg opacity-90">
              Request a technical consultation to learn how our innovations can solve your edge
              computing challenges
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
