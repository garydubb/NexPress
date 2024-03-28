export interface MenuItem {
  __typename: string;
  id: string;
  description: string | null;
  cssClasses: string;
  label: string;
  order: number;
  title: string | null;
  target: string | null;
  uri: string;
}
