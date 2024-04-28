import { gql } from '@apollo/client';
import defaultPageData from '../settings/defaultPageData';

/**
 * Retrieves site settings through a GraphQL query.
 *
 * @returns {DocumentNode} The GraphQL query for retrieving site settings.
 */
export const querySiteSettings = gql`
  query QuerySiteSettings {
    ${defaultPageData}
  }
`;
