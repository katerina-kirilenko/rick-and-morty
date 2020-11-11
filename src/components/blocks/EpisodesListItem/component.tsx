import React, { ReactElement } from 'react';
import { EpisodesListItemProps } from './types';
import { useClasses } from './styles';

const EpisodesListItem = ({ data, onItemSelected }: EpisodesListItemProps): ReactElement => {
  const { id, name, air_date } = data;
  const classes = useClasses();

  return (
    <li id={`${id}`} onClick={onItemSelected(id)} className={classes.listItem}>
      <p>
        {id}. {name}
      </p>
      <p>{air_date}</p>
    </li>
  );
};

export default EpisodesListItem;
