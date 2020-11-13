import { MouseEvent } from 'react';
import { Episode } from 'types/episodes';

export interface ListProps {
  data: Episode[] | null;
  onItemSelected: (id: string | number) => (event: MouseEvent<HTMLElement>) => void;
}
