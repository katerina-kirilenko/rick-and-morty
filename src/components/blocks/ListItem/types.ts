import { MouseEvent } from 'react';
import { ItemListTypes } from 'types/';

export interface ListItemProps {
  data: ItemListTypes;
  onItemSelected: (id: string) => (event: MouseEvent<HTMLElement>) => void;
}
