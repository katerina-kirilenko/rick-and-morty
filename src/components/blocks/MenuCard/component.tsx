import React, { ReactElement } from 'react';
import { MenuCardProps } from './types';
import { useClasses } from './styles';

const MenuCard = ({ img, label }: MenuCardProps): ReactElement => {
  const classes = useClasses();

  return (
    <div className={classes.menuCard}>
      <div className={classes.imgWrapper}>
        <img src={img} alt={label} title={label} />
      </div>
      <div>
        <h3 className={classes.cardTitle}>{label}</h3>
      </div>
    </div>
  );
};

export default MenuCard;
