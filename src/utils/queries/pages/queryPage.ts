import { gql } from '@apollo/client';
import defaultPageData from '../settings/defaultPageData';

export const querypage = gql`
  query Posts {
    ${defaultPageData}
    
  }
`;