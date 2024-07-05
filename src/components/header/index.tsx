import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const menuItems = useMemo(
    () => [
      {
        label: 'Бригады',
        link: '/',
      },
      {
        label: 'Статистика',
        link: '/statistics',
      },
    ],
    [],
  );

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <h1 className={styles.title}>B1336</h1>
          <nav className={styles.menu}>
            <ul className={styles.menuList}>
              {menuItems.map(({ label, link }) => (
                <li
                  key={link}
                  className={styles.menuItem}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styles.menuLinkActive : styles.menuLink
                    }
                    to={link}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
