import React, { ReactElement } from 'react';
import { CharactersListProps } from './types';
import './style.css';

const CharactersList = ({ onItemSelected }: CharactersListProps): ReactElement => {
  return (
    <ul>
      <li id="1" onClick={onItemSelected('1')}>
        Item 1
      </li>
      <li id="2">Item 2</li>
      <li id="3">Item 3</li>
    </ul>
  );
};

export default CharactersList;
