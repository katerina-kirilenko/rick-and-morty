import React, { ReactElement, useCallback } from 'react';
import { useSelector } from 'react-redux';
import CharactersListItem from 'components/blocks/CharactersListItem';
import { ListProps } from './types';
import { Character } from 'types/characters';
import { getCharacters } from 'store/characters';
import ErrorAlert from 'components/blocks/ErrorAlert';
import Spinner from 'components/blocks/Spinner';
import './style.css';

const CharactersList = ({ onItemSelected }: ListProps): ReactElement => {
  const { data, isLoading, error } = useSelector(getCharacters);
  const hasData = !(isLoading || error);

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
    <ul className="characters-list">
      {error && <ErrorAlert errorText={error} />}
      {isLoading && <Spinner />}
      {hasData && renderList()}
    </ul>
  );
};

export default CharactersList;
