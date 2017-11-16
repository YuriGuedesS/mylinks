import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';

const Menu = () => {
  return (
    <ul className="sidebar-menu">
      <li>
        <Link className="menu-link" to="/">
          <Icon type={'fa fa-home'} size={'small'} color={'white'} />
          <span className="title">{'Home'}</span>
        </Link>
      </li>
      <li>
        <Link className="menu-link" to="/cadastrar">
          <Icon type={'fa fa-link'} size={'small'} color={'white'} />
          <span className="title">{'Add Link'}</span>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;