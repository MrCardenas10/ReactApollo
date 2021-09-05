/* eslint-disable import/no-unresolved */
import { InMemoryCache } from '@apollo/client';
import charactersVar from './characters';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: {
          read() {
            return charactersVar();
          },
        },
      },
    },
  },
});

export default cache;
