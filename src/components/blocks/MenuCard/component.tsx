import React, { ReactElement } from 'react';
import { MenuCardProps } from './types';
import './style.css';

const MenuCard = ({ img, label }: MenuCardProps): ReactElement => {
  return (
    <div className="menu-card">
      <div className="img-wrapper">
        <img src={img} alt={label} />
      </div>
      <div className="card-description">
        <h3 className="card-title">{label}</h3>
      </div>
    </div>
  );
};

export default MenuCard;
