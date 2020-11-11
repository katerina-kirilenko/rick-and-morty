import React, { ReactElement, useCallback } from 'react';
import EpisodesListItem from 'components/blocks/EpisodesListItem';
import { Episode } from 'types/episodes';
import { ListProps } from './types';
import './style.scss';

const EpisodesList = ({ data, onItemSelected }: ListProps): ReactElement => {
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
    <div className="list episodes-list">
      {data && (
        <div className="list-header">
          <span className="list-title-name">Name</span>
          <span className="list-title-airdate">Air date</span>
        </div>
      )}
      <ul>{data && renderList()}</ul>
    </div>
  );
};

export default EpisodesList;
