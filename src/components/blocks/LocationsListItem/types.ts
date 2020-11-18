import { MouseEvent } from 'react';
import { Location } from 'types/locations';

export interface LocationsListItemProps {
  data: Location;
  onItemSelected: (id: string | number) => (event: MouseEvent<HTMLElement>) => void;
}
