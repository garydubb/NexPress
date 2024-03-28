import { FeatureImage } from '../featureImage/featureImage';
import { Categories } from './categories';
import { Tags } from './tags';

export interface Post {
  __typename: string;
  date: string;
  slug: string;
  title: string;
  content: string;
  author: unknown;
  featuredImage: FeatureImage;
  categories: Categories;
  tags: Tags;
}

export interface Posts {
  __typename: string;
  edges: {
    slice(arg0: number): unknown;
    length?: number;
    __typename: string;
    node: Post[];
  };
}

export interface MorePosts {
  posts?: {
    [x: string]: any;
    node: Post[];
    length?: number;
  };
  length?: number;
}
