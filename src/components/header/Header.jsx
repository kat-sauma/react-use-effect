import React from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.css';

const Header = () => {
  return (
    <header className={style.headerContainer}>
      <Link className={style.linkText} to="/">
                Back2Queens
      </Link>
      <h1 className={style.pageTitle}>BRING BACK MY GIRLS </h1>
      <h4 className={style.subtitle}>
          A Ru Paul's Drag Race archive of the ultimate Drag Queen Superstars.
      </h4>
    </header>
  );
};

export default Header;
