import React, { ReactElement } from 'react';
import { CharactersListItemProps } from './types';
import './style.css';

const CharactersListItem = ({ data, onItemSelected }: CharactersListItemProps): ReactElement => {
  return (
    <li id="1" onClick={onItemSelected('1')}>
      List Item
    </li>
  );
};

export default CharactersListItem;
