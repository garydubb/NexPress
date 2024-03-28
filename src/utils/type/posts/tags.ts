interface Tag {
  __typename?: string;
  node: {
    __typename?: string;
    name: string;
  };
}

export interface Tags {
  __typename?: string;
  edges: Tag[];
}
