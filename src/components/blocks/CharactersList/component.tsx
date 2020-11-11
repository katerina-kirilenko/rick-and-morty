import React, { ReactElement, useCallback } from 'react';
import CharactersListItem from 'components/blocks/CharactersListItem';
import { Character } from 'types/characters';
import { ListProps } from './types';
import { useClasses } from './styles';

const CharactersList = ({ data, onItemSelected }: ListProps): ReactElement => {
  const classes = useClasses();

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
    <div className={classes.list}>
      {data && (
        <div className={classes.listHeader}>
          <span className={classes.listTitleImg}>Photo</span>
          <span className={classes.listTitleName}>Name</span>
          <span className={classes.listTitleStatus}>Status – Species</span>
          <span className={classes.listTitleOrigin}>Origin location</span>
          <span className={classes.listTitleLocation}>Last known location</span>
        </div>
      )}
      <ul>{data && renderList()}</ul>
    </div>
  );
};

export default CharactersList;
