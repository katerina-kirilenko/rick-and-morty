import React, { ReactElement } from 'react';
import { CharactersListItemProps } from './types';
import './style.css';

const CharactersListItem = ({ data, onItemSelected }: CharactersListItemProps): ReactElement => {
  const { id, image, name, status, species, origin, location } = data;

  return (
    <li id={`${id}`} onClick={onItemSelected(`${id}`)} className="list-item">
      <div className="character-img">
        <img src={image} alt={name} className="avatar" />
      </div>
      <p className="character-name">{name}</p>
      <p className="character-status">
        <span>{status}</span> – <span>{species}</span>
      </p>
      <p className="character-origin">{origin.name}</p>
      <p className="character-location">{location.name}</p>
    </li>
  );
};

export default CharactersListItem;
