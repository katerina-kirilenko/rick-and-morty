import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Header from 'components/blocks/Header';
import { useClasses } from './styles';

const LocationsPage = (): ReactElement => {
  const classes = useClasses();

  return (
    <div className={clsx('page', classes.locationsPage)}>
      <div className="wrapper">
        <Header />
        <section className="container">
          <h2>Locations Page</h2>
        </section>
      </div>
    </div>
  );
};

export default LocationsPage;
