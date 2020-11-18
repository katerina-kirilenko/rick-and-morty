import { MouseEvent } from 'react';
import { Character } from 'types/characters';

export interface ListProps {
  data: Character[] | null;
  onItemSelected: (id: string | number) => (event: MouseEvent<HTMLElement>) => void;
}
