import { SettingsData } from '../settings';
import { Post, Posts } from './post';

export interface PostsData {
  post: Post;
  posts: Posts;
  settings: SettingsData;
  loading: boolean;
}

export type { Post, Posts, SettingsData };
