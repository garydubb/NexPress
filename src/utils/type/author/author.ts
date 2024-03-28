export interface PostAuthor {
  author: {
    node: {
      firstName: string;
      lastName: string;
      name: string;
      avatar?: {
        url?: string;
        foundAvatar?: boolean;
      };
    };
  };
}
