import { MouseEvent } from 'react';
import { Location } from 'types/locations';

export interface ListProps {
  data: Location[] | null;
  onItemSelected: (id: string | number) => (event: MouseEvent<HTMLElement>) => void;
}
