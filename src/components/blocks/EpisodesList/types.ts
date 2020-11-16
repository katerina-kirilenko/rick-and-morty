import { Episode } from 'types/episodes';
import { MouseEvent } from 'react';

export interface ListProps {
  data: Episode[] | null;
  onItemSelected: (id: string | number) => (event: MouseEvent<HTMLElement>) => void;
}
