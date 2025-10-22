import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getTechnologyBySlug, getAllTechnologySlugs } from "@/data/technologies";
import { getProductBySlug } from "@/data/products";

export async function generateStaticParams() {
  const slugs = getAllTechnologySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const technology = getTechnologyBySlug(params.slug);

  if (!technology) {
    return { title: "Technology Not Found" };
  }

  return {
    title: `${technology.name} - Core Technology`,
    description: technology.description,
  };
}

export default function TechnologyDetailPage({ params }: { params: { slug: string } }) {
  const technology = getTechnologyBySlug(params.slug);

  if (!technology) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="border-b border-border bg-secondary/30 py-4">
        <div className="container px-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/technologies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Technologies
            </Link>
          </Button>
        </div>
      </section>

      {/* Technology Header */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Core Technology
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">{technology.name}</h1>
            <p className="mb-8 text-xl text-muted-foreground">{technology.description}</p>
            <p className="text-lg">{technology.longDescription}</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-y border-border bg-secondary/10 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">Key Benefits</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {technology.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">Technical Deep Dive</h2>
            <div className="space-y-6">
              {technology.technicalDetails.map((detail, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{detail.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{detail.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="border-y border-border bg-secondary/10 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">Applications</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {technology.applications.map((application, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-xl">📊</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{application}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">Products Featuring This Technology</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {technology.relatedProducts.map((productSlug) => {
                const product = getProductBySlug(productSlug);
                if (!product) return null;

                return (
                  <Card key={product.id}>
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild>
                        <Link href={`/products/${product.slug}`}>View Product</Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Learn More About This Technology</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Schedule a technical consultation to discuss how this technology can benefit your
              specific application.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Contact Technical Team</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
