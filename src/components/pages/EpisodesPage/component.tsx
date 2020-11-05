import React, { ReactElement } from 'react';
import Header from 'components/blocks/Header';
import './style.css';

const EpisodesPage = (): ReactElement => {
  return (
    <div className="episodes-page">
      <Header />
      <h2>Episodes Page</h2>
    </div>
  );
};

export default EpisodesPage;
