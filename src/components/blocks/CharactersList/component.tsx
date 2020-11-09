import React, { ReactElement, useCallback } from 'react';
import CharactersListItem from 'components/blocks/CharactersListItem';
import { ListProps } from './types';
import { Character } from 'types/characters';
import './style.css';

const CharactersList = ({ data, onItemSelected }: ListProps): ReactElement => {
  const renderList = useCallback(() => {
    if (data) {
      return data.map((item: Character) => {
        return <CharactersListItem onItemSelected={onItemSelected} data={item} key={item.id} />;
      });
    } else {
      return <p>No data</p>;
    }
  }, [data]);

  return (
    <div className="characters-list">
      {data && (
        <div className="list-header">
          <span className="list-title-img">Photo</span>
          <span className="list-title-name">Name</span>
          <span className="list-title-status">Status – Species</span>
          <span className="list-title-origin">Origin location</span>
          <span className="list-title-location">Last known location</span>
        </div>
      )}
      <ul>{data && renderList()}</ul>
    </div>
  );
};

export default CharactersList;
