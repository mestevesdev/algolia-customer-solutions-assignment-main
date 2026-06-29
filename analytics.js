import dotenv from 'dotenv';
dotenv.config();
import { analyticsClient } from '@algolia/client-analytics';

const client = analyticsClient(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY,
  'us'
);

const response = await client.getTopSearches({
  index: process.env.ALGOLIA_INDEX,
  clickAnalytics: true,
});

console.log(JSON.stringify(response, null, 2));