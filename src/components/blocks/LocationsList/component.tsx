import React, { ReactElement, useCallback } from 'react';
import LocationsListItem from 'components/blocks/LocationsListItem';
import { Location } from 'types/locations';
import { ListProps } from './types';
import { useClasses } from './styles';

const LocationsList = ({ data, onItemSelected }: ListProps): ReactElement => {
  const classes = useClasses();

  const renderList = useCallback(() => {
    if (data) {
      return data.map((item: Location) => {
        return <LocationsListItem onItemSelected={onItemSelected} data={item} key={item.id} />;
      });
    } else {
      return <p>No data</p>;
    }
  }, [data]);

  return (
    <div className={classes.list}>
      {data && (
        <div className={classes.listHeader}>
          <span className={classes.listTitleName}>Name</span>
          <span className={classes.listTitleType}>Type</span>
          <span className={classes.listTitleDimension}>Dimension</span>
        </div>
      )}
      <ul>{data && renderList()}</ul>
    </div>
  );
};

export default LocationsList;
