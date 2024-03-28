interface Category {
  __typename?: string;
  node: {
    __typename?: string;
    name: string;
  };
}

export interface Categories {
  __typename: string;
  edges: Category[];
}
