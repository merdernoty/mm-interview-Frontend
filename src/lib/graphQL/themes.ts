import { gql } from '@apollo/client';

export const GET_THEMES = gql`
    query GetThemes {
        themes {
            ... on Theme {
                title
                description
                image
                
            }
        }
    }
`;
