import { MouseEvent } from 'react';

export interface ListProps {
  onItemSelected: (id: string) => (event: MouseEvent<HTMLElement>) => void;
}
