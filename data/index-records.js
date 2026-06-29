import algoliasearch from 'algoliasearch';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const client = algoliasearch('M0XMT0JFGK', '1ae45f0fcd136d4f1b3ae353cb74aeab');

const processRecords = async () => {
  const filePath = join(__dirname, 'products.json');
  const data = await readFile(filePath, 'utf8');
  const products = JSON.parse(data);

  const index = client.initIndex('products_index');

  return await index.saveObjects(products);
};

processRecords();