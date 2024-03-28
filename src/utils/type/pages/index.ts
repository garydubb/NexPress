import { Posts } from '@/utils/type/posts';
import { SettingsData } from '@/utils/type/settings';
import { Page } from './page';

export interface PageEdge {
  node: Page;
  index?: number;
}

export interface PageData {
  page: Page;
  settings: SettingsData;
}

export interface PageIndex {
  postsResult: {
    data: {
      posts: Posts;
    };
  };
  settings: SettingsData;
}
