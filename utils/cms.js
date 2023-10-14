import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2021-06-07',
  ignoreBrowserTokenWarning: true,
  useCdn: true,
});

export const imageBuilder = imageUrlBuilder(client);

export const getSanityContent = ({ query, variables = {} }) => client.fetch(query, variables);

export const Body = props => <BlockContent projectId={projectId} dataset={dataset} {...props} />;
