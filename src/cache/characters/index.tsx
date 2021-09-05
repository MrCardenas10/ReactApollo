import { makeVar } from '@apollo/client';
import { Characters } from './interfaces';

const initialCharacters = {
  info: {
    count: '0',
  },
  results: [],
};

const charactersVar = makeVar<Characters>(initialCharacters);

export default charactersVar;
