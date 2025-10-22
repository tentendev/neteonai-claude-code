import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products, getProductsByCategory } from "@/data/products";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

export const metadata = {
  title: "Products - Industrial Edge AI Computing Platforms",
  description:
    "Explore our complete range of edge AI computing platforms for industrial automation, intelligent transportation, and smart surveillance applications.",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Industrial Edge AI Platforms
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              High-performance computing solutions engineered for demanding edge AI deployments.
              From factory floors to autonomous vehicles, our platforms deliver reliability and
              performance where it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Tabs */}
      <section className="py-16">
        <div className="container px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2 lg:grid-cols-5">
              <TabsTrigger value="all">All Products</TabsTrigger>
              {PRODUCT_CATEGORIES.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* All Products */}
            <TabsContent value="all" className="space-y-12">
              {PRODUCT_CATEGORIES.map((category) => {
                const categoryProducts = getProductsByCategory(category.id);
                return (
                  <div key={category.id}>
                    <div className="mb-6">
                      <h2 className="mb-2 text-2xl font-bold">{category.name}</h2>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      {categoryProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </TabsContent>

            {/* Individual Category Tabs */}
            {PRODUCT_CATEGORIES.map((category) => {
              const categoryProducts = getProductsByCategory(category.id);
              return (
                <TabsContent key={category.id} value={category.id}>
                  <div className="mb-8">
                    <h2 className="mb-3 text-3xl font-bold">{category.name}</h2>
                    <p className="text-lg text-muted-foreground">{category.description}</p>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    {categoryProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-secondary/30 py-16">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Need Help Choosing the Right Platform?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Our technical team can help you select the optimal configuration for your specific
            application requirements.
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
      </section>
    </div>
  );
}

// Product Card Component
function ProductCard({ product }: { product: any }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl">{product.name}</CardTitle>
        <CardDescription className="text-base">{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="mb-6">
          <h4 className="mb-3 font-semibold">Key Features:</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {product.features.slice(0, 4).map((feature: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3">
          <Button asChild className="flex-1">
            <Link href={`/products/${product.slug}`}>
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Quote</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
