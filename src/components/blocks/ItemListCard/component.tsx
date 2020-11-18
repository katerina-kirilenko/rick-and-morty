import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ItemListCardProps } from './types';
import { useClasses } from './styles';

const ItemListCard = ({
  path = '/',
  number = '1',
  color,
  backgroundColor,
  hover = false,
  label,
}: ItemListCardProps): ReactElement => {
  const classes = useClasses();
  const hoverColor = hover ? classes.hover : classes.default;

  return (
    <li className={classes.itemList} style={{ backgroundColor }}>
      <Link to={path} style={{ color }} className={hoverColor}>
        <span>
          {label} № {number}
        </span>
      </Link>
    </li>
  );
};

export default ItemListCard;
