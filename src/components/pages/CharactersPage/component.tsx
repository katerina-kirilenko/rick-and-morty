import React, { ReactElement } from 'react';
import CharactersList from 'components/blocks/CharactersList/';
import { CharactersPageProps } from './types';
import './style.css';

const CharactersPage = ({ history }: CharactersPageProps): ReactElement => {
  const handler = (id: string) => (): void => history.push(id);

  return (
    <div>
      <h2>Characters Page</h2>
      <h3>Characters List</h3>
      <CharactersList onItemSelected={handler} />
    </div>
  );
};

export default CharactersPage;
