import { MenuItem } from './menuItem';

interface MenuEdge {
  __typename: string;
  node: {
    __typename: string;
    slug: string;
    name: string;
    menuId: number;
    locations: string[];
    isRestricted: boolean;
    id: string;
    databaseId: number;
    count: number;
    menuItems: {
      __typename: string;
      edges: MenuItem[];
    };
  };
}

export interface MenuConnection {
  __typename: string;
  edges: MenuEdge[];
}
