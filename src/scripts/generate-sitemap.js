import fs from 'fs';
import path from 'path';
import { create } from 'xmlbuilder2';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Required for __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Updated base URL for the sitemap
const baseUrl = 'https://myprobuddy.com/';

// Create XML structure
const urlset = create({ version: '1.0' }).ele('urlset', {
  xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
});

urlset.ele('url')
  .ele('loc').txt(baseUrl).up()
  .ele('lastmod').txt(new Date().toISOString()).up()
  .ele('changefreq').txt('monthly').up()
  .ele('priority').txt('1.0');

const xml = urlset.end({ prettyPrint: true });

// Path to output the sitemap
const outputPath = path.resolve(__dirname, '../../public/sitemap.xml');

// Ensure directory exists
if (!fs.existsSync(path.dirname(outputPath))) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
}

// Write the sitemap file
fs.writeFileSync(outputPath, xml);

console.log('✅ Sitemap generated successfully at public/sitemap.xml');
