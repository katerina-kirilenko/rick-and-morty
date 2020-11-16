import { MouseEvent } from 'react';
import { Character } from 'types/characters';

export interface CharactersListItemProps {
  data: Character;
  onItemSelected: (id: string | number) => (event: MouseEvent<HTMLElement>) => void;
}
