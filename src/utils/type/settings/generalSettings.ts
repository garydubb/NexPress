export interface Meta {
  __typename: string;
  dateFormat: string;
  description: string;
  language: string;
  startOfWeek: number;
  timeFormat: string;
  timezone?: string;
  title?: string;
  url?: string;
}

export default Meta;
