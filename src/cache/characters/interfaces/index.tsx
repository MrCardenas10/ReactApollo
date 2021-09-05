export interface Episode {
  id: string;
  name: string;
  episode: string;
  created: string;
}

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: Episode[];
  created: string;
}

export interface Characters {
  info: {
    count: string;
  };
  results: Character[];
}
