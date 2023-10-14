import { getSanityContent } from './cms';

export const getArticles = (limit='') => getSanityContent({
  query:`*[_type == "article"]${limit ? `[0..${limit}]` : ''} { title, date, reference, "imageUrl": image.asset->url, slug, author, publishedAt } | order(publishedAt desc)` ,
}).then((data) => data || []);

export const getArticle = (slug) => getSanityContent({
  query: '*[_type == "article" && slug.current == $slug] { categories, title, date, "bodyRaw":content, "imageUrl": image.asset->url, author, publishedAt }',
  variables: {
    slug,
  },
}).then((data) => data[0]);

export const getSlugs = () => getSanityContent({
  query: '*[_type == "article"] { slug }',
}).then((data) => data);