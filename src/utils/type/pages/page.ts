import { PostAuthor } from '../author/author';
import { FeatureImage } from '../featureImage/featureImage';
export interface Page {
  __typename: string;
  date: string;
  slug: string;
  title: string;
  content: string;
  author: PostAuthor; // You may define a more specific type for author if you have its structure.
  featuredImage: FeatureImage; // You may define a more specific type for featuredImage if you have its structure.
}
