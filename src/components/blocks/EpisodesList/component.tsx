import React, { ReactElement, useCallback } from 'react';
import EpisodesListItem from 'components/blocks/EpisodesListItem';
import { Episode } from 'types/episodes';
import { ListProps } from './types';
import { useClasses } from './styles';

const EpisodesList = ({ data, onItemSelected }: ListProps): ReactElement => {
  const classes = useClasses();

  const renderList = useCallback(() => {
    if (data) {
      return data.map((item: Episode) => {
        return <EpisodesListItem onItemSelected={onItemSelected} data={item} key={item.id} />;
      });
    } else {
      return <p>No data</p>;
    }
  }, [data]);

  return (
    <div className={classes.list}>
      {data && (
        <div className={classes.listHeader}>
          <span>Name</span>
          <span>Air date</span>
        </div>
      )}
      <ul>{data && renderList()}</ul>
    </div>
  );
};

export default EpisodesList;
