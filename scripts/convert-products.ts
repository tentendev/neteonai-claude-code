import fs from 'fs';
import path from 'path';

// Type for scraped product data
interface ScrapedProduct {
  name: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  specifications: {
    processor?: string;
    memory?: string;
    storage?: string;
    networking?: string;
    temperature?: string;
  };
  applications: string[];
  image: string;
}

// Type for our product data format
interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
  image: string;
}

// Category slug mapping
const CATEGORY_MAP: Record<string, string> = {
  'edge-ai-computing': 'edge-ai-computing',
  'intelligent-transportation': 'intelligent-transportation',
  'industrial-automation': 'industrial-automation',
  'smart-surveillance': 'smart-surveillance'
};

// Convert scraped product to our format
function convertProduct(scraped: ScrapedProduct, index: number): Product {
  return {
    id: `neousys-${scraped.slug}`,
    name: scraped.name,
    slug: scraped.slug,
    category: CATEGORY_MAP[scraped.category] || 'edge-ai-computing',
    title: scraped.title,
    description: scraped.description || 'High-performance industrial computing solution for demanding applications.',
    features: scraped.features && scraped.features.length > 0 ? scraped.features.slice(0, 8) : [
      'Rugged fanless design for harsh environments',
      'Wide temperature operation range',
      'Industrial-grade components',
      'High-performance computing capabilities',
      'Flexible I/O configuration',
      'Long-term availability'
    ],
    specifications: {
      'Processor': scraped.specifications?.processor || 'Industrial-grade processor',
      'Memory': scraped.specifications?.memory || 'DDR4 SDRAM',
      'Storage': scraped.specifications?.storage || 'SSD/HDD support',
      'Networking': scraped.specifications?.networking || 'Gigabit Ethernet',
      'Operating Temperature': scraped.specifications?.temperature || '-25°C to 70°C',
      'Power Input': '8V to 48VDC',
      'Certifications': 'CE, FCC, MIL-STD-810G'
    },
    applications: scraped.applications && scraped.applications.length > 0 ? scraped.applications : [
      'Edge AI Computing',
      'Industrial Automation',
      'Machine Vision Systems',
      'Intelligent Transportation',
      'Smart Surveillance'
    ],
    image: scraped.image || `/images/products/placeholder.jpg`
  };
}

// Main conversion function
function main() {
  const inputFile = '/tmp/scraped_products/all_products.json';
  const outputFile = path.join(process.cwd(), 'src/data/products.ts');

  // Check if input file exists
  if (!fs.existsSync(inputFile)) {
    console.error(`❌ Input file not found: ${inputFile}`);
    console.log('   Make sure scraping is complete first.');
    process.exit(1);
  }

  console.log('📖 Reading scraped products...');
  const scrapedData = JSON.parse(fs.readFileSync(inputFile, 'utf-8')) as ScrapedProduct[];

  console.log(`   Found ${scrapedData.length} scraped products`);

  console.log('🔄 Converting to product format...');
  const products = scrapedData.map((product, index) => convertProduct(product, index));

  // Group by category for reporting
  const byCategory = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  console.log('📊 Products by category:');
  Object.entries(byCategory).forEach(([cat, count]) => {
    console.log(`   ${cat}: ${count} products`);
  });

  // Generate TypeScript file
  console.log('✍️  Generating TypeScript file...');
  const tsContent = `/**
 * Neousys Product Catalog
 * Source: https://www.neousys-tech.com/en/product
 * Scraped and processed: ${new Date().toISOString()}
 */

import { Product } from "@/types";

export const products: Product[] = ${JSON.stringify(products, null, 2)};

// Helper to get products by category
export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

// Helper to get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

// Export product categories
export const productCategories = [
  "edge-ai-computing",
  "intelligent-transportation",
  "industrial-automation",
  "smart-surveillance",
] as const;
`;

  fs.writeFileSync(outputFile, tsContent, 'utf-8');

  console.log(`\n✅ Complete! Generated ${products.length} products`);
  console.log(`   Output: ${outputFile}`);
  console.log('\n📝 Next steps:');
  console.log('   1. Review the generated products.ts file');
  console.log('   2. Restart the dev server (npm run dev)');
  console.log('   3. Visit http://localhost:3000/products to see the products');
}

main();
