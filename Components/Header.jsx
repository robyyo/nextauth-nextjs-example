import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
      <header className={styles.header}>
        <div>
          <Link href="/">
            <h3>NextAuth Example</h3>
          </Link>
        </div>
        <nav>
          <ul className={styles.navbar}>
            <li className={styles.link}>
              <Link href="/api/auth/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;
