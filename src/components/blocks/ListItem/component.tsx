import React, { ReactElement } from 'react';
import { ListItemProps } from './types';
import './style.css';

const ListItem = ({ data, onItemSelected }: ListItemProps): ReactElement => {
  console.log('ListItem -> data', data);

  return (
    <li id="1" onClick={onItemSelected('1')}>
      List Item
    </li>
  );
};

export default ListItem;
