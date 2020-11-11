import React, { ReactElement } from 'react';
import { EpisodesListItemProps } from './types';
import './style.scss';

const EpisodesListItem = ({ data, onItemSelected }: EpisodesListItemProps): ReactElement => {
  const { id, name, air_date } = data;

  return (
    <li id={`${id}`} onClick={onItemSelected(id)} className="list-item">
      <p className="episode-name">
        {id}. {name}
      </p>
      <p className="episode-airdate">{air_date}</p>
    </li>
  );
};

export default EpisodesListItem;
