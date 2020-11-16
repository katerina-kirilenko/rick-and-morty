import React, { ReactElement } from 'react';
import { CharactersListItemProps } from './types';
import { useClasses } from './styles';

const CharactersListItem = ({ data, onItemSelected }: CharactersListItemProps): ReactElement => {
  const { id, image, name, status, species, origin, location } = data;
  const classes = useClasses();

  return (
    <li id={`${id}`} onClick={onItemSelected(id)} className={classes.listItem}>
      <div>
        <img src={image} alt={name} className={classes.avatar} />
      </div>
      <p className={classes.characterName}>{name}</p>
      <p className={classes.characterStatus}>
        <span>{status}</span> – <span>{species}</span>
      </p>
      <p className={classes.characterOrigin}>{origin.name}</p>
      <p className={classes.characterLocation}>{location.name}</p>
    </li>
  );
};

export default CharactersListItem;
