import { MouseEvent } from 'react';
import { Character } from 'types/characters';

export interface CharactersListItemProps {
  data: Character;
  onItemSelected: (id: string) => (event: MouseEvent<HTMLElement>) => void;
}
