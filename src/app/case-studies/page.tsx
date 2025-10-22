import Link from "next/link";
import { ArrowRight, Calendar, Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { caseStudies, getIndustries } from "@/data/case-studies";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Case Studies - Real-World Edge AI Success Stories",
  description:
    "Explore how leading organizations across industries leverage Neteon AI platforms to solve complex edge computing challenges.",
};

export default function CaseStudiesPage() {
  const industries = getIndustries();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Customer Success Stories
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Case Studies
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Real-world deployments demonstrating how Neteon AI platforms solve critical edge
              computing challenges across diverse industries. From factory automation to autonomous
              vehicles, see the measurable impact of our technology.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-secondary/30 py-12">
        <div className="container px-4">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-4xl font-bold text-primary">{caseStudies.length}+</div>
              <p className="text-sm text-muted-foreground">Success Stories</p>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-primary">{industries.length}+</div>
              <p className="text-sm text-muted-foreground">Industries</p>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-primary">99%</div>
              <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-primary">24/7</div>
              <p className="text-sm text-muted-foreground">Production Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Featured Case Studies</h2>
            <p className="text-lg text-muted-foreground">
              Explore detailed success stories from organizations transforming their operations with
              edge AI
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="border-t border-border bg-secondary/30 py-20">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Industries We Serve</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our edge AI platforms power mission-critical applications across diverse sectors
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-secondary"
              >
                <Building2 className="h-5 w-5 text-primary" />
                <span className="font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-20">
        <div className="container px-4">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-accent p-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Ready to Write Your Success Story?</h2>
            <p className="mb-8 text-lg opacity-90">
              Join the organizations achieving breakthrough results with Neteon AI edge computing
              platforms
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Case Study Card Component
function CaseStudyCard({ caseStudy }: { caseStudy: any }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Building2 className="h-4 w-4" />
            <span>{caseStudy.industry}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(caseStudy.publishDate)}</span>
          </div>
        </div>
        <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
        <CardDescription className="text-base">{caseStudy.summary}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {caseStudy.client}
          </span>
        </div>
        <Button asChild className="w-full">
          <Link href={`/case-studies/${caseStudy.slug}`}>
            Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
