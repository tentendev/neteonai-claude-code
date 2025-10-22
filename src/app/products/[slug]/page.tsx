import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Download, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductBySlug, getAllProductSlugs } from "@/data/products";

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} - ${product.title}`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="border-b border-border bg-secondary/30 py-4">
        <div className="container px-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </section>

      {/* Product Header */}
      <section className="py-12">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Product Image */}
            <div className="flex items-center justify-center rounded-2xl border border-border bg-secondary/30 p-12">
              <div className="text-center">
                <div className="mb-4 text-6xl">📟</div>
                <p className="text-sm text-muted-foreground">Product Image</p>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">{product.name}</h1>
              <p className="mb-6 text-lg text-muted-foreground">{product.title}</p>

              <div className="mb-8">
                <p className="text-foreground">{product.description}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Request Quote
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Datasheet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="border-t border-border bg-secondary/10 py-16">
        <div className="container px-4">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
            </TabsList>

            {/* Features Tab */}
            <TabsContent value="features">
              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                  <CardDescription>
                    Advanced capabilities that set this platform apart
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Specifications Tab */}
            <TabsContent value="specifications">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                  <CardDescription>
                    Detailed specifications and technical details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {Object.entries(product.specifications).map(([label, value]) => (
                      <div key={label} className="flex flex-col">
                        <span className="text-sm font-semibold text-muted-foreground">
                          {label}
                        </span>
                        <span className="text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Applications Tab */}
            <TabsContent value="applications">
              <Card>
                <CardHeader>
                  <CardTitle>Typical Applications</CardTitle>
                  <CardDescription>
                    Industries and use cases where this platform excels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    {product.applications.map((application, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-lg border border-border bg-secondary/30 p-4"
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
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-16">
        <div className="container px-4">
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Contact our sales team for pricing, customization options, and technical consultation.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/support">Technical Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
