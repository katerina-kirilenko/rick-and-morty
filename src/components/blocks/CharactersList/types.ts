import { Character } from 'types/characters';
import { MouseEvent } from 'react';

export interface ListProps {
  data: Character[] | null;
  onItemSelected: (id: string | number) => (event: MouseEvent<HTMLElement>) => void;
}
