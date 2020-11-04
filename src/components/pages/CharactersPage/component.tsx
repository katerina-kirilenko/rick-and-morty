import React, { ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import CharactersList from 'components/blocks/CharactersList/';
import './style.css';

const CharactersPage = (): ReactElement => {
  const history = useHistory();
  const handler = useCallback((id: string) => (): void => history.push(id), [history]);

  return (
    <div>
      <h2>Characters Page</h2>
      <h3>Characters List</h3>
      <CharactersList onItemSelected={handler} />
    </div>
  );
};

export default CharactersPage;
