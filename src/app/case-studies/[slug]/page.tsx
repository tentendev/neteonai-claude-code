import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Building2, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/data/case-studies";
import { getTechnologyBySlug } from "@/data/technologies";
import { getProductBySlug } from "@/data/products";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${caseStudy.title} - Case Study`,
    description: caseStudy.summary,
  };
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="border-b border-border bg-secondary/30 py-4">
        <div className="container px-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>
        </div>
      </section>

      {/* Header */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span>{caseStudy.industry}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(caseStudy.publishDate)}</span>
              </div>
              <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {caseStudy.client}
              </div>
            </div>

            <h1 className="mb-6 text-4xl font-bold md:text-5xl">{caseStudy.title}</h1>
            <p className="text-xl text-muted-foreground">{caseStudy.summary}</p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="border-y border-border bg-secondary/10 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold">The Challenge</h2>
            <p className="text-lg leading-relaxed">{caseStudy.challenge}</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold">The Solution</h2>
            <p className="text-lg leading-relaxed">{caseStudy.solution}</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-y border-border bg-secondary/10 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">The Results</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {caseStudy.results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-6"
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-accent" />
                  <p className="text-lg">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Products */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Technologies */}
              <div>
                <h3 className="mb-6 text-2xl font-bold">Technologies Used</h3>
                <div className="space-y-4">
                  {caseStudy.technologies.map((techSlug) => {
                    const tech = getTechnologyBySlug(techSlug);
                    if (!tech) return null;

                    return (
                      <Card key={tech.id}>
                        <CardHeader>
                          <CardTitle className="text-lg">{tech.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4 text-sm text-muted-foreground">{tech.description}</p>
                          <Button asChild variant="outline" size="sm">
                            <Link href={`/technologies/${tech.slug}`}>Learn More</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Products */}
              <div>
                <h3 className="mb-6 text-2xl font-bold">Products Deployed</h3>
                <div className="space-y-4">
                  {caseStudy.products.map((productSlug) => {
                    const product = getProductBySlug(productSlug);
                    if (!product) return null;

                    return (
                      <Card key={product.id}>
                        <CardHeader>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4 text-sm text-muted-foreground">
                            {product.shortDescription}
                          </p>
                          <Button asChild variant="outline" size="sm">
                            <Link href={`/products/${product.slug}`}>View Product</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Achieve Similar Results</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Discuss your specific requirements with our technical team and discover how Neteon AI
              platforms can transform your operations.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
