import React, { ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import CharactersList from 'components/blocks/CharactersList';
import Header from 'components/blocks/Header';
import Pagination from 'components/blocks/Pagination';
import './style.css';

const CharactersPage = (): ReactElement => {
  const history = useHistory();
  const handler = useCallback((id: string) => (): void => history.push(id), [history]);

  return (
    <div className="characters-page">
      <div className="wpapper">
        <Header />
        <section className="characters-container">
          <CharactersList onItemSelected={handler} />
          <Pagination />
        </section>
      </div>
    </div>
  );
};

export default CharactersPage;
