import React, { ReactElement } from 'react';
import Header from 'components/blocks/Header';
import './style.css';

const LocationsPage = (): ReactElement => {
  return (
    <div className="locations-page">
      <Header />
      <h2>Locations Page</h2>
    </div>
  );
};

export default LocationsPage;
