import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterItemProps } from './types';
import './style.css';

const CharacterPage = (): ReactElement => {
  const { id } = useParams<CharacterItemProps>();

  return (
    <div>
      <h4>Character Item {id} (Page)</h4>
    </div>
  );
};

export default CharacterPage;
