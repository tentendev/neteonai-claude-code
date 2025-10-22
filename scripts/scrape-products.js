const fs = require('fs');
const path = require('path');

const FIRECRAWL_API_KEY = 'fc-8c9d8c0dbae840b79242149887896f0f';
const PRODUCT_URLS_FILE = '/tmp/actual_products.txt';
const OUTPUT_DIR = '/tmp/scraped_products';
const DELAY_MS = 2000; // 2 seconds between requests to avoid rate limiting

// Create output directory
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Category mapping based on URL patterns
const getCategoryFromUrl = (url) => {
  if (url.includes('industrial-computers')) return 'edge-ai-computing';
  if (url.includes('in-vehicle') || url.includes('railway')) return 'intelligent-transportation';
  if (url.includes('edge-ai') || url.includes('nvidia') || url.includes('gpu')) return 'edge-ai-computing';
  if (url.includes('rugged') || url.includes('semil')) return 'edge-ai-computing';
  if (url.includes('machine-vision')) return 'industrial-automation';
  if (url.includes('surveillance')) return 'smart-surveillance';
  return 'edge-ai-computing'; // default
};

// Extract product name from URL
const getProductNameFromUrl = (url) => {
  const parts = url.split('/');
  const lastPart = parts[parts.length - 1];
  return lastPart.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
};

// Parse markdown to extract product info
const parseProductMarkdown = (markdown, url) => {
  const lines = markdown.split('\n');

  // Extract product name (first heading)
  let productName = '';
  let productTitle = '';
  for (const line of lines) {
    if (line.startsWith('# ') && !productName) {
      productName = line.replace('# ', '').replace(' (New!)', '').trim();
    }
    if (line.startsWith('## ') && !productTitle) {
      productTitle = line.replace('## ', '').trim();
      break;
    }
  }

  // Extract overview/introduction
  let description = '';
  let inOverview = false;
  let overviewLines = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('#### Introduction') || lines[i].includes('### Overview')) {
      inOverview = true;
      continue;
    }
    if (inOverview && lines[i].startsWith('###')) {
      break;
    }
    if (inOverview && lines[i].trim() && !lines[i].startsWith('#')) {
      overviewLines.push(lines[i].trim());
    }
  }
  description = overviewLines.slice(0, 3).join(' ').substring(0, 250);

  // Extract features (bullet points starting with -)
  const features = [];
  for (const line of lines) {
    if (line.trim().startsWith('- ') && features.length < 8) {
      features.push(line.trim().substring(2));
    }
  }

  // Extract slug from URL
  const urlParts = url.split('/');
  const slug = urlParts[urlParts.length - 1];

  return {
    name: productName || getProductNameFromUrl(url),
    slug: slug,
    category: getCategoryFromUrl(url),
    title: productTitle || productName,
    description: description || 'High-performance industrial computing solution',
    features: features.length > 0 ? features : [
      'Rugged fanless design',
      'Wide temperature operation',
      'Industrial-grade components',
      'High-performance computing'
    ],
    specifications: {
      processor: extractSpec(lines, 'Processor'),
      memory: extractSpec(lines, 'Memory'),
      storage: extractSpec(lines, 'Storage', 'SATA'),
      networking: extractSpec(lines, 'Ethernet'),
      temperature: extractSpec(lines, 'Operating', 'Temperature')
    },
    applications: [
      'Edge AI Computing',
      'Industrial Automation',
      'Machine Vision',
      'Video Analytics'
    ],
    image: `/images/products/${slug}.jpg`
  };
};

// Helper to extract spec from markdown
const extractSpec = (lines, ...keywords) => {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (keywords.every(kw => line.includes(kw))) {
      // Return next non-empty line or current line content
      const content = line.split('|').filter(p => p.trim()).slice(1).join(' ').trim();
      if (content) return content.substring(0, 100);
      if (i + 1 < lines.length) {
        return lines[i + 1].trim().substring(0, 100);
      }
    }
  }
  return 'See datasheet for specifications';
};

// Scrape a single product
async function scrapeProduct(url) {
  try {
    const response = await fetch('https://api.firecrawl.dev/v1/scrape', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${FIRECRAWL_API_KEY}`
      },
      body: JSON.stringify({
        url: url,
        formats: ['markdown']
      })
    });

    const data = await response.json();

    if (data.success && data.data && data.data.markdown) {
      return parseProductMarkdown(data.data.markdown, url);
    } else {
      console.error(`Failed to scrape ${url}:`, data);
      return null;
    }
  } catch (error) {
    console.error(`Error scraping ${url}:`, error);
    return null;
  }
}

// Delay helper
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Main function
async function main() {
  console.log('Reading product URLs...');
  const urls = fs.readFileSync(PRODUCT_URLS_FILE, 'utf-8')
    .split('\n')
    .filter(url => url.trim().length > 0);

  console.log(`Found ${urls.length} products to scrape`);

  const products = [];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`[${i + 1}/${urls.length}] Scraping: ${url}`);

    const product = await scrapeProduct(url);
    if (product) {
      products.push(product);
      console.log(`  ✓ Parsed: ${product.name}`);
    } else {
      console.log(`  ✗ Failed to parse`);
    }

    // Save progress every 10 products
    if ((i + 1) % 10 === 0) {
      fs.writeFileSync(
        path.join(OUTPUT_DIR, `products_${i + 1}.json`),
        JSON.stringify(products, null, 2)
      );
      console.log(`  → Saved progress (${products.length} products)`);
    }

    // Rate limiting
    if (i < urls.length - 1) {
      await delay(DELAY_MS);
    }
  }

  // Save final results
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'all_products.json'),
    JSON.stringify(products, null, 2)
  );

  console.log(`\n✅ Completed! Scraped ${products.length} products`);
  console.log(`   Results saved to: ${OUTPUT_DIR}/all_products.json`);
}

main().catch(console.error);
