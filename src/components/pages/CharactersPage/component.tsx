import React, { ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import List from 'components/blocks/List';
import Header from 'components/blocks/Header';
import Pagination from 'components/blocks/Pagination';
import './style.css';

const CharactersPage = (): ReactElement => {
  const history = useHistory();
  const handler = useCallback((id: string) => (): void => history.push(id), [history]);

  return (
    <div className="characters-page">
      <Header />
      <section className="characters-container">
        <h3 className="title-list">Characters List</h3>
        <List onItemSelected={handler} />
        <Pagination />
      </section>
    </div>
  );
};

export default CharactersPage;
