import { gql } from '@apollo/client';

export const GET_SETTINGS = gql(
  `
    query SiteSettings {
      generalSettings {
        dateFormat
        description
        language
        startOfWeek
        timeFormat
        language
        timezone
        title
        url
      }
    }
  `,
);
