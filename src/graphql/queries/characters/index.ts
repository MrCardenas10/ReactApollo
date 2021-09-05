import { gql } from '@apollo/client';

const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
      }
      results {
        id
        name
        status
        species
        type
        gender
        image
        episode {
          id
          name
          episode
          created
        }
        created
      }
    }
  }
`;

export { GET_ALL_CHARACTERS as default };
