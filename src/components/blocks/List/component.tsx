import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import ListItem from 'components/blocks/ListItem';
import { ListProps } from './types';
import { ItemListTypes } from 'types/';
import { getState } from 'selectors';
import ErrorAlert from '../ErrorAlert';
import Spinner from '../Spinner';
import './style.css';

const List = ({ onItemSelected }: ListProps): ReactElement => {
  const { data, isLoading, error } = useSelector(getState);
  const hasData = !(isLoading || error);

  const dataListItems = data
    ? data.map((item: ItemListTypes) => {
        return <ListItem onItemSelected={onItemSelected} data={item} key={item.id} />;
      })
    : 'empty';

  return (
    <ul className="characters-list">
      {error && <ErrorAlert errorText={error} />}
      {isLoading && <Spinner />}
      {hasData && dataListItems}
    </ul>
  );
};

export default List;
