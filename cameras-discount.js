import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs/promises';
import algoliasearch from 'algoliasearch';

const client = algoliasearch(
process.env.ALGOLIA_APP_ID,
process.env.ALGOLIA_API_KEY
);

const index = client.initIndex(process.env.ALGOLIA_INDEX);

const rawData = await fs.readFile('./data/products.json', 'utf8');
const products = JSON.parse(rawData);

const updatedProducts = products.map((product) => {
const isCamera = product.categories?.includes('Cameras & Camcorders');

if (!isCamera) {
return product;
}

return {
...product,
price: Math.floor(product.price * 0.8),
};
});

await index.replaceAllObjects(updatedProducts);
