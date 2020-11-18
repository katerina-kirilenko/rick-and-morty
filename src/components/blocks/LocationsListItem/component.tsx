import React, { ReactElement } from 'react';
import { LocationsListItemProps } from './types';
import { useClasses } from './styles';

const LocationsListItem = ({ data, onItemSelected }: LocationsListItemProps): ReactElement => {
  const { id, name, type, dimension } = data;
  const classes = useClasses();

  return (
    <li id={`${id}`} onClick={onItemSelected(id)} className={classes.listItem}>
      <p className={classes.locationName}>
        {id}. {name}
      </p>
      <p className={classes.locationType}>{type}</p>
      <p className={classes.locationDimension}>{dimension}</p>
    </li>
  );
};

export default LocationsListItem;
