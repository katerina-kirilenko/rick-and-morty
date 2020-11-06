import React, { ReactElement, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { MenuCardProps } from './types';
import { fetchDataCharactersRequest } from 'store/characters';
import './style.css';

const MenuCard = ({ img, label }: MenuCardProps): ReactElement => {
  const dispatch = useDispatch();

  const handlerClickByCard = useCallback(() => {
    dispatch(fetchDataCharactersRequest());
  }, [dispatch]);

  return (
    <div className="menu-card" onClick={handlerClickByCard}>
      <div className="img-wrapper">
        <img src={img} alt={label} title={label} />
      </div>
      <div className="card-description">
        <h3 className="card-title">{label}</h3>
      </div>
    </div>
  );
};

export default MenuCard;
