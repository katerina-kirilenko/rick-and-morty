import { MouseEvent } from 'react';

export interface CharactersListProps {
  onItemSelected: (id: string) => (event: MouseEvent<HTMLElement>) => void;
}
