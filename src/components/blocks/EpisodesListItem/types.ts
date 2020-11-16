import { MouseEvent } from 'react';
import { Episode } from 'types/episodes';

export interface EpisodesListItemProps {
  data: Episode;
  onItemSelected: (id: string | number) => (event: MouseEvent<HTMLElement>) => void;
}
